var memoryStore = [];
var secondOperations = true;
var calcModeBtn = true;

function calcModeButton() {
  if (calcModeBtn) {
    document.getElementById("calcMode").innerText = "DEG";
    calcModeBtn = !calcModeBtn;
  }
  else {
    document.getElementById("calcMode").innerText = "RAD";
    calcModeBtn = !calcModeBtn;
  }
}

function secondButton() {

  if (secondOperations) {

    document.getElementById("x2").innerText = "x^3";
    document.getElementById("2√x").innerText = "3√x";
    document.getElementById("xy").innerText = "y√x";
    document.getElementById("10x").innerText = "2^x";
    document.getElementById("log").innerText = "logyx";
    document.getElementById("In").innerText = "e^x";
    document.getElementById("2ndbtn").style.color = "white";
    document.getElementById("2ndbtn").style.backgroundColor = "#e7a01f";
    secondOperations = !secondOperations;
  }
  else {
    document.getElementById("x2").innerText = "x^2";
    document.getElementById("2√x").innerText = "2√x";
    document.getElementById("xy").innerText = "x^y";
    document.getElementById("10x").innerText = "10^x";
    document.getElementById("log").innerText = "log";
    document.getElementById("In").innerText = "In";
    document.getElementById("2ndbtn").style.color = "black";
    document.getElementById("2ndbtn").style.backgroundColor = "white";
    secondOperations = !secondOperations;

  }
}

function memoryOperations(props) {
  switch (props) {
    case "mc":
      memoryStore = [];
      break;
    case "ms":
      memoryStore.unshift(Number(scrn.value));
      break;
    case "mr":
      scrn.value += memoryStore[0];
      break;

    case "m+":
      scrn.value = Number(scrn.value) + memoryStore[0];
      break;

    case "m-":
      scrn.value = Number(scrn.value) - memoryStore[0];
      break;
    default:
    // nothing to write here  
  }
  document.getElementById("memory-operation").innerHTML =
    (memoryStore.length == 0 ? "No Stored Value Available" : memoryStore[0]);
}

function pow() {

  if (secondOperations) {
    scrn.value = Math.pow(scrn.value, 2)
  }
  else {
    scrn.value = Math.pow(scrn.value, 3)
  }
}

function checkAlpha(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
    return true;
  else
    return false;
}

function backspace() {
  scrn.value = scrn.value.substr(0, scrn.value.length - 1);
}

function sign() {
  scrn.value = Math.sign(scrn.value);
}

function oneDivide() {
  scrn.value = (1 / scrn.value);
}

function tenpower() {
  if (secondOperations) {
    scrn.value = Math.pow(10, scrn.value);
  }
  else {
    scrn.value = 2 ** (scrn.value);
  }
}
function FE() {
  displayValue = Number(scrn.value);
  scrn.value = displayValue.toExponential();
}
function exp() {
  scrn.value = Math.exp(scrn.value);
}
function log() {
  scrn.value = Math.log(scrn.value);
}
function In() {
  if (secondOperations) {
    scrn.value = Math.log(scrn.value);
  }
  else {
    scrn.value = (2.71828182846) ** (scrn.value);
  }
}

function fact() {

  var i, num, f;
  f = 1;
  num = scrn.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  scrn.value = f;

}

function sqrt() {
  if (secondOperations) {
    scrn.value = Math.sqrt(scrn.value) * 2;
  }
  else {
    scrn.value = Math.sqrt(scrn.value) * 3;
  }
}

function trigo() {
  var e = document.getElementById("Trigonometry").value;
  switch (e) {

    case "1":
      if (calcModeBtn) {
        scrn.value = Math.sin(scrn.value);
      }
      else {
        scrn.value = (scrn.value) * (Math.PI / 180);
        scrn.value = Math.sin(scrn.value);
      }
      break;

    case "2":

      if (calcModeBtn) {
        scrn.value = Math.cos(scrn.value);
      }
      else {
        scrn.value = (scrn.value) * (Math.PI / 180);
        scrn.value = Math.cos(scrn.value);
      }
      break;

    case "3":
      if (calcModeBtn) {
        scrn.value = Math.tan(scrn.value);
      }
      else {
        scrn.value = (scrn.value) * (Math.PI / 180);
        scrn.value = Math.tan(scrn.value);
      }
      break;
    default:
    // nothing to write here
  }
  document.getElementById("Trigonometry").selectedIndex = 0;
}

function Function() {
  var e = document.getElementById("Function").value;
  switch (e) {
    case "1":
      scrn.value = Math.abs(scrn.value);
      break;
    case "2":
      scrn.value = Math.acos(scrn.value);
      break;
    case "3":
      scrn.value = Math.acosh(scrn.value);
      break;
    case "4":
      scrn.value = Math.asin(scrn.value);
      break;
    default:
    // nothing to write here
  }
  document.getElementById("Function").selectedIndex = 0;
}
