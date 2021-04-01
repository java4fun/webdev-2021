let callCount = 0;
let givenName;

function promptUserForName() {
  callCount++;

  if (callCount > 1) {
    return;
  }

  givenName = prompt("What is your name?");
}

function getCurrentName(defaultName = "No One") {
  if (givenName) {
    alert(`The last name was: ${givenName}`);
  } else {
    alert(defaultName);
  }
}
