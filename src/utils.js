import { isFireFox } from './browser';

import { invalidElement } from './error';

/**
 * Get mouse wheel event name.
 * Names differs in different browsers. 
 *
 * @return {string}
 */
function getMouseWheelEvent() {
  if (isFireFox()) {
    return 'DOMMouseScroll';
  }

  return 'mousewheel';
}

function preventDefaultMouseWheel(e) {
  e.preventDefault();
}

/**
 * Return true if object exists.
 *
 * @param {object} obj - Target object.
 * @return {boolean} If object exists.
 */
export function exists(obj) {
  return obj !== null && obj !== undefined;
}

/**
 * Get the scroll x of element when at scroll width.
 *
 * @return {number} Get scroll x of element scroll width.
 */
export function getScrollX(element) {
  const innerWidth = element.getBoundingClientRect().width;
  const scrollWidth = element.scrollWidth;

  return scrollWidth - innerWidth;
}

/**
 * Get the scroll y of element when at scroll height.
 *
 * @return {number} Get scroll y of element scroll height.
 */
export function getScrollY(element) {
  const innerHeight = element.getBoundingClientRect().height;
  const scrollHeight = element.scrollHeight;

  return scrollHeight - innerHeight;
}

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
 * Prevent user mouse wheel event.
 * 
 * @param {object} element - Target dom element that needs to prevent user mouse wheel.
 * @return {void}
 */
export function preventUserScroll(element) {
  const target = element || document.body;

  if (!target || !target.addEventListener) {
    throw new Error(invalidElement(element));
  }

  target.addEventListener(getMouseWheelEvent(), preventDefaultMouseWheel, false);
}

/**
 * Reset user mouse wheel event.
 * 
 * @param {object} element - Target dom element that needs to reset user mouse wheel.
 * @return {void}
 */
export function resetUserScroll(element) {
  const target = element || document.body;

  if (!target || !target.addEventListener) {
    throw new Error(invalidElement(element));
  }

  target.removeEventListener(getMouseWheelEvent(), preventDefaultMouseWheel, false);
}
