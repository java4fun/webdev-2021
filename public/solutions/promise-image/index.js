function loadImage(url, success, failure) {
  let image = new Image(100, 100);

  image.onload = function () {
    console.log(`Loaded image from ${url}`);
    success(image);
  };
  //image.addEventListener('load', fn);

  image.onerror = function () {
    let message = `Unable to load image from ${url}`;
    console.error(message);
    failure(new Error(message));
  };

  image.src = url;
}

export { loadImage };
