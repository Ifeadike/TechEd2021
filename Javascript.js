let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    screen.innerText = buffer;
    rerender();
}


function outputNum(value){
    document.getElementById("screen").value += value;
}

function result(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function reset(){
    document.getElementById("screen").value = '';
}