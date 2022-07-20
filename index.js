// Declaro variables y constantes
var totalDisplay = document.getElementById("totalValue");
var symbol = document.getElementById("operationSymb");
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
const currentDisplay = document.getElementsByClassName("actualValues")[0];
const deleteButton = document.getElementById("delete");
const equalButton = document.getElementById("equal");
const deleteLastButton = document.getElementById("removeLastNumber");
const calculator = document.getElementById("calculator");
var currentSymbol = "";

// Inicio la escucha de los clicks sobre los numeros.
calculator.addEventListener("click", (e) => {
  if (e.target.className === "number") {
    writeNumber(e);
  } else if (e.target.className === "operator") {
    currentSymbol = operation(e);
  }
  if (value2.innerText != "") {
    totalDisplay.innerText = equal(currentSymbol);
  }
  numberSize();
});

function writeNumber(e) {
  if (currentDisplay.innerText.length < 18) {
    if (value1.innerText === "0") {
      value1.innerText = e.target.innerText;
    } else {
      value1.innerText += e.target.innerText;
    }
  } else {
    alert("Cantidad maxima de caracteres: 15");
  }
}

function operation(e) {
  if (totalDisplay.innerText == "0") {
    value2.innerText = value1.innerText;
  } else{
    value2.innerText = equal(currentSymbol)
  }
  symbol.innerText = e.target.innerText;
  value1.innerText = 0;
  if (e.target.innerText === "+") {
    currentSymbol = "adittion";
  } else if (e.target.innerText === "-") {
    currentSymbol = "subtraction";
  } else if (e.target.innerText === "x") {
    currentSymbol = "multiplication";
  } else if (e.target.innerText === "/") {
    currentSymbol = "division";
  }
  return currentSymbol;
}

equalButton.addEventListener("click", () => {
  if (value2.innerText != "") {
    value1.innerText = equal(currentSymbol);
    value2.innerText = "";
    symbol.innerText = "";
    totalDisplay.innerText = 0;
    restartNumberSize()
  }
});

deleteLastButton.addEventListener('click', ()=>{value1.innerText = deleteLastNumber()})

function equal(symbol) {
  if (symbol === "adittion") {
    
    var result = addition();
  } else if (symbol === "subtraction") {
    var result = subtraction();
  } else if (symbol === "division") {
    var result = division();
  } else if (symbol === "multiplication") {
    var result = multiplication();
  }
  return (result)
}

//Modifica el tamaño de la fuente segun la cantidad de caracteres en pantalla.
function numberSize() {
  if (
    currentDisplay.innerText.length > 7 &&
    currentDisplay.innerText.length < 10
  ) {
    currentDisplay.style.fontSize = "1.8rem";
  } else if (
    currentDisplay.innerText.length > 10 &&
    currentDisplay.innerText.length < 15
  ) {
    currentDisplay.style.fontSize = "1.4rem";
  }
}

function restartNumberSize(){
  currentDisplay.style.fontSize = "2.2rem"
}

//El boton 'Borrar' reinicia a 0
deleteButton.addEventListener("click", () => {
  value1.innerText = 0;
  value2.innerText = "";
  symbol.innerText = "";
  totalDisplay.innerText = 0;
  restartNumberSize()
});

function addition() {
  return parseFloat(value1.innerText) + parseFloat(value2.innerText);
}
function subtraction() {
  return parseFloat(value2.innerText) - parseFloat(value1.innerText);
}
function multiplication() {
  return parseFloat(value1.innerText) * parseFloat(value2.innerText);
}
function division() {
  if (value1.innerText === "0") {
    var valor = "MathError: Division by 0";
  } else {
    var valor = parseFloat(value2.innerText) / parseFloat(value1.innerText);
  }
  return valor;
}

function deleteLastNumber() {
  if (value1.innerText.length >= 2){
    var number = value1.innerText.substring(0, value1.innerText.length -1);
  } else {
    var number = 0
  }
  return (number)
}