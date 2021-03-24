/**
 * Returns a random integer up to but not including the max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const alternativeTemplateApproach = document.createElement("template");
alternativeTemplateApproach.innerHTML = `
<!-- note: I had to link to my same style sheet to get .ui.button working -->
<link href="/vendor/semantic-ui/semantic.min.css" rel="stylesheet" type="text/css" />
<p></p>
<button class="ui button">
    <slot name="button-label">Default Click Label</slot>
</button>
`;

class JokeMachine extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.currentJokeIndex = getRandomInt(3);

    const tmpl = document.getElementById("joke-template");
    this.shadowRoot.appendChild(tmpl.content.cloneNode(true));

    // @note: an alternative approach to templates...
    //this.shadowRoot.appendChild(alternativeTemplateApproach.content.cloneNode(true));

    let providedJokes = this.getAttribute("jokes");
    if (providedJokes) {
      this.jokes = providedJokes.split(",").map((val) => {
        return val.trim();
      });
    } else {
      this.jokes = [
        "You know what they say about cliffhangers...",
        "Why did the coffee file a police report? It got mugged.",
        "I saw a documentary on TV last night about how they put ships together. It was rivetting.",
      ];
    }

    this.paragraph = this.shadowRoot.querySelector("p");
    this.paragraph.innerText = this.jokes[this.currentJokeIndex];
    this.button = this.shadowRoot.querySelector("button");
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
    this.paragraph.innerText = jokeText;
  }

  connectedCallback() {
    this.handler = (e) => {
      this.swapJoke();
    };

    this.button.addEventListener("click", this.handler);
  }

  disconnectedCallback() {
    if (typeof this.handler === "function") {
      this.shadowRoot
        .querySelectorAll("button")
        .forEach((el) => el.removeEventListener("click", this.handler));
    }
  }

  static get observedAttributes() {
    return ["jokes"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    const newJokes = newValue.split(",");
    this.jokes = newJokes;
  }
}

customElements.define("joke-machine", JokeMachine);

export default JokeMachine;
