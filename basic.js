function deletMe(){
    document.getElementById("myResult").value = "";
}

function calculator(newValue){
    document.getElementById("myResult").value += newValue;
}

function w3code(show){
    document.getElementById("myResult").value = show;
}

function answer(){
    var a = eval(document.getElementById("myResult").value);
    document.getElementById("myResult").value = a;

}