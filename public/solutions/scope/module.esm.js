let callCount = 0;
let name;

function promptUserForName() {
  callCount++;

  if (callCount > 1) {
    return;
  }

  name = prompt("What is your name?");
}

function getCurrentName() {
  alert(`The last name was: ${name}`);
}

export { promptUserForName, getCurrentName };
