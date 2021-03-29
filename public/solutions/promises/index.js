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

// three things to run:

// yikes

// // let startingNumber = 1;
// // setTimeout(function () {
// //   const first = startingNumber * 10;
// //   console.log("Function 1", first);
// //   setTimeout(function () {
// //     const second = first * 10;

// //     console.log("Function 2", second);
// //     setTimeout(function () {
// //       const third = second * 10;

// //       console.log("Function 3", third);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);
// // do three things, then do the last once all are done
// setTimeout(function () {}, startingNumber * 10 * 10 * 10);

// // exercise one or "Module" with "delay", "delayedFn"
// function delay(ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, ms);
//   });
// }

// delay(1000)
//   .then(function () {
//     console.log("Function 1");
//     return delay(1000);
//   })
//   .then(function () {
//     console.log("Function 2");
//     return delay(1000);
//   })
//   .then(function () {
//     console.log("Function 3");
//   });

// // can I "fake" a const or function?
// function delayedData(data, ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(data);
//     }, ms);
//   });
// }

// function delayedFn(fn, ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(fn());
//     }, ms);
//   });
// }

// delayedData(1, 1000)
//   .then(function (data) {
//     const first = data * 10;
//     console.log("Function 1", first);
//     return delayedData(first, 1000);
//   })
//   .then(function (data) {
//     const second = data * 10;
//     console.log("Function 2", second);
//     return delayedData(second, 1000);
//   })
//   .then(function (data) {
//     const third = data * 10;
//     console.log("Function 3", third);
//   });

// const allDone = Promise.all([one, two, three]);

// const firstDone = Promise.race([one, two, three]);
