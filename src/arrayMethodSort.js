'use strict';

/**
 * Implement method Sort
 */

const compareAsStrings = (a, b) =>
  (String(a) > String(b)) ? 1 : -1;

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here
    let counter;

    do {
      counter = 0;

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
