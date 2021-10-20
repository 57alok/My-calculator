var button = document.getElementsByClassName('btnin');
var display = document.getElementById('display');
function show(data) {
    display.textContent += data;
}
var op1 = null;
var op2 = null;
var ope = null;
for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        if (value == "+") {
            ope = '+';
            op1 = parseFloat(display.textContent);
            display.textContent = "";
            show("");
        }
        else if (value == "-") {
            ope = '-';
            op1 = parseFloat(display.textContent);
            display.textContent = "";
        }
        else if (value == "/") {
            ope = '/';
            op1 = parseFloat(display.textContent);
            display.textContent = "";
        }
        else if (value == "*") {
            ope = '*';
            op1 = parseFloat(display.textContent);
            display.textContent = "";
        }
        else if (value == "AC") {
            display.textContent = "";
        }
        else if (value == "c.") {
            display.textContent += '.';
        }

        else if (value == "+/-") {
            display.textContent = -(display.textContent);
        }

        else if (value == '=') {
            op2 = parseFloat(display.textContent);
            if (ope == '+') {
                display.textContent = parseFloat(op1 + op2);
            }
            else if (ope == '-') {
                display.textContent = parseFloat(op1 - op2);
            }
            else if (ope == '*') {
                display.textContent = parseFloat(op1 * op2);
            }
            else if (ope == '/') {
                display.textContent = parseFloat(op1 / op2);

            }
        }
        else {
            display.textContent += value;

        }
    })
}