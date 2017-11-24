/**
 * Copyright 2017 hueyhe. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import requestAnimationFrame from 'raf';

import { exists, getScrollX, getScrollY, preventUserScroll, resetUserScroll } from './utils';

import Easing from './easing';

import { browserNotSupport } from './error';

function isElementValid(element) {
  if (!exists(element.scrollTop)) {
    throw new Error(browserNotSupport);
    return false;
  }

  if (!exists(element.scrollLeft)) {
    throw new Error(browserNotSupport);
    return false;
  }

  return true;
}

/**
 * Easing scroll on element to specific point on both x and y axis.
 *
 * @param {object} element - Scroll container element.
 * @param {number} x - Target x axis.
 * @param {number} y - Target y axis.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollTo(element, x = 0, y = 0, duration = 300, easingFunc = Easing.Cubic.InOut, callback) {
  // Check element is valid or not.
  if (!isElementValid(element)) {
    return false;
  }

  // Polyfill browser firefox.
  // Prevent user scrolling while animating.
  preventUserScroll(element);

  // Get initial status data.
  const startX = element.scrollLeft;
  const endX = x;
  const startY = element.scrollTop;
  const endY = y;
  let startTime = null;

  function animate(timestamp) {
    // Record animation start time.
    if (startTime === null) {
      startTime = timestamp;
    }
    const progress = timestamp - startTime;
    if (progress > duration) {
      window.scroll(endX, endY);
      element.scrollLeft = endX;
      element.scrollTop = endY;
      // Reset user scrolling listener.
      resetUserScroll(element);

      if (typeof callback === 'function') {
        callback();
      }

      return;
    }
    // Easing.
    const rate = easingFunc(progress / duration);
    const currentX = startX + ((endX - startX) * rate);
    const currentY = startY + ((endY - startY) * rate);
    element.scrollLeft = currentX;
    element.scrollTop = currentY;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/**
 * Easing scroll on element to specific point on x axis.
 *
 * @param {object} element - Scroll container element.
 * @param {number} target - Target x axis.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollXTo(element, target, duration, easingFunc, callback) {
  elScrollTo(element, target, element.scrollTop, duration, easingFunc, callback);
}

/**
 * Easing scroll to specific point on y axis.
 *
 * @param {object} element - Scroll container element.
 * @param {number} target - Target y axis.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollYTo(element, target, duration, easingFunc, callback) {
  elScrollTo(element, element.scrollLeft, target, duration, easingFunc, callback);
}

/**
 * Easing scroll to bottom.
 *
 * @param {object} element - Scroll container element.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollToBottom(element, duration, easingFunc, callback) {
  elScrollYTo(element, getScrollY(element), duration, easingFunc, callback);
}

/**
 * Easing scroll to left.
 *
 * @param {object} element - Scroll container element.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollToLeft(element, duration, easingFunc, callback) {
  elScrollXTo(element, 0, duration, easingFunc, callback);
}

/**
 * Easing scroll to right.
 *
 * @param {object} element - Scroll container element.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollToRight(element, duration, easingFunc, callback) {
  elScrollXTo(element, getScrollX(element), duration, easingFunc, callback);
}

/**
 * Easing scroll to top.
 *
 * @param {object} element - Scroll container element.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function elScrollToTop(element, duration, easingFunc, callback) {
  elScrollYTo(element, 0, duration, easingFunc, callback);
}
