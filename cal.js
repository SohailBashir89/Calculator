/*Assignment for the week is to develop CALCULTOR application which takes input
from user via inquirer and perform
 - Addition
 - Subtraction
 - Multiplication
 - Modulus
 - Division
 - Exponent*/
import inquirer from "inquirer";
async function Cal() {
    let val = await inquirer.prompt([{
            type: "number",
            name: "num1",
            message: "Enter Number1:"
        },
        {
            type: "list",
            name: "operation",
            message: "Choose Operation:",
            choices: ["+", "-", "*", "/", "%", "**"]
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Number2:"
        }
    ]);
    switch (val.operation) {
        case "+":
            console.log(`${val.num1} + ${val.num2} = ${val.num1 + val.num2}`);
            break;
        case "-":
            console.log(`${val.num1} - ${val.num2} = ${val.num1 - val.num2}`);
            break;
        case "*":
            console.log(`${val.num1} * ${val.num2} = ${val.num1 * val.num2}`);
            break;
        case "/":
            console.log(`${val.num1} / ${val.num2} = ${val.num1 / val.num2}`);
            break;
        case "%":
            console.log(`${val.num1} % ${val.num2} = ${val.num1 % val.num2}`);
            break;
        case "**":
            console.log(`${val.num1} raise to the power ${val.num2} = ${val.num1 ** val.num2}`);
            break;
        default:
            break;
    }
}
Cal();
