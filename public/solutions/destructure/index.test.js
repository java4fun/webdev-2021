import { exercise1, exercise2, exercise3, exercise4 } from "./index.js";

it("Exercise 1", function () {
  const user = {
    id: 1,
    name: "Jim",
    address: {
      id: 10,
      country: "USA",
    },
  };

  let result = exercise1(user);
  expect(result).toEqual({ user_id: 1, name: "Jim", country: "USA" });
});

it("Exercise 2", function () {
  let result = exercise2([2, 3, 4, 5, 2, 7]);
  expect(result).toEqual(4);

  result = exercise2([2]);
  expect(result).toEqual(2);
});

it("Exercise 3", function () {
  const artist = {
    id: 12,
    albums: [
      {
        id: 10,
        title: "Magical First Album",
      },
      {
        id: 11,
        title: "Second Album",
      },
      {
        id: 12,
        title: "Boring Third Album",
      },
      {
        id: 22,
        title: "Reunion Tour: Last Album",
      },
    ],
  };

  let result = exercise3(artist);
  expect(result).toEqual({
    artist_id: artist.id,
    secondAlbum: {
      id: 11,
      title: "Second Album",
    },
    otherAlbums: [
      {
        id: 12,
        title: "Boring Third Album",
      },
      {
        id: 22,
        title: "Reunion Tour: Last Album",
      },
    ],
  });
});

it("Exercise 4", function () {
  const user1 = {
    id: 12,
    cats: [
      {
        name: "Felix",
      },
      {
        name: "Chaplin",
      },
    ],
    dogs: [
      {
        name: "Fido",
      },
    ],
  };

  const user2 = {
    id: 1322,
    cats: [
      {
        name: "Charmin",
      },
      {
        name: "Plucky",
      },
    ],
    dogs: [
      {
        name: "Fudge",
      },
    ],
  };

  let result = exercise4(user1, user2);
  expect(result).toEqual({
    users: [12, 1322],
    cats: [
      {
        name: "Felix",
      },
      {
        name: "Chaplin",
      },
      {
        name: "Charmin",
      },
      {
        name: "Plucky",
      },
    ],
    dogs: [
      {
        name: "Fido",
      },
      {
        name: "Fudge",
      },
    ],
  });
});
