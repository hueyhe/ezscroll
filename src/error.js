/**
 * Error messages.
 */

export const browserNotSupport = 'Sorry your browser does not support some features we use. Please use morden browser instead.';

export function invalidElement(element) {
  return `Invalid type of target element. Expect DOM element but got ${element}.`;
}
