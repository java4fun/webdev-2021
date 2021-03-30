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

    const tmpl = document.getElementById("joke-machine-template");

    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

    this.shadowRoot.getElementById("joke").innerText = this.jokes[
      this.currentJokeIndex
    ];
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
    this.shadowRoot.getElementById("joke").innerText = jokeText;
  }

  fetchJoke() {
    fetch("https://icanhazdadjoke.com/slack")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // the joke lives in attachements[0]
        this.setJoke(data.attachments[0].text);
      });
  }

  connectedCallback() {
    this.handler = (e) => {
      console.log(e);
      if (e.target.id === "fetch-joke") {
        this.fetchJoke();
      } else {
        this.swapJoke();
      }
    };

    this.shadowRoot
      .querySelectorAll("button")
      .forEach((el) => el.addEventListener("click", this.handler));
  }

  disconnectedCallback() {
    if (typeof this.handler === "function") {
      this.shadowRoot
        .querySelectorAll("button")
        .forEach((el) => el.removeEventListener("click", this.handler));
    }
  }
}

customElements.define("joke-machine", JokeMachine);

export default JokeMachine;
