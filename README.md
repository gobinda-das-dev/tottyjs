# Totty.js - Elevate Web Visuals Effortlessly

![Totty.js Logo](./public/banner.png)

Welcome to Totty.js, your gateway to a mesmerizing world of JavaScript-powered visuals. This cutting-edge library is meticulously crafted to elevate your web projects with captivating and immersive effects that leave a lasting impression.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Cool effects](#cool-effects)
   - [Svg Line](#svg-line)
   - [Sticky Button](#sticky-button)
4. [Table of Properties](#table-of-properties)
5. Examples
   - [Svg Line](https://codepen.io/gobinda-das-dev/pen/YzMdRWg)
   - [Sticky Button](https://codepen.io/gobinda-das-dev/pen/ZEdNKLX)


## Installation
Use `CDN`.
```html
<script src="https://tottyjs.netlify.app/js/totty.js"></script>
```
## Required Libraries
```html
<!--  Gsap (for basic animations) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```



## Cool effects
### Svg Line

The feature creates a bending effect when hovering an SVG path, creating an engaging user experience.

```html
<!-- Example Path -->
<svg id="curve">
   <path d="M10,150 Q200,150 390,150" fill="none" stroke="#000" stroke-width="6"/>
</svg>
```
```javascript
// select your svg (which has path inside)
Totty.animateSvg("#curve", {
    ease: "elastic.out(1,0.3)",
    offsetLeft: 10,
    offsetRight: 10,
});
```
![Curve Effect](https://raw.githubusercontent.com/gobinda-das-dev/tottyjs/main/examples/curveEffect.gif)




### Sticky Button

This creates a smooth parallax sticky button effect.

```javascript
// pass parent and children you want to move
Totty.makeSticky('.element-to-hover', '.element-to-move', magnitude, ease);
```

or via data attribute:
```html
<div data-make-sticky>I am magnety!</div>
```
You can also pass element selector to data attribute:
```html
<div data-make-sticky="#stick-me">Magnety <div id="stick-me">me</div> magnet!</div>
```
![Curve Effect](https://raw.githubusercontent.com/gobinda-das-dev/tottyjs/main/examples/sticky.gif)







## Table of Properties
|                      | *animateSvg*         |                                   |                                                   |
| -------------------- | -------------------- | --------------------------------- | ------------------------------------------------- |
| Property             | Type                 | Default                           | Description                                       |
| `ease`               | `string`             | `elastic.out(1,0.3)`              | Ease that gives it a elestic effet.               |
| `duration`           | `number`             | `2`                               | Duration of ease.                                 |
| `offsetLeft`         | `number`             | `0`                               | Distance from left (respective to SVG).           |
| `offsetRight`        | `number`             | `0`                               | Distance from right (respective to SVG).          |
| `xMultiplier`        | `number`             | `1`                               | Left and right movement multliplier.              |
| `yMultiplier`        | `number`             | `1`                               | Top and bottom movement multiplier.               |
