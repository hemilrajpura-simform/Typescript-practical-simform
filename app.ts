var memoryStore = [];
var secondOperations:boolean = true;
var calcModeBtn:boolean = true;
//var scrnn = (< HTMLInputElement>document.getElementById("scrn"));

var scrn = (<HTMLInputElement>document.getElementById("scrn"));

function evalu():void {
  scrn.value = eval(scrn.value);
}

function calcModeButton():void {
  if (calcModeBtn) {
    var temp = <HTMLInputElement>document.getElementById("calcMode");
    temp.innerText = "DEG";
    calcModeBtn = !calcModeBtn;
  }
  else {
    var temp = <HTMLInputElement>document.getElementById("calcMode");
    temp.innerText = "RAD";
    calcModeBtn = !calcModeBtn;
  }
}

function secondButton():void  {

  if (secondOperations) {

    var x2 = <HTMLInputElement>document.getElementById("x2");
    x2.innerText = "x^3";

    var tworootx = <HTMLInputElement>document.getElementById("2√x");
    tworootx.innerText = "3√x";

    var xy = <HTMLInputElement>document.getElementById("xy");
    xy.innerText = "y√x";

    var tenx = <HTMLInputElement>document.getElementById("10x");
    tenx.innerText = "2^x";

    var log = <HTMLInputElement>document.getElementById("log");
    log.innerText = "logyx";

    var In = <HTMLInputElement>document.getElementById("In");
    In.innerText = "e^x";

    var secondndbtn = <HTMLInputElement>document.getElementById("2ndbtn");
    secondndbtn.style.color = "white";
    secondndbtn.style.backgroundColor = "#e7a01f";

    secondOperations = !secondOperations;

  }
  else {
    var x2 = <HTMLInputElement>document.getElementById("x2");
    x2.innerText = "x^2";

    var tworootx = <HTMLInputElement>document.getElementById("2√x");
    tworootx.innerText = "2√x";

    var xy = <HTMLInputElement>document.getElementById("xy");
    xy.innerText = "x^y";

    var tenx = <HTMLInputElement>document.getElementById("10x");
    tenx.innerText = "10^x";

    var log = <HTMLInputElement>document.getElementById("log");
    log.innerText = "log";

    var In = <HTMLInputElement>document.getElementById("In");
    In.innerText = "In";

    var secondndbtn = <HTMLInputElement>document.getElementById("2ndbtn");
    secondndbtn.style.color = "black";
    secondndbtn.style.backgroundColor = "white";
    secondOperations = !secondOperations;
  }
}

function memoryOperations(props:string):void  {
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
      scrn.value = String(memoryStore[0]-Number(scrn.value));
      break;
    default:
    // nothing to write here  
  }
  document.getElementById("memory-operation").innerHTML =
    (memoryStore.length == 0 ? "No Stored Value Available" : memoryStore[0]);
}

function pow():void  {

  if (secondOperations) {
    scrn.value = String(Math.pow(Number(scrn.value), 2));
  }
  else {
    scrn.value = String(Math.pow(Number(scrn.value), 3));
  }
}

function checkAlpha(e:any):boolean {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
    return true;
  else
    return false;
}

function backspace():void  {
  scrn.value = scrn.value.substring(0, scrn.value.length - 1);
}

function sign():void  {
  scrn.value = String(0-Number(scrn.value));
}

function oneDivide():void  {
  scrn.value = String(1 / Number(scrn.value));
}

function tenpower():void  {
  if (secondOperations) {
    scrn.value = String(Math.pow(10, Number(scrn.value)));
  }
  else {
    scrn.value = String(2 ** (Number(scrn.value)));
  }
}
function FE():void  {
 var displayValue = Number(scrn.value);
  scrn.value = displayValue.toExponential();
}
function exp():void  {
  scrn.value = String( Math.exp(Number(scrn.value)));
}
function log():void  {
  scrn.value = String(Math.log10(Number(scrn.value)));
}
function In():void {
  if (secondOperations) {
    scrn.value = String(Math.log(Number(scrn.value)));
  }
  else {
    scrn.value = String((2.71828182846) ** (Number(scrn.value)));
  }
}

function fact():void {

  var i:number, num:number, f:number;
  f = 1;
  num = Number(scrn.value);
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  scrn.value = String(f);

}

function sqrt():void {
  if (secondOperations) {
    scrn.value = String(Math.sqrt(Number(scrn.value)) * 2);
  }
  else {
    scrn.value = String(Math.sqrt(Number(scrn.value)) * 3);
  }
}

function trigo():void {  

var temp = <HTMLInputElement>document.getElementById("Trigonometry");
  var e:string = temp.value;
  switch (e) {

    case "1":
      if (calcModeBtn) {
        scrn.value = String(Math.sin(Number(scrn.value)));
      }
      else {
        scrn.value = String(Number(scrn.value) * (Math.PI / 180));
        scrn.value = String(Math.sin(Number(scrn.value)));
      }
      break;

    case "2":

      if (calcModeBtn) {
        scrn.value = String(Math.cos(Number(scrn.value)));
      }
      else {
        scrn.value = String(Number((scrn.value)) * (Math.PI / 180));
        scrn.value = String(Math.cos(Number(scrn.value)));
      }
      break;

    case "3":
      if (calcModeBtn) {
        scrn.value = String(Math.tan(Number(scrn.value)));
      }
      else {
        scrn.value = String((Number(scrn.value)) * (Math.PI / 180));
        scrn.value = String(Math.tan(Number(scrn.value)));
      }
      break;
    default:
    // nothing to write here
  }
  var DropdownList = (document.getElementById("Trigonometry")) as HTMLSelectElement;
  DropdownList.selectedIndex=0;
}

function Functions(): void {
  var temp = <HTMLInputElement>document.getElementById("Functions");
  var e:string = temp.value;
  switch (e) {
    case "1":
      scrn.value = String(Math.abs(Number(scrn.value)));
      break;
    case "2":
      scrn.value = String(Math.acos(Number(scrn.value)));
      break;
    case "3":
      scrn.value = String(Math.acosh(Number(scrn.value)));
      break;
    case "4":
      scrn.value = String(Math.asin(Number(scrn.value)));
      break;
    default:
    // nothing to write here 
  }
  var DropdownList = (document.getElementById("Functions")) as HTMLSelectElement;
  DropdownList.selectedIndex=0;
}

