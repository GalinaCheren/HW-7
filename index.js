let mathAction = prompt(
  "Write, please, what do you whant to do: add, sub, mult, div"
);
const firstNumber = +prompt("Write first number here : ");
const secondNumber = +prompt("Write second number here : ");
if (firstNumber && secondNumber) {
  let result;
  switch (mathAction) {
    case "add":
      result = `${firstNumber} + ${secondNumber} = ${
        firstNumber + secondNumber
      }`;
      break;

    case "sub":
      result = `${firstNumber} - ${secondNumber} = ${
        firstNumber - secondNumber
      }`;
      break;

    case "mult":
      result = `${firstNumber} * ${secondNumber} = ${
        firstNumber * secondNumber
      }`;
      break;

    case "div":
      result = `${firstNumber} / ${secondNumber} = ${
        firstNumber / secondNumber
      }`;
      break;
    default:
      result = "Wrong mathematical action!";
  }
  alert(result);
} else {
  alert("Please, write number!");
}
