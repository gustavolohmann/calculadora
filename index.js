const calc = document.querySelector(".containerCalculadora");
const calcular = document.querySelector(".calcular");
const display = document.createElement("div");
//const calNumber = document.querySelector(".calNumber");
let btn = document.querySelectorAll(".btn");


function creatDisplay() {

    display.classList.add("display");
    calc.appendChild(display);
}

creatDisplay();

btn.forEach(button => { // função que atribui valores aos display
    button.addEventListener("click", () => {
        let displayValue = display.innerHTML += button.value;
        let values = displayValue;
        calcular.addEventListener("click", () => {
            for (let index = 0; index < values.length; index++) {
                if (values[index] == "+") {
                    result = values.split("+");
                    let res = Number(result[0]) + Number(result[1]);
                    display.innerHTML = res;
                }
                if (values[index] == "X") {
                    let result = values.split("X");
                    let res = Number(result[0]) * Number(result[1]);
                    display.innerHTML = res;
                }
                if (values[index] == "/") {
                    let result = values.split("/");
                    let res = Number(result[0]) / Number(result[1]);
                    display.innerHTML = res;
                }
                if (values[index] == "-") {
                    let result = values.split("-");
                    let res = Number(result[0]) - Number(result[1]);
                    display.innerHTML = res;
                }
            }


        });
    });
});


