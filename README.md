# Totty.js - Elevate Web Visuals Effortlessly

![Totty.js Logo](https://raw.githubusercontent.com/gobinda-das-dev/tottyjs-media/main/images/totty%20js%20banner.jpg)

Welcome to Totty.js, your gateway to a mesmerizing world of JavaScript-powered visuals. This cutting-edge library is meticulously crafted to elevate your web projects with captivating and immersive effects that leave a lasting impression.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Cool s](#cool-effects)
   - Button Hover
4. [Table of Properties](#table-of-properties)


## Installation

CDN  **of** `CSS`.

```html
<link rel="stylesheet" href="https://gobinda-das-dev.github.io/tottyjs/css/totty.css">
```


---

Use `JAVASCRIP CDN`.

```html
<script src="https://gobinda-das-dev.github.io/tottyjs/js/totty.js"></script>
```


## Cool s
### Button Hover

The feature creates a smooth button hover effect, creating an engaging user experience.

```javascript
Totty.buttonHover(".your-btn", {
    style: 1,   // total 2 styles available
    color: "gold",
    backgroundColor: "royalblue",
    backgroundEase: "cubic-bezier(0.19, 1, 0.22, 1)",
});
```








## Table of Properties
|                      | *buttonHover*        |                                   |                                                   |
| -------------------- | -------------------- | --------------------------------- | ------------------------------------------------- |
| Option               | Type                 | Default                           | Description                                       |
| `color`              | `string`             | `gold`                            | Color of text inside the button.                  |
| `colorFrom`          | `string`             | `white`                           | Color of text that comes from top.                |
| `backgroundColor`    | `string`             | `royalblue`                       | Color of the background that comes from bottom.   |
| `ease`               | `string`             | `ease-in-out`                     | easeing of the texts that.                        |
| `backgroundEase`     | `string`             | `cubic-bezier(0.19, 1, 0.22, 1)`  | easing of background that comes from bottom.      |
| `duration`           | `string`             | `.5s`                             | duration of texts transition.                     |
| `backgroundDuration` | `string`             | `1s`                              | duration of backgroundColor.                      |
| `delay`              | `string`             | `0s`                              | delay of text transition.                         |
| `backgroundDelay`    | `string`             | `1s`                              | delay of background transition.                   |
| `strokeColor`        | `string`             | `black`                           | color of border of style3(1) buttons.             |
