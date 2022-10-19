"use strict";
//1. digit btns 클릭 시 숫자 display에 나오게 하기 <
//2. 연산자 함수 <
//3. operator btns 클릭 시 display는 빈 화면으로 출력되고
//   연산자 함수를 이용하여 계산하게 됨
//   '=' 버튼 클릭시 계산 결과 보여줌
//4. clear btn 클릭 시 display 리셋되기 <

let currentOp = "",
  currentVal = 0;

function numberBtnHandler() {
  const number = document.querySelectorAll(".number");
  number.forEach((number) => {
    number.addEventListener("click", (evt) => {
      const display = document.querySelector(".page");
      let targetNumber = evt.target.innerText;
      display.value += targetNumber;
    });
  });
}

function calculate(operator, val1, val2) {
  if (operator === "+") {
    return val1 + val2;
  } else if (operator === "-") {
    return val1 - val2;
  } else if (operator === "*") {
    return val1 * val2;
  } else if (operator === "/") {
    return val1 / val2;
  }
}

function operatorBtnHandler() {
  const operatorBtn = document.querySelectorAll(".operator");
  operatorBtn.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", (evt) => {
      const display = document.querySelector(".page");
      let displayVal = Number(display.value);
      if (evt.target.innerText === "=") {
        display.value = calculate(currentOp, currentVal, displayVal);
        // let disVal = display.value;
        // displayFormat(disVal);
        currentOp = "";
        return;
      }
      if (currentOp === "") {
        currentVal = Number(display.value);
      } else {
        currentVal = calculate(currentOp, currentVal, displayVal);
      }
      display.value = "";
      currentOp = evt.target.innerText;
    });
  });
}

function clearBtnHandler() {
  const clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", () => {
    const display = document.querySelector(".page");
    currentOp = "";
    currentVal = 0;
    display.value = "";
  });
}

function dotBtnHandler() {
  const decimalBtn = document.querySelector(".dot");
  decimalBtn.addEventListener("click", () => {
    const display = document.querySelector(".page");
    let displayVal = display.value;
    if (!displayVal.includes(".")) {
      let addDecimal = display.value + ".";
      display.value = addDecimal;
    }
  });
}

function init() {
  numberBtnHandler();
  operatorBtnHandler();
  clearBtnHandler();
  dotBtnHandler();
}

init();
