const display = document.getElementById("display");
const buttons = document.querySelectorAll(".item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value); // evaluates expression
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});
