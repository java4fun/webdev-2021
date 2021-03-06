class WeirdAdder {
  add(x, y) {
    let sum = x + y;

    // If odd:
    if (sum % 2 !== 0) {
      return this.foundOdd(sum);
    }

    return sum;
  }

  foundOdd(n) {
    console.log(`${n} is odd`);
    return n;
  }

  render(eventHandler = () => {}) {
    const newH1 = document.createElement("h1");
    newH1.innerHTML = "Weird Adder Result";
    newH1.addEventListener("click", eventHandler);
    document.body.appendChild(newH1);
  }
}

class DelayedAdder {
  // Returns a promise that resolves to the sum of x and y:
  add(x, y) {
    return new Promise(function (resolve, reject) {
      if (x === 0 || y === 0) {
        reject("No zeroes");
      }
      setTimeout(() => resolve(x + y), 0);
    });
  }
}

export default WeirdAdder;
export { WeirdAdder, DelayedAdder };
