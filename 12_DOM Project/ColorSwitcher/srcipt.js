let maindiv = document.querySelector(".main");
let inputfield = document.querySelector("#writeColor");
let mainbutton = document.querySelector("#mainbutton");

let colorchangeer = (color) => {
    maindiv.style.backgroundColor = color;
};

let applycolor = function () {
    let color = inputfield.value;
    colorchangeer(color);
};

mainbutton.addEventListener("click", applycolor);