/*
 * Hosts Exercise:
 *
 * We're going to build a basic IIFE module and then upgrade it (later) to be a more
 * modern ES Module with a flexible API.
 *
 * First...
 *
 * Using an IIFE, change the `Hosts' variable below so that it references
 * an object.  The object should have four (4) properties that are all
 * functions:
 *
 *   add(name, address) - A function that takes two arguments, a host
 *                        name and an IP address.  The function should
 *                        record that the given host has the specified
 *                        IP address.
 *
 *  lookupByName(name)  - A function that returns all IP addresses
 *                        associated with the given host name.  If the
 *                        given name has not been recorded by a call
 *                        to `add' then this function should return an
 *                        empty array.
 *
 *  lookupByIP(address) - A function that returns all host names that
 *                        were recorded with the specified IP address.
 *                        If the specified IP address does not have
 *                        any host names associated with it then this
 *                        function should return an empty array.
 *
 *  clear()             - A function that removes all host names and
 *                        IP addresses from the Hosts object.
 *
 * Notes:
 *
 *  - Do not introduce any new global variables.  The `Hosts` variable
 *    is the only allowed global variable. We're actually leveraging a modern module here
 *    by using `export` so we're not mucking with a real global scope regardless. However
 *    I want you to experience this limitation because that is a better representation
 *    of developing "old world" modules for the web.
 *
 *  - Consider how you want to store your data...
 *  	* An Object?
 *  	* An Array?
 *  	* A Map()
 *  		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 *
 *
 * Bonus Exercise:
 *
 * Make it so a user of your module can get the "length" of the host names currently being stored.
 * If we add three host names, then:
 *   Hosts.length; // 3
 *
 * You can do this either by:
 * - using `Object.defineProperty`
 *      see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 * - defining a `getter` on the object that you are returning to the user of your module
 *      see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
 *
 * For Later...
 *
 * You're providing a single object as the interface into this module, however it would be more flexible if you
 * were to allow a user of your module to leverage specific functions as needed, ex:
 *
 * import Hosts from './index.js';
 * Hosts.clear();
 * // vs
 * import {clear} from './index.js';
 * clear();
 *
 * Can you update your module to provide this more flexible interface?
 *
 */
const Hosts = undefined;

export default Hosts;
