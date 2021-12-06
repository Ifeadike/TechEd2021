function outputNum(value){
    document.getElementById("screen").value += value;
}

function result(){
    document.getElementById("screen").value = eval(document.getElementById("screen").value);
}

function reset(){
    document.getElementById("screen").value = '';
}

let buttons = Array.from(document.getElementsByClassName('calc-buttons'));

buttons.map (buttons=> {
    buttons.addEventListener('click',.)
})
