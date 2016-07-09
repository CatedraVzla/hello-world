var x = $("#n1");
var res = 1;
var acc = 0;
var op = "";

$("#n1").on("click",
function(){
  $("#n1").val("");
}
);
$("#x2").on("click",
function(){
  $("#n1").val($("#n1").val()*$("#n1").val());
}
);
$("#inv").on("click",
function(){
  $("#n1").val(1/$("#n1").val());
}
);
$("#raiz").on("click",
function(){
  $("#n1").val(Math.sqrt($("#n1").val()));
}
);
$("#entero").on("click",
function(){
valor = (x.val() >= 0)? Math.floor(+x.val()):-Math.ceil(+x.val())

  x.val(valor);
}
);
$("#2n").on("click",
function(){
valor = x.val();
while (valor!==0){
res = res*2;
valor = valor -1;
}
  x.val(res);
}
);
$("#nfac").on("click",
function(){
valor = x.val();
res = valor;
while (valor!==1){
valor = valor -1;
res = res*valor;

}
  x.val(res);
}
);

$("#suma").on("click",
function(){
valor = x.val();
acc= valor;
op = "+";
}
);
$("#resta").on("click",
function(){
valor = x.val();
acc= valor;
op = "-";
}
);
$("#por").on("click",
function(){
valor = x.val();
acc= valor;
op = "*";
}
);
$("#entre").on("click",
function(){
valor = x.val();
acc= valor;
op = "/";
}
);
$("#xy").on("click",
function(){
valor = x.val();
acc= valor;
op = "xy";
}
);

$("#igual").on("click",
function(){
valor = x.val();

if (op === "+") {
valor= +acc + +valor;
}
if (op === "*") {
valor= +acc * +valor;
}
if (op === "-") {
valor= +acc - +valor;
}
if (op === "/") {
valor= +acc / +valor;
}
if (op === "xy") {
valor= Math.pow(+acc,+valor);
}

x.val(valor);
}
);

$("#sumatoria").on("click",
function(){
valor = document.getElementById("n1");
var lista = valor.value.split(",");
var i = 0, accs = 0;
while (i < lista.length) {
  accs = +accs + (+lista[i]);
  i++;
}
x.val(accs);
}
);
$("#producto").on("click",
function(){
valor = document.getElementById("n1");
var listap = valor.value.split(",");
var j = 0, accp = 1;
while (j < listap.length) {
  accp = +accp * (+listap[j]);
  j++;
}
x.val(accp);
}
);
