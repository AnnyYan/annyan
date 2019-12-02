function calc_input(x) {
    let a = document.getElementById("calc_input");
    a.value += x;
}

function calc_equal(){
    let a = document.getElementById("calc_input");
    let eq = eval(a.value);
    a.value = eq;
}