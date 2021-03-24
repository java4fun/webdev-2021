/**
 * Returns a random integer up to but not including the max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class JokeMachine extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.jokes = [
      "You know what they say about cliffhangers...",
      "Why did the coffee file a police report? It got mugged.",
      "I saw a documentary on TV last night about how they put ships together. It was rivetting.",
    ];

    this.currentJokeIndex = getRandomInt(3);

    const p = document.createElement("p");
    p.innerText = this.jokes[this.currentJokeIndex];

    const button = document.createElement("button");
    button.textContent = "Change";

    // @todo - this isn't the best place to register a handler...
    button.addEventListener("click", () => {
      this.swapJoke();
    });

    this.shadowRoot.appendChild(p);
    this.shadowRoot.appendChild(button);
  }

  swapJoke() {
    let newRand = getRandomInt(3);
    do {
      newRand = getRandomInt(3);
    } while (newRand === this.currentJokeIndex);

    this.currentJokeIndex = newRand;

    this.setJoke(this.jokes[this.currentJokeIndex]);
  }

  setJoke(jokeText) {
    // @todo - this selection feels wasteful
    this.shadowRoot.querySelector("p").innerText = jokeText;
  }

  // connectedCallback() {
  //     this.handler = (e) => {
  //         this.swapJoke();
  //     }

  //     this.shadowRoot.querySelectorAll('button').forEach(
  //         el => el.addEventListener('click', this.handler)
  //     );
  // }

  // disconnectedCallback() {
  //     if (typeof this.handler === 'function') {
  //         this.shadowRoot.querySelectorAll('button').forEach(el => el.removeEventListener('click', this.handler));
  //     }
  // }
}

customElements.define("joke-machine", JokeMachine);

export default JokeMachine;
