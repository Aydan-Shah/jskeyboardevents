// Keyboard Event

//keypress
// document.addEventListener("keypress", run);
// function run(e) {
//     console.log(e.which);
//     console.log(e.key);
//     console.log("keypress");
// }

//keydown
// document.addEventListener("keydown", run);
// function run(e) {
//     console.log(e.which);
//     console.log(e.key);
//     console.log("keypress");
// }

//keyup
// document.addEventListener("keyup", run);
// function run(e) {
//     console.log(e.which);
//     console.log(e.key);
//     console.log("keypress");
// }


const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");
document.addEventListener("keyup", changeText);
function changeText(e) {
    header.textContent = e.target.value
    // console.log(e.target.value);
}