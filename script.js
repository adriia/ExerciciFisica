 const gravetat = 9.8;
function f(){
    var dniUsuari = document.getElementById("grup").value;
      dniUsuari.toUpperCase;
  var lletraDni = dniUsuari.substring(8,9);
  var numerosDni = dniUsuari.substring(0,8);
  var total = 0;
  var numeros = parseFloat( numerosDni );
  total = numeros%23;
 
  
var t = 0, r = 1, w = 2, a = 3, g = 4, m = 5, y = 6, f = 7, p = 8, d = 9, x = 10, b = 11, n = 12, j = 13, z = 12, s = 15, q = 16, v = 17, h = 18, l = 19, c = 20, k = 21, e = 22;
 
if (total == t){
  alert("La teva lletra es la T.");
  } else if (total == r) {
     alert("La teva lletra es la R.");
} else if (total == w) {
     alert("La teva lletra es la W.");
} else if (total == a) {
     alert("La teva lletra es la A.");
} else if (total == g) {
     alert("La teva lletra es la G.");
} else if (total == m) {
     alert("La teva lletra es la M.");
} else if (total == y) {
     alert("La teva lletra es la Y.");
} else if (total == f) {
     alert("La teva lletra es la F.");
} else if (total == p) {
     alert("La teva lletra es la P.");
} else if (total == d) {
     alert("La teva lletra es la D.");
} else if (total == x) {
     alert("La teva lletra es la X.");
} else if (total == b) {
     alert("La teva lletra es la B.");
} else if (total == n) {
     alert("La teva lletra es la N.");
} else if (total == j) {
     alert("La teva lletra es la J.");
} else if (total == z) {
     alert("La teva lletra es la Z.");
} else if (total == s) {
     alert("La teva lletra es la S.");
} else if (total == q) {
     alert("La teva lletra es la Q.");
} else if (total == v) {
     alert("La teva lletra es la V.");
} else if (total == h) {
     alert("La teva lletra es la H.");
} else if (total == l) {
     alert("La teva lletra es la L.");
} else if (total == c) {
     alert("La teva lletra es la C.");
} else if (total == k) {
     alert("La teva lletra es la K.");
} else if (total == e) {
     alert("La teva lletra es la E.");
}  else {
   alert("introdueix un DNI vàlid");
  }
}