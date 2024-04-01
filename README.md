# Totty.js - Elevate Web Visuals Effortlessly

![Totty.js Logo](https://raw.githubusercontent.com/gobinda-das-dev/tottyjs-media/main/images/totty%20js%20banner.jpg)

Welcome to Totty.js, your gateway to a mesmerizing world of JavaScript-powered visuals. This cutting-edge library is meticulously crafted to elevate your web projects with captivating and immersive effects that leave a lasting impression.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Cool effects](#cool-effects)
   - Button Hover
4. [Table of Properties](#table-of-properties)


## Installation
Use `CDN`.
```html
<script src="https://gobinda-das-dev.github.io/tottyjs/js/totty.js"></script>
```


## Cool effects
### Button Hover

The feature creates a smooth button hover effect, creating an engaging user experience.

```javascript
Totty.buttonHover(".your-btn", {
    style: 1,   // total 3 styles available
    color: "gold",
    backgroundColor: "royalblue",
    backgroundEase: "cubic-bezier(0.19, 1, 0.22, 1)",
});
```
### Nav Hamberger

Use it to create a smooth and subtle navigation hamburger menu.

```javascript
Totty.navHamburger(".your-nav", {
    style: 1,   // total 1 style available
    color: "black",
    backgroundColor: "red",
    ease: "ease-in-out",
});
```








## Table of Properties
|                      | *buttonHover(effect)*|                                   |                                                   |
| -------------------- | -------------------- | --------------------------------- | ------------------------------------------------- |
| Property             | Type                 | Default                           | Description                                       |
| `style`              | `number`             | `1`                               | Style of button hover effect. (3 styles available)|
| `color`              | `string`             | `gold`                            | Color of text inside the button.                  |
| `colorFrom`          | `string`             | `white`                           | Color of text that comes from top.                |
| `backgroundColor`    | `string`             | `royalblue`                       | Color of the background that comes from bottom.   |
| `ease`               | `string`             | `ease-in-out`                     | primary easing.                                   |
| `backgroundEase`     | `string`             | `cubic-bezier(0.19, 1, 0.22, 1)`  | secondary easing (if any).                        |
| `duration`           | `string`             | `0.5s`                            | duration of primary ease.                         |
| `backgroundDuration` | `string`             | `1s`                              | duration of secondary ease (if any).              |
| `delay`              | `string`             | `0s`                              | delay primary transition.                         |
| `backgroundDelay`    | `string`             | `1s`                              | delay secondary transition (if any).              |
| `strokeColor`        | `string`             | `black`                           | color of border of style3 buttons.                |
<hr />

|                      |*navHamburger(effect)*|                                   |                                                   |
| -------------------- | -------------------- | --------------------------------- | ------------------------------------------------- |
| Property             | Type                 | Default                           | Description                                       |
| `style`              | `number`             | `1`                               | Style of button hover effect. (1 styles available)|
| `color`              | `string`             | `black`                           | Default color of nav sticks.                      |
| `colorTo`            | `string`             | `red`                             | Changed color of sticks when hovered.             |
| `ease`               | `string`             | `ease`                            | default easing.                                   |
| `duration`           | `string`             | `0.4s`                            | duration of ease.                                 |
| `delay`              | `string`             | `0s`                              | delay of transition.                              |
| `height`             | `string`             | `2px`                             | height of each nav sticks.                        |
| `width`              | `string`             | `36px`                            | width of each nav sticks.                         |
