import * as windowScroll from './window';
import * as elementScroll from './element';
import easing from './easing';

/* Easing functions */
export const Easing = easing;

/* Window scroller */
export const scrollTo = windowScroll.scrollTo;
export const scrollXTo = windowScroll.scrollXTo;
export const scrollYTo = windowScroll.scrollYTo;
export const scrollToBottom = windowScroll.scrollToBottom;
export const scrollToLeft = windowScroll.scrollToLeft;
export const scrollToRight = windowScroll.scrollToRight;
export const scrollToTop = windowScroll.scrollToTop;

/* Element scroller */
export const elScrollTo = elementScroll.elScrollTo;
export const elScrollXTo = elementScroll.elScrollXTo;
export const elScrollYTo = elementScroll.elScrollYTo;
export const elScrollToBottom = elementScroll.elScrollToBottom;
export const elScrollToLeft = elementScroll.elScrollToLeft;
export const elScrollToRight = elementScroll.elScrollToRight;
export const elScrollToTop = elementScroll.elScrollToTop;
