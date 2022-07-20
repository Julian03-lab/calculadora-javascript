// Declaro variables y constantes
var displayTotal = document.getElementById("valortotal");
var simbolo = document.getElementById("simboloOperacion");
var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
const displayActual = document.getElementsByClassName("valoresActuales")[0];
const botonBorrar = document.getElementById("borrar");
const botonIgual = document.getElementById("igual");
const botonBorrarUltimo = document.getElementById("borrarUltimoNumero");
const calculadora = document.getElementById("calculadora");
var simboloActual = "";

// Inicio la escucha de los clicks sobre los numeros.
calculadora.addEventListener("click", (e) => {
  if (e.target.className === "numero") {
    writeNumber(e);
  } else if (e.target.className === "operador") {
    simboloActual = operation(e);
  }
  if (valor2.innerText != "") {
    displayTotal.innerText = igual(simboloActual);
  }
  numberSize();
});

function writeNumber(e) {
  if (displayActual.innerText.length < 18) {
    if (valor1.innerText === "0") {
      valor1.innerText = e.target.innerText;
    } else {
      valor1.innerText += e.target.innerText;
    }
  } else {
    alert("Cantidad maxima de caracteres: 15");
  }
}

function operation(e) {
  if (displayTotal.innerText == "0") {
    valor2.innerText = valor1.innerText;
  } else{
    valor2.innerText = igual(simboloActual)
  }
  simbolo.innerText = e.target.innerText;
  valor1.innerText = 0;
  if (e.target.innerText === "+") {
    simboloActual = "suma";
  } else if (e.target.innerText === "-") {
    simboloActual = "resta";
  } else if (e.target.innerText === "x") {
    simboloActual = "multiplicacion";
  } else if (e.target.innerText === "/") {
    simboloActual = "division";
  }
  return simboloActual;
}

botonIgual.addEventListener("click", () => {
  if (valor2.innerText != "") {
    valor1.innerText = igual(simboloActual);
    valor2.innerText = "";
    simbolo.innerText = "";
    displayTotal.innerText = 0;
    restartNumberSize()
  }
});

botonBorrarUltimo.addEventListener('click', ()=>{valor1.innerText = deleteLastNumber()})

function igual(simbolo) {
  if (simbolo === "suma") {
    
    var result = suma();
  } else if (simbolo === "resta") {
    var result = resta();
  } else if (simbolo === "division") {
    var result = division();
  } else if (simbolo === "multiplicacion") {
    var result = multiplicacion();
  }
  return (result)
}

//Modifica el tamaño de la fuente segun la cantidad de caracteres en pantalla.
function numberSize() {
  if (
    displayActual.innerText.length > 7 &&
    displayActual.innerText.length < 10
  ) {
    displayActual.style.fontSize = "1.8rem";
  } else if (
    displayActual.innerText.length > 10 &&
    displayActual.innerText.length < 15
  ) {
    displayActual.style.fontSize = "1.4rem";
  }
}

function restartNumberSize(){
  displayActual.style.fontSize = "2.2rem"
}

//El boton 'Borrar' reinicia a 0
botonBorrar.addEventListener("click", () => {
  valor1.innerText = 0;
  valor2.innerText = "";
  simbolo.innerText = "";
  displayTotal.innerText = 0;
  restartNumberSize()
});

function suma() {
  return parseFloat(valor1.innerText) + parseFloat(valor2.innerText);
}
function resta() {
  return parseFloat(valor2.innerText) - parseFloat(valor1.innerText);
}
function multiplicacion() {
  return parseFloat(valor1.innerText) * parseFloat(valor2.innerText);
}
function division() {
  if (valor1.innerText === "0") {
    var valor = "MathError: Division by 0";
  } else {
    var valor = parseFloat(valor2.innerText) / parseFloat(valor1.innerText);
  }
  return valor;
}

function deleteLastNumber() {
  if (valor1.innerText.length >= 2){
    var number = valor1.innerText.substring(0, valor1.innerText.length -1);
  } else {
    var number = 0
  }
  return (number)
}