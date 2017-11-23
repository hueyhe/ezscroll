/**
 * Easing functions.
 * https://github.com/tweenjs/tween.js/blob/master/src/Tween.js
 */
export default {
  Cubic: {
    In(k) {
      return k * k * k;
    },
    Out(k) {
      return --k * k * k + 1;
    },
    InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k + 2);
    },
  },
  Linear(k) {
    return k;
  },
};
