/**
 *
 * Exercise 1:
 *
 * We have a function that wraps around setTimeout to call a function later for us
 * It takes two additional arguments, a "success callback" and an "error callback".
 * If everything goes well, the success callback is invoked with the result of the function.
 * Otherwise the error callback is invoked.
 *
 * Convert this function so it returns a promise instead
 * You should no longer need the "success/failure" callbacks: promises already handle those.
 *
 * Ex usage:
 *  original:
 *   delayedFn(fn, 100, success, failure);
 *  new:
 *    delayedFnWithPromises(fn, 100).then(success, failure);
 */
function delayedFn(
  fn,
  delayInMs = 0,
  successCallback = (result) => {},
  failureCallback = (e) => {},
) {
  try {
    if (delayInMs < 0) {
      throw new Error("Delay is out of bounds");
    }
    setTimeout(() => {
      successCallback(fn());
    }, delayInMs);
  } catch (e) {
    failureCallback(e);
  }
}

function delayedFnWithPromises(fn, delayInMs = 0) {
  // @todo - implement me
}

export default delayedFn;

export { delayedFnWithPromises };
