document.getElementById("button").addEventListener("click", click);
function click(){
let x = document.getElementById("X").value;
let y = document.getElementById("Y").value;

if(check(parseInt(x)) && check (parseInt(y))){
document.getElementById("sum").value = add(x,y);
document.getElementById("product").value = product(x,y);

}else{
    document.getElementById("error").innerHTML = "Error of input type only numbers"
}
}

function check(x){
    return Number.isInteger(x);
}









function add(a, b){
return parseFloat(a) + parseFloat(b);
}
function product(a,b){
    return a*b;
}