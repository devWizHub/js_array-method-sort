'use strict';

/**
 * Implement method Sort
 */

// function compareAsStrings(a, b) {
//   a = String(a);
//   b = String(b);

//   if (a > b) {
//     return 1;
//   }

//   if (a < b) {
//     return -1;
//   }

//   return 0;
// }

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let counter;

    do {
      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          counter++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
