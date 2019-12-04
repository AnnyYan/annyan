function calc_input(x) {
    let a = document.getElementById("calc_input");
    a.value += x;
}

function calc_equal(){
    let a = document.getElementById("calc_input");
    let eq = eval(a.value);
    a.value = eq;
}

function calc_clear(){
    let a = document.getElementById("calc_input");
    a.value = 0;
}

function calc_back(){
    let a = document.getElementById("calc_input");
    let b = a.value.substring(0, a.value.length-1);
    a.value = b;
}
