// @todo create an Artist class to represent an individual artist
class Artist {
  constructor({ id, name, formationYear, website }) {
    this.id = id;
    this.name = name;
    this.formationYear = formationYear;
    this.website = website;
  }
}

// @todo create an Album class to represent an individual album
class Album {
  constructor({ name, id, asin, label, released, price, artist_id }) {
    this.name = name;
    this.id = id;
    this.asin = asin;
    this.label = label;
    this.released = released;
    this.price = price;
    this.artist_id = artist_id;
  }
}

export { Artist, Album };
