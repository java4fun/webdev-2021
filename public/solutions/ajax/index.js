const raw = async function (url, method, data) {
  const options = {
    method: method.toUpperCase(),
    body: JSON.stringify(data),
  };

  // without async/await
  // return fetch(url, options).then((response) => {
  //   return response.json();
  // });

  const response = await fetch(url, options);

  return response.json();
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
