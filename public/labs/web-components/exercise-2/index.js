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

    // @todo - you'll remove some of these lines and instead...
    // @todo - grab the template, clone it and append it
    // @todo - you'll also need to update the template content
    // this.shadowRoot.querySelector()

    const p = document.createElement("p");
    p.innerText = this.jokes[this.currentJokeIndex];

    const button = document.createElement("button");
    button.textContent = "Change";

    this.shadowRoot.appendChild(p);
    this.shadowRoot.appendChild(button);

    // @todo - bonus - move this event handler registration into the connected callback
    button.addEventListener("click", () => {
      this.swapJoke();
    });
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
    // @todo - bonus - try to select this once (in the constructor)
    this.shadowRoot.querySelector("p").innerText = jokeText;
  }
}

customElements.define("joke-machine", JokeMachine);

export default JokeMachine;
