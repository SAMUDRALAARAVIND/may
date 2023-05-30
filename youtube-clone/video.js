let cookieString = document.cookie;
let videoId =  cookieString.split("=")[1];
const apiKey = localStorage.getItem("api_key")

let firstScript = document.getElementsByTagName("script")[0] ;

firstScript.addEventListener("load", onLoadScript)

function onLoadScript() {
  if (YT) {
    new YT.Player("aravind", {
      height: "500",
      width: "850",
      videoId,
      events: {
        onReady: (event) => {
            document.title = event.target.videoTitle ;
            extractVideoDetails(videoId);
            fetchStats(videoId)
        }
      }
    });
  }
}

const statsContainer = document.getElementsByClassName("video-details")[0] ;

async function extractVideoDetails(videoId){ 
    let endpoint = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}`;

    try {
        let response = await fetch(endpoint);
        let result = await response.json();
        console.log(result, "comments")
        renderComments(result.items);
    }
    catch(error){
        console.log(`Error occured`, error)
    }
    
}

async function  fetchStats(videoId){
    console.log("Inside fetchStats")
    let endpoint = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=${apiKey}&id=${videoId}`;
    try {
        const response = await fetch(endpoint);
        const result = await response.json();
        const item = result.items[0] ;
        const title = document.getElementById("title");
        title.innerText = item.snippet.title ;
        title.style.color = "white";
        title.style.fontSize = "20px"
        statsContainer.innerHTML = `
        <div class="profile">
                <img src="https://i.ytimg.com/vi/D-qj0L68RhQ/default.jpg" class="channel-logo" alt="">
                <div class="owner-details">
                    <span style="color: white ">${item.snippet.channelTitle}</span>
                    <span>20 subscribers</span>
                </div>
        </div>
        <div class="stats">
            <div class="like-container">
                <div class="like">
                    <span class="material-icons">thumb_up</span>
                    <span>${item.statistics.likeCount}</span>
                </div>
                <div class="like">
                    <span class="material-icons">thumb_down</span>
                </div>
            </div>
            <div class="comments-container">
                <span class="material-icons">comment</span>
                <span>${item.statistics.commentCount}</span>
            </div>
        </div>
        `
    }
    catch(error){
        //TODO: handle error later
        console.log("error", error)
    }
}

 

function renderComments(commentsList) {
    const commentsContainer = document.getElementById("comments-container"); 
    // commentsContainer.
    for(let i =  0; i < commentsList.length ; i++) {
        let comment = commentsList[i] ;
        const topLevelComment = comment.snippet.topLevelComment ;

        let commentElement = document.createElement("div");
        commentElement.className = "comment" ;
        commentElement.innerHTML = `
                <img src="${topLevelComment.snippet.authorProfileImageUrl}" alt="">
                <div class="comment-right-half">
                    <b>${topLevelComment.snippet.authorDisplayName
                    }</b>
                    <p>${topLevelComment.snippet.textOriginal}</p>
                    <div style="display: flex; gap: 20px">
                        <div class="like">
                            <span class="material-icons">thumb_up</span>
                            <span>${topLevelComment.snippet.likeCount}</span>
                        </div>
                        <div class="like">
                            <span class="material-icons">thumb_down</span>
                        </div>
                        <button class="reply" onclick="loadComments(this)" data-comment-id="${topLevelComment.id}">
                            Replies(${comment.snippet.totalReplyCount})
                        </button>
                    </div>
                </div>
            `;
        commentsContainer.append(commentElement);

    }
}

async function loadComments(element){
    const commentId = element.getAttribute("data-comment-id");
    console.log(commentId)
    let endpoint = `https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=${commentId}&key=${apiKey}`;
    try {
       const response =  await fetch(endpoint);
        const result = await response.json();
        const parentNode = element.parentNode.parentNode ;
        let commentsList = result.items ;
        for(let i = 0 ; i < commentsList.length ; i++) {
            let replyComment =  commentsList[i] ; 
            let commentNode = document.createElement("div");
            commentNode.className = "comment comment-reply";

            commentNode.innerHTML = `
                        <img src="${replyComment.snippet.authorProfileImageUrl}" alt="">
                        <div class="comment-right-half">
                            <b>${replyComment.snippet.authorDisplayName}</b>
                            <p>${replyComment.snippet.textOriginal}</p>
                            <div class="options">
                                <div class="like">
                                    <span class="material-icons">thumb_up</span>
                                    <span>${replyComment.snippet.likeCount}</span>
                                </div>
                                <div class="like">
                                    <span class="material-icons">thumb_down</span>
                                </div>
                            </div>
                    `;

                parentNode.append(commentNode);
        }
    }   
    catch(error){

    }
}

