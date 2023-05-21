const users = [
    { id: 1, name: "john", age: 18, profession: "developer" }, 
    { id: 2, name: "jack", age: 20, profession: "developer" }, 
    { id: 3, name: "karen", age: 19, profession: "admin" },
];


let select = document.getElementsByTagName("select")[0] ;
let container = document.getElementById("container") ;

function filterData(profession){
    if(profession === ""){
        return users ;
    }
    let usersList = users.filter((user) => {
        return user.profession === profession ;// true
    })

    return usersList ;
}

function addNewUser(){
    let name = document.getElementById("name").value.trim();
    let profession = document.getElementById("profession").value.trim();
    let age = document.getElementById("age").value.trim();

    if(name !== "" && age !== "" && profession !== ""){
        let newUser = {
            id: users[users.length - 1].id + 1,
            name,
            age,
            profession: profession
        };

        users.push(newUser)
        filterUsers();
    }
    else{
        alert("All fields are required");
    }

}

function filterUsers() {
    let selectedValue = select.value ;
    // selectedValue = "" | "developer" | "admin"
    // selectedValue = "developer"
    // filterData("developer");
    let filteredUsers = filterData(selectedValue);
    container.innerText = '' ;
    appendUsers(filteredUsers);
    
}

function appendUsers(usersList) {
    // usersList = [{id: 1, name: "", age: 10, profession: ""} , {} , {} , ...]
    /*
        <div class="user">
            <div>1</div>
            <div>Name: John</div>
            <div>Profession: Developer</div>
            <div>Age: 22</div>
        </div>
    */


    for(let i = 0 ; i < usersList.length ; i++){
        let userCard = document.createElement("div");
        userCard.className = "user" ; 

        let idElement = document.createElement("div");
        idElement.innerText = usersList[i].id ;

        let nameElement = document.createElement("div");
        nameElement.innerText = `Name: ${usersList[i].name}`;

        let professionElement = document.createElement("div");
        professionElement.innerText = `Profession: ${usersList[i].profession}`;

        let ageElement = document.createElement("div"); 
        ageElement.innerText = `Age: ${usersList[i].age}`

        userCard.append(idElement);
        userCard.append(nameElement);
        userCard.append(professionElement);
        userCard.append(ageElement)

        container.append(userCard);
    }
}


