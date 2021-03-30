/**
 * Returns a random integer from 0 up to but not including the max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// @todo - I shouldn't pollute the global scope
const jokes = [
  "You know what they say about cliffhangers...",
  "Why did the coffee file a police report? It got mugged.",
  "I saw a documentary on TV last night about how they put ships together. It was rivetting.",
];

class JokeMachine extends HTMLElement {
  // @todo - I need a constructor()
  // @todo - create a shadow root
  // @todo - create an element to hold our joke
  // @todo - insert the element into the shadow root
}

// @todo - register the custom element

export default JokeMachine;
