
function insertarnum(num){
    document.getElementById("calcularnum").value += num;
}
function borrarnum(){
    document.getElementById("calcularnum").value = "";
}
function calcular(){
    document.getElementById("resultadopant").value = eval(document.getElementById("calcularnum").value);
    document.getElementById("calcularnum").value = "";
}