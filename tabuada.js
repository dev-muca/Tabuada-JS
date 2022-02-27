let campoTexto = document.getElementById("denominador");
let tabuada = document.getElementById("tabuada");

function calcular() {
  if (campoTexto.value < 0) {
    alert("Informe um valor diferente de ZERO!");
    campoTexto.value = null;
  } else {
    tabuada.innerHTML = "";
    for (let i = 0; i <= 10; i++) {
      tabuada.innerHTML += "<p>"+campoTexto.value+" x "+i+" = "+campoTexto.value*i+"</p><hr>";
    }
  }
}
