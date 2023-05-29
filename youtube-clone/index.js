const searchInput = document.getElementById("search-input");
const apiKey = "AIzaSyBprXFgJkoIn4TkCLOCXd9HLOujKmt9evk";
const container = document.getElementById("container");

/*
    https://youtube.googleapis.com/youtube/v3/search?part=snippet,statistics&maxResults=1&q=mycodeschool&key=AIzaSyBprXFgJkoIn4TkCLOCXd9HLOujKmt9evk
*/
function searchVideos() {
  let searchValue = searchInput.value;
  // fetch the list of videos for this searchValue
  fetchVideos(searchValue);
}

async function fetchVideos(searchValue) {
  // make api call

  let endpoint = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue}&key=${apiKey}`;

  try {
    let response = await fetch(endpoint); // response is instance of Response class
    let result = await response.json();
    for(let i = 0 ; i < result.items.length; i++) {
        let video = result.items[i] ;
        let videoStats = await fetchStats(video.id.videoId)
        if(videoStats.items.length > 0)
            result.items[i].videoStats = videoStats.items[0].statistics; 
            result.items[i].duration = videoStats.items[0] && videoStats.items[0].contentDetails.duration
    }
    showThumbnails(result.items);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

function getViews(n){
    if(n < 1000) return n ;
    else if ( n >= 1000 && n <= 999999){
        n /= 1000;
        n = parseInt(n)
        return n+"K" ;
    }
    return parseInt(n / 1000000) + "M" ;
}

function showThumbnails(items) {
  for (let i = 0; i < items.length; i++) {
    let videoItem = items[i];
    let imageUrl = videoItem.snippet.thumbnails.high.url;
    let videoElement = document.createElement("div");

    const videoChildren = `
        <img src="${imageUrl}" />
        <b>${formattedData(videoItem.duration)}</b>
        <p class="title">${videoItem.snippet.title}</p>
        <p class="channel-name">${videoItem.snippet.channelTitle}</p>
        <p class="view-count">${videoItem.videoStats ? getViews(videoItem.videoStats.viewCount) + "  Views": "NA"}</p>
    `;
    videoElement.innerHTML = videoChildren ;
    container.append(videoElement);
  }
}
async function fetchStats(videoId){ 
   const endpoint = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=statistics,contentDetails&id=${videoId}`;
   let response = await fetch(endpoint); 
   let result = await response.json();
   return result ;
}
function formattedData(duration) {
    if(!duration) return "NA" ;
    // PT2H33M23S
    let hrs = duration.slice(2, 4);
    let mins = duration.slice(5, 7);
    let seconds ;
    if(duration.length > 8){
        seconds = duration.slice(8, 10);
    }
    let str = `${hrs}:${mins}`;
    seconds && (str += `:${seconds}`)
    return str ;
}
  

// < 1000 display as it is 
// > 1000 & < 999999 => divide with 1000 and add K as suffix
// >  100000  divide with 100000 and add suffix M





// search videos response 
// {
//     "kind": "youtube#searchResult",
//     "etag": "9QlxfO5-nKL90WTAMxSDtT0Wrqk",
//     "id": {
//         "kind": "youtube#video",
//         "videoId": "8ZnU-rRs9Ek"
//     },
//     "snippet": {
//         "publishedAt": "2023-05-29T09:30:07Z",
//         "channelId": "UC0VN6My1ueOFXDTgzMZSSNQ",
//         "title": "LOUD exhaust ke wajah se POLICE got angry on me 🤬",
//         "description": "For Collaborations : jsfilmsindia@gmail.com Follow on Instagram: https://www.instagram.com/jsfilmsindia My SECOND CHANNEL ...",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/8ZnU-rRs9Ek/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/8ZnU-rRs9Ek/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/8ZnU-rRs9Ek/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             }
//         },
//         "channelTitle": "JS Films",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-05-29T09:30:07Z"
//     },
// }

//1. open a video and load all the comments of that video .