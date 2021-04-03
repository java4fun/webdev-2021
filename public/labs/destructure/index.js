/**
 *
 * In the following exercises try to leverage:
 *  - array and object destructuring
 *  - spread syntax
 *  - default parameters
 *
 * You should be able to solve each of the exercises by only
 * 1) destructuring within the function parameters
 * 2) and, a single return statement
 *
 * Ex:
 *
 * // demo({id: 10});
 * function demo({id, name = 'Jim'}) {
 *   return {
 *     id,
 *     name
 *   }
 * }
 */

/**
 *
 * This function will be passed a user with an address
 *
 * {
 *   id,
 *   name,
 *   address: {
 *     id,
 *     street1,
 *     country
 *   }
 * }
 *
 * Return a new object that is made up of:
 * {
 *    name,
 *    user_id: the id of the user
 *    country
 * }
 */
function exercise1(/** @todo implement me */) {
  return {
    name,
    user_id,
    country,
  };
}

/**
 *
 * This function will be given an array of numbers
 *
 * Return the sum of the first element and the 5th element
 *
 * Make sure you handle the default scenario in case an array does not have a 5th element.
 *
 * exercise([1,2,3,4,5]); // 6
 * exercise([1]); // 1
 *
 */
function exercise2(/** @todo implement me */) {
  /** @todo implement me */
}

/**
 *
 * This function will be given an artist object with an array of albums
 * {
 *   id,
 *   albums: [{}, {}, {}]
 * }
 *
 * Return an object made up of:
 * {
 *   artist_id,
 *   secondAlbum
 *   otherAlbums (default to an array)
 * }
 */
function exercise3(/** @todo implement me */) {
  return {
    artist_id,
    secondAlbum,
    otherAlbums,
  };
}

/**
 *
 * This function will be given two arguments, two objects
 * Each object is a "user" that has an array of cats and dogs they own:
 *
 * {
 *   id,
 *   cats: [],
 *   dogs: []
 * }
 *
 * Ex:
 * exercise4({id: 10, cats: [], dogs: [{name: 'fido'}]}, {id: 12, cats: [{name: 'felix'}], dogs: []})
 *
 * Return an object that combines these two so that it returns an object:
 * {
 *   users: an array of user ids
 *   cats: an array of all the cats from both users combined
 *   dogs: an array of all the dogs from both users combined
 * }
 *
 */
function exercise4(/** @todo implement me */) {
  /** @todo implement me */
}

export { exercise1, exercise2, exercise3, exercise4 };
