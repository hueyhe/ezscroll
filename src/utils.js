import { detect } from 'detect-browser';

const browser = detect();

/**
 * Check whether the browser is firefox.
 *
 * @return {boolean} Is firefox if true.
 */
export function isFireFox() {
  if (!browser || browser.name !== 'firefox') {
    return false;
  }

  return true;
}
