# ezscroll

<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://www.npmjs.com/package/ezscroll" title="View this project on NPM"><img src="https://img.shields.io/npm/v/ezscroll.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://www.npmjs.com/package/ezscroll" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/ezscroll.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/hueyhe/ezscroll" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/hueyhe/ezscroll.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->

<!-- DESCRIPTION/ -->

An easy tool that helps you to scroll the browser window with animation. Time to give up `window.scrollTo`!

<!-- /DESCRIPTION -->

## Installation

Via npm.

```shell
$ npm install ezscroll --save
```

Via yarn.

```shell
$ yarn add ezscroll
```

## Basic Usage

You can simply replace all of your `window.scrollTo` with `ezscroll`.

```javascript
import { scrollTo } from 'ezscroll';

// Same usage as window.scrollTo.
// But will scroll with animation.
scrollTo(0, 0);
```

## Useful functions

We provide some useful functions which we think are in common use.

```javascript
import { scrollToTop, scrollToLeft, scrollToRight, scrollToBottom } from 'ezscroll';

// Scroll to the top of the window.
scrollToTop();

// Scroll to the left of the window.
scrollToLeft();

// Scroll to the right of the window.
scrollToRight();

// Scroll to the bottom of the window.
scrollToBottom();
```

Or you may want some accurate control on one axis.

```javascript
import { scrollXTo, scrollYTo } from 'ezscroll';

// Scroll to 10 on x axis.
scrollXTo(10);

// Scroll to 50 on y axis.
scrollYTo(50);
```

## Full API

```javascript
scrollTo(x, y, duration, easing, callback);
```

- **x**: Target scroll position on x axis.
- **y**: Target scroll position on y axis.
- **duration**: Animation duration (in ms).
- **easing**: Easing function that control the animation.
- **callback**: Callback function that will be fired after the scrolling animation.

### Easing functions

Now we only provide some basic easing functions as below. You can customize your own easing function and pass it in.

```javascript
import { Easing } from 'ezscroll';

easing = Easing.Linear;
easing = Easing.Cubic.In;
easing = Easing.Cubic.Out;
easing = Easing.Cubic.InOut;
```

We use `Easing.Cubic.InOut` by default.

<!-- LICENSE/ -->

## License

[MIT](https://github.com/hueyhe/ezscroll/blob/master/LICENSE)

Copyright &copy; [hueyhe](https://github.com/hueyhe)

<!-- /LICENSE -->
