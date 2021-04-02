import { Artist, Album } from "./models.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class ArtistDetail extends HTMLElement {
  static get observedAttributes() {
    return ["data-artist-id"];
  }

  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    // const template = document.getElementById("rainbow-button-template");
    // const templatedElement = template.content.cloneNode(true);

    // this.shadowRoot.appendChild(templatedElement);
  }

  attributeChangedCallback(attrName, _oldValue, newValue) {
    // each time one of the watched attributes change
    if (attrName === "data-artist-id") {
      this.updateArtist(newValue);
    }
  }

  connectedCallback() {
    // when this element is attached to the DOM, then do the fetch
    const artistId = this.dataset.artistId;

    this.updateArtist(artistId);
  }

  disconnectedCallback() {
    // each time this element is removed from a document-connected tree
    // ex: parentNode.removeChild(myComponentInstance)
  }

  updateArtist(artistId) {
    const request = fetch(`/artists/${artistId}`);

    request
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        this.renderArtist(new Artist(data));
      });
  }

  renderArtist(artist) {
    this.shadowRoot.innerHTML = `
        <div>
            <button>New Artist</button>
            <h2>${artist.name}<h2>
            <a>View Albums</a>
            <ul id="albums"></ul>
        </div>
      `;

    const anchor = this.shadowRoot.querySelector("a");
    anchor.addEventListener("click", (e) => {
      const request = fetch(`/albums/?artist_id=${artist.id}`);
      request
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const albums = data.map((el) => {
            return new Album(el);
          });
          this.renderAlbums(albums);
        });
    });

    // @todo - this is re-rendered every new artist... that isn't necessary
    const button = this.shadowRoot.querySelector("button");
    button.addEventListener("click", (e) => {
      // get a new random artist id
      const artistId = getRandomInt(5);
      this.dataset.artistId = artistId;

      console.log(artistId);
    });
  }

  renderAlbums(albums = []) {
    const albumsElement = this.shadowRoot.querySelector("#albums");

    albums.forEach((album) => {
      const newLi = document.createElement("li");
      newLi.innerHTML = album.name;
      albumsElement.appendChild(newLi);
    });
  }
}

customElements.define("artist-detail", ArtistDetail);

export default ArtistDetail;
