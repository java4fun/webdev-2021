/******************************************************************************/
// The function below (getArtists) will be called once without an `id'
// argument and once with a numeric `id' argument.
//
// Using the `fetch' function, make an Ajax request for either all
// artists (when `id' is `undefined') or a single artist (when `id' is
// a number).
//
// Your function should fetch the JSON payload from the server,
// returning a Promise that resolves to the deserialized JSON data.
//
// To run your tests or debug, start your server and go to:
//
//   http://localhost:3000/js/fetch/
//
function getArtists(id) {
  let path = "/artists";
  if (id) {
    path += "/" + id;
  }

  // the "initial request" promise -- resolves to a Response object
  const requestPromise = fetch(path);

  const jsonPromise = requestPromise.then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Bad response");
      }
    },
    (error) => {
      throw new Error("Something went wrong with the request");
    },
  );

  return jsonPromise;
}

export { getArtists };
