var secondOperations = true;
// for '2^nd' toggle 
var calcModeBtn = true;
// for DEG and RAD toggle
var memoryStore;
// for memory operations 
var scrn = document.getElementById("scrn");
function evalu() {
    scrn.value = eval(scrn.value);
    // basic math. operations will be calculated here (+,-,*,/,%)
}
function calcModeButton() {
    var temp = document.getElementById("calcMode");
    if (calcModeBtn) {
        temp.innerText = "DEG";
        calcModeBtn = !calcModeBtn;
    }
    else {
        temp.innerText = "RAD";
        calcModeBtn = !calcModeBtn;
    }
    // if calcModeButton(boolean) is true then it will show DEG otherwise RAD
}
function secondButton() {
    if (secondOperations) {
        var x2 = document.getElementById("x2");
        x2.innerText = "x^3";
        var tworootx = document.getElementById("2√x");
        tworootx.innerText = "3√x";
        var xy = document.getElementById("xy");
        xy.innerText = "y√x";
        var tenx = document.getElementById("10x");
        tenx.innerText = "2^x";
        var log = document.getElementById("log");
        log.innerText = "logyx";
        var In = document.getElementById("In");
        In.innerText = "e^x";
        var secondndbtn = document.getElementById("2ndbtn");
        secondndbtn.style.color = "white";
        secondndbtn.style.backgroundColor = "#e7a01f";
        secondOperations = !secondOperations;
    }
    else {
        var x2 = document.getElementById("x2");
        x2.innerText = "x^2";
        var tworootx = document.getElementById("2√x");
        tworootx.innerText = "2√x";
        var xy = document.getElementById("xy");
        xy.innerText = "x^y";
        var tenx = document.getElementById("10x");
        tenx.innerText = "10^x";
        var log = document.getElementById("log");
        log.innerText = "log";
        var In = document.getElementById("In");
        In.innerText = "In";
        var secondndbtn = document.getElementById("2ndbtn");
        secondndbtn.style.color = "black";
        secondndbtn.style.backgroundColor = "white";
        secondOperations = !secondOperations;
    }
}
function memoryOperations(props) {
    //memory oprations
    switch (props) {
        case "mc":
            //memory clear
            memoryStore = null;
            break;
        case "ms":
            memoryStore = Number(scrn.value);
            //memory store
            break;
        case "mr":
            scrn.value += memoryStore;
            //memory read
            break;
        case "m+":
            //addition
            scrn.value = String(Number(scrn.value) + Number(memoryStore));
            break;
        case "m-":
            //subtraction  
            scrn.value = String(memoryStore - Number(scrn.value));
            break;
        default:
        // nothing to write here  
    }
    var temp = document.getElementById("memory-operation");
    temp.innerHTML = String(memoryStore == null ? "No Stored Value Available" : memoryStore);
    //here we have used ternary 
}
function pow() {
    //power operation
    if (secondOperations) {
        scrn.value = String(Math.pow(Number(scrn.value), 2));
    }
    else {
        scrn.value = String(Math.pow(Number(scrn.value), 3));
    }
}
function checkAlpha(e) {
    var x = e.which || e.keycode;
    if ((x >= 48 && x <= 57))
        return true;
    else
        return false;
    // validation - alphabets should not be written
}
function backspace() {
    scrn.value = scrn.value.substring(0, scrn.value.length - 1);
    //backspace button implementation
}
function sign() {
    scrn.value = String(0 - Number(scrn.value));
    // '+/-' button implementation
}
function oneDivide() {
    scrn.value = String(1 / Number(scrn.value));
}
function tenpower() {
    if (secondOperations) {
        scrn.value = String(Math.pow(10, Number(scrn.value)));
    }
    else {
        scrn.value = String(Math.pow(2, (Number(scrn.value))));
    }
}
function FE() {
    var displayValue = Number(scrn.value);
    scrn.value = displayValue.toExponential();
}
function exp() {
    scrn.value = String(Math.exp(Number(scrn.value)));
}
function log() {
    scrn.value = String(Math.log10(Number(scrn.value)));
}
function In() {
    if (secondOperations) {
        scrn.value = String(Math.log(Number(scrn.value)));
    }
    else {
        scrn.value = String(Math.pow((2.71828182846), (Number(scrn.value))));
    }
}
function fact() {
    // factorial of n
    var i, num, f;
    f = 1;
    num = Number(scrn.value);
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    scrn.value = String(f);
    // i have used loop method which is without recursion 
}
function sqrt() {
    if (secondOperations) {
        scrn.value = String(Math.sqrt(Number(scrn.value)) * 2);
    }
    else {
        scrn.value = String(Math.sqrt(Number(scrn.value)) * 3);
    }
    // square root
}
function trigo() {
    // Trigonometry operations
    var temp = document.getElementById("Trigonometry");
    var e = temp.value;
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
        // nothing to write in default
    }
    var DropdownList = (document.getElementById("Trigonometry"));
    DropdownList.selectedIndex = 0;
    // after clicking on any of the functions, dropdown menu will be reset
}
function Functions() {
    // scientific functions
    var temp = document.getElementById("Functions");
    var e = temp.value;
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
        // nothing to write in default
    }
    var DropdownList = (document.getElementById("Functions"));
    DropdownList.selectedIndex = 0;
    // after clicking on any of the functions, dropdown menu will be reset
}
