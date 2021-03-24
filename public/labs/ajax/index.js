/*
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server,
 * decoded from JSON.
 *
 * Hints:
 *
 *   * `fetch' returns a promise that yield a response object.
 *
 *   * The response object has a `json' method that returns a promise.
 *
 *   * The `fetch' API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

const raw = async function (url, method, data) {
  // @todo IMPLEMENT ME
};

// HTTP GET (Fetch resource).
const get = function (url) {
  return raw(url, "GET");
};

// HTTP POST (Create new resource).
const post = function (url, data) {
  return raw(url, "POST", data);
};

// HTTP PATCH (Update existing resource).
const patch = function (url, data) {
  return raw(url, "PATCH", data);
};

// HTTP DELETE (Delete existing resource).
const del = function (url) {
  return raw(url, "DELETE");
};

export default { get, post, patch, del };
