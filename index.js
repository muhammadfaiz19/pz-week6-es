const name = "Faiz";
console.log(name);

let number = 10.2;
let number2 = 4;

console.log(number > number2);

// logika (gerbang logika)
let isActive = true;
let exp = false;

// &&
console.log(isActive && exp);

// ||
console.log(isActive || exp);

// function (es5)
function add(a, b) {
  return a + b;
}

console.log(add(10, 5));

// arrow function e s6
const perkalian = (a, b) => {
  return a * b;
};

console.log(perkalian(10, 5));

// function factorial
function factorial(n) {
  if (n === 0) return NaN;
  if (n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));

function condition() {
  if (false) {
    console.log("ok");
  } else if (false) {
    console.log("Maybe");
  } else {
    console.log("not ok");
  }

  // lebih dari 2 kondisi lebih baik pakai swith
  switch (2) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    default:
      console.log("0");
  }
}

condition();
