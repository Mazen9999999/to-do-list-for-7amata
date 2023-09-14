let input = document.querySelector(".input");
let listContainer = document.querySelector(".list-container");
let addBtn = document.querySelector(".add");
let ul = document.querySelector(".lists");
const inputsContainer = document.querySelector(".create-input");
let tasks = document.querySelectorAll("ul li")

console.log(tasks)




function addTask() {
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("li");

    let deletebtn = document.createElement("span");
    deletebtn.innerHTML = "Delete";
    deletebtn.classList.add("span");

    ul.appendChild(li);
    li.appendChild(deletebtn);

    input.value = "";
  } else {
    alert("you must write some thing");
  }
  saveData();
}

// Delete And Check Function
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("span")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("li")) {
    e.target.classList.toggle("checked");
  }
  saveData();
});

// Save In LocalStorage
function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showdata() {
  ul.innerHTML = localStorage.getItem("data");
}

showdata();

// Delete All


function deleteAll() {
  if (localStorage != '') {
    let deleteAllBtn = document.querySelector(".deleteAll");
   ;
    deleteAllBtn.onclick = function(){
      localStorage.clear()
     ul.innerHTML = ''
    }
  }
 saveData()


}

deleteAll()

// Dark Mode Option

function darkMode() {

 let getMode = localStorage.getItem("mode")
 if(getMode && getMode === "dark"){
  body.classList.add("dark")
  createInputs.classList.add("dark")
  tasksContainer.classList.add("dark")
  h1.classList.add("dark")
  h2.classList.add("dark")
  addBtn.classList.add("dark")

 }

}

const body = document.querySelector("body") 
const createInputs = document.querySelector(".create-input")
const tasksContainer = document.querySelector(".list-container") 
const h1 = document.querySelector("h1") 
const h2 = document.querySelector("h2") 
const checkBox = document.getElementById("checkbox")


checkBox.addEventListener("change", () => {
body.classList.toggle("dark")
createInputs.classList.toggle("dark")
tasksContainer.classList.toggle("dark")
h1.classList.toggle("dark")
h2.classList.toggle("dark")
addBtn.classList.toggle("dark")

if (!body.classList.contains("dark")) {
  return localStorage.setItem("mode", "light");
}

localStorage.setItem("mode", "dark");

})

darkMode()