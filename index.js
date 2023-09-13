function add() {
    1 + 80; //=> 81
}
function subtract() {
    60 - 40; //=> 20
}
function multiply() {
    2 * 3.4; //=> 6.8
}
function divide() {
    5.0 / 2.5; //=> 2
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "Can't divide";
    }
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    const parsedInt = parseInt(n, 10);
        if (isNaN(parsedInt)) {
          return NaN;
        }
        return parsedInt;
}

function preserveDecimal(n) {
    const parsedNumber = parseFloat(n);
      if (isNaN(parsedNumber)) {
      return NaN;
    }
    return parsedNumber;
  }