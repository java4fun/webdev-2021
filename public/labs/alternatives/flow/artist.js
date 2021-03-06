/* @flow */

type ArtistFields = {
  name: string,
  website?: string,
};

class Artist {
  name: string;
  website: ?string;

  static fetchAll(f: (artists: Array<Artist>) => void): void {
    let request = new XMLHttpRequest();

    request.addEventListener("load", (e) => {
      if (request.status >= 200 && request.status < 300) {
        f(JSON.parse(request.responseText).map((o) => new Artist(o)));
      }
    });

    request.open("GET", "/artists");
    request.send();
  }

  constructor(fields: ArtistFields) {
    this.name = fields.name;
    this.website = fields.website;
  }
}

declare class Mustache {
  static render(template: string, obj: any): string;
}

function render(artists: Array<Artist>): void {
  let view = document.getElementById("view");
  let tpl = document.getElementById("artists").innerHTML;
  view.innerHTML = Mustache.render(tpl, { artists: artists });
}
