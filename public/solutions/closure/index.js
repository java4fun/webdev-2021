function tempTracker() {
  const temps = [];

  return {
    // setTemp: function (temp) {}
    setTemp(temp) {
      if (temp >= 0 && temp <= 100) {
        temps.push(temp);
      }
    },
    // getTemp: function () {}
    getTemp() {
      return temps[temps.length - 1];
    },
    history() {
      for (let i = temps.length; i--; i >= 0) {
        console.log(temps[i]);
      }
    },
    clear() {
      // not a great performer... can we do better?
      while (temps.length) {
        temps.pop();
      }
    },
  };
}

export default tempTracker;

/**
 * Singleton Example
 */

// const temps = [];

// const tempTrackerObject = {
//   // setTemp: function (temp) {}
//   setTemp(temp) {
//     if (temp >= 0 && temp <= 100) {
//       temps.push(temp);
//     }
//   },
//   // getTemp: function () {}
//   getTemp() {
//     return temps[temps.length - 1];
//   },
//   history() {
//     for (let i = temps.length; i--; i >= 0) {
//       console.log(temps[i]);
//     }
//   },
// };

// export default tempTrackerObject;

/**
 * Better yet, just export the functions (not an object)
 */

// function setTemp(temp) {
//   if (temp >= 0 && temp <= 100) {
//     temps.push(temp);
//   }
// }

// // getTemp: function () {}
// function getTemp() {
//   return temps[temps.length - 1];
// }

// function history() {
//   for (let i = temps.length; i--; i >= 0) {
//     console.log(temps[i]);
//   }
// }

// export { setTemp, getTemp, history };

/**
 * And in a world without ES Modules?
 */

// const tempTracker = (function () {
//   const temps = [];

//   return {
//     // setTemp: function (temp) {}
//     setTemp(temp) {
//       if (temp >= 0 && temp <= 100) {
//         temps.push(temp);
//       }
//     },
//     // getTemp: function () {}
//     getTemp() {
//       return temps[temps.length - 1];
//     },
//     history() {
//       for (let i = temps.length; i--; i >= 0) {
//         console.log(temps[i]);
//       }
//     },
//   };
// })();
