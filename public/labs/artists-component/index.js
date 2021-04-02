import { Artist } from "./models.js";

/**
 *
 * Complete the implementation of our Artist Detail component
 *
 * The component should render details about the artist based on the provided 'data-artist-id' attribute
 *
 * GET /artists
 * GET /artists/{id}
 * GET /albums?artist_id={id}
 *
 * Tasks:
 * [] Add an `Album` class to the models.js file (don't forget to export/import it)
 *
 * In the Web Component...
 * [] When "connected", fetch the artist data from the API
 * [] Pass an "Artist" instance to the `render` function
 * [] Render the artist name in the component once we have the artist
 * [] Set up a "click" handler to fetch the related albums of an artist,
 *    and then render them in the <ul>
 * [] When the "observed attribute" changes, re-render the artist
 * [] set up a "click" handler in the <button> so that it picks a random artist id
 *    from 0-6 and updates the attribute on itself, causing a re-render
 * [] Make sure the button click handler is set up only once
 *
 * Bonus:
 * [] Support a custom "Artist Display" template provided by the author of the HTML
 */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

class ArtistDetail extends HTMLElement {
  static get observedAttributes() {
    return ["data-artist-id"];
  }

  constructor() {
    super();
  }

  attributeChangedCallback(attrName, _oldValue, newValue) {
    // each time one of the watched attributes change
  }

  connectedCallback() {
    // when this element is attached to the DOM, then do the fetch
  }

  disconnectedCallback() {
    // each time this element is removed from a document-connected tree
    // ex: parentNode.removeChild(myComponentInstance)
  }

  /**
   *
   * @param {Artist} artist
   */
  renderArtist(artist) {
    this.shadowRoot.innerHTML = `
        <div>
            <button>New Artist</button>
            <h2>${artist.name}<h2>
            <a>View Albums</a>
            <ul id="albums"></ul>
        </div>
      `;
  }

  renderAlbums(albums = []) {}
}

customElements.define("artist-detail", ArtistDetail);

export default ArtistDetail;
