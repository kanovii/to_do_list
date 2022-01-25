let input = document.getElementById("input");
let button = document.getElementById("button");
let list = document.getElementById("list");

// function addList() {
//     var temp = document.createElement("li");
//     temp.innerHTML = input.value;
//     list.appendChild(temp);    
// }

const addList = (e) => {
    console.log(this)

    var temp = document.createElement("li");
    temp.innerHTML = input.value;
    list.appendChild(temp);
    input.value = "";
}

button.addEventListener("click", addList);