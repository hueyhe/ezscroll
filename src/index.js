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

import { isFireFox } from './utils';

import Easing from './easing';

/**
 * Get the scroll x of body when at scroll width.
 *
 * @return {number} Get scroll x of body scroll width.
 */
export function getBodyScrollX() {
  const innerWidth = window.innerWidth;
  const bodyScrollWidth = document.body.scrollWidth;

  return bodyScrollWidth - innerWidth;
}

/**
 * Get the scroll y of body when at scroll height.
 *
 * @return {number} Get scroll y of body scroll height.
 */
export function getBodyScrollY() {
  const innerHeight = window.innerHeight;
  const bodyScrollHeight = document.body.scrollHeight;

  return bodyScrollHeight - innerHeight;
}

/**
 * Easing scroll to specific point on both x and y axis.
 *
 * @param {number} x - Target x axis.
 * @param {number} y - Target y axis.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollTo(x = 0, y = 0, duration = 300, easingFunc = Easing.Cubic.InOut, callback) {
  function onMousewheel(e) {
    e.preventDefault();
  }

  // Polyfill browser firefox.
  // Prevent user scrolling while animating.
  document.body.addEventListener(isFireFox() ? 'DOMMouseScroll' : 'mousewheel', onMousewheel, false);

  // Get initial status data.
  const startX = window.scrollX;
  const endX = x;
  const startY = window.scrollY;
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
      // Reset user scrolling listener.
      document.body.removeEventListener(isFireFox() ? 'DOMMouseScroll' : 'mousewheel', onMousewheel, false);

      if (typeof callback === 'function') {
        callback();
      }

      return;
    }
    // Easing.
    const rate = easingFunc(progress / duration);
    const currentX = startX + ((endX - startX) * rate);
    const currentY = startY + ((endY - startY) * rate);
    window.scroll(currentX, currentY);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/**
 * Easing scroll to specific point on x axis.
 *
 * @param {number} target - Target x axis.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollXTo(target, duration, easingFunc, callback) {
  scrollTo(target, window.scrollX, duration, easingFunc, callback);
}

/**
 * Easing scroll to specific point on y axis.
 *
 * @param {number} target - Target y axis.
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollYTo(target, duration, easingFunc, callback) {
  scrollTo(window.scrollX, target, duration, easingFunc, callback);
}

/**
 * Easing scroll to bottom.
 *
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollToBottom(duration, easingFunc, callback) {
  scrollYTo(getBodyScrollY(), duration, easingFunc, callback);
}

/**
 * Easing scroll to left.
 *
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollToLeft(duration, easingFunc, callback) {
  scrollXTo(0, duration, easingFunc, callback);
}

/**
 * Easing scroll to right.
 *
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollToRight(duration, easingFunc, callback) {
  scrollXTo(getBodyScrollX(), duration, easingFunc, callback);
}

/**
 * Easing scroll to top.
 *
 * @param {number} duration - Animation duration in ms.
 * @param {function} easingFunc - Easing function to execute animation.
 * @param {function} callback - Callback function that is fired when the scrolling animation end. 
 * @return {void}
 */
export function scrollToTop(duration, easingFunc, callback) {
  scrollYTo(0, duration, easingFunc, callback);
}
