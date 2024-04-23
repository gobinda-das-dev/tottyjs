# Totty.js - Elevate Web Visuals Effortlessly

![Totty.js Logo](./public/banner.png)

Welcome to Totty.js, your gateway to a mesmerizing world of JavaScript-powered visuals. This cutting-edge library is meticulously crafted to elevate your web projects with captivating and immersive effects that leave a lasting impression.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Cool effects](#cool-effects)
   - Svg Line
4. [Table of Properties](#table-of-properties)


## Installation
Use `CDN`.
```html
<script src="https://raw.githubusercontent.com/gobinda-das-dev/tottyjs/main/js/totty.js"></script>
```
## Required Libraries
```html
<!--  Gsap (for basic animations) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```



## Cool effects
### Svg Line

The feature creates a smooth button hover effect, creating an engaging user experience.

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







## Table of Properties
|                      | *animateSvg*         |                                   |                                                   |
| -------------------- | -------------------- | --------------------------------- | ------------------------------------------------- |
| Property             | Type                 | Default                           | Description                                       |
| `ease`               | `string`             | `elastic.out(1,0.3)`              | Out ease that gives it a elestic effet.           |
| `duration`           | `number`             | `2`                               | Duration at of out ease.                          |
| `offsetLeft`         | `number`             | `0`                               | Distance from left.                               |
| `offsetRight`        | `number`             | `0`                               | Distance from right.                              |
| `xMultiplier`        | `number`             | `1`                               | Left and right movement multliplier.              |
| `yMultiplier`        | `number`             | `1`                               | Top and bottom movement multiplier.               |
