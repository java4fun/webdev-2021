/**
 * Returns a random integer from 0 up to but not including the max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class JokeMachine extends HTMLElement {
  // private with `#`
  static #jokes = [
    "You know what they say about cliffhangers...",
    "Why did the coffee file a police report? It got mugged.",
    "I saw a documentary on TV last night about how they put ships together. It was rivetting.",
  ];

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const p = document.createElement("p");
    //console.log(JokeMachine.jokes);
    p.innerHTML = this.constructor.#jokes[getRandomInt(3)];

    this.shadowRoot.appendChild(p);
  }
}

// register the custom element
customElements.define("joke-machine", JokeMachine);

export default JokeMachine;
