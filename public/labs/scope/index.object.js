const myLib = {
  callCount: 0,
  name: undefined,
  promptUserForName() {
    this.callCount++;

    if (this.callCount > 1) {
      return;
    }

    this.name = prompt("What is your name?");
  },
  getCurrentName() {
    alert(`The last name was: ${this.name}`);
  },
};

myLib.promptUserForName();
