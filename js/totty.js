const Totty = {
    "buttonHover": buttonHover,
    "navHamburger": navHamburger,
    "animateSvg": animateSvg
};

function buttonHover(e, properties) {
    const elem = document.querySelectorAll(e);

    properties = properties || {};
    properties.style = properties.style || 1;

    if (!elem.length) {
        console.error("Uncaught Error: Totty target he not found.");
    }


    elem.forEach(element => {


        if (properties.style === 1) {
            const customProps = ['style', 'colorFrom', 'color', 'ease', 'duration', 'backgroundEase', 'backgroundDuration', 'backgroundColor', 'delay', 'backgroundDelay'];


            const colorFrom = getProperty(properties.colorFrom, 'white');
            const color = getProperty(properties.color, 'gold');
            const duration = getProperty(properties.duration, '.5s');
            const ease = getProperty(properties.ease, 'ease-in-out');
            const delay = getProperty(properties.delay, '0s');
            const backgroundDuration = getProperty(properties.backgroundDuration, '1s');
            const backgroundEase = getProperty(properties.backgroundEase, 'cubic-bezier(0.19, 1, 0.22, 1)');
            const backgroundDelay = getProperty(properties.backgroundDelay, '0.2s');
            const backgroundColor = getProperty(properties.backgroundColor, 'royalblue');



            const p1 = createElementWithText("p", element.textContent);
            const p2 = createElementWithText("p", element.textContent);
            const span = document.createElement("span");


            for (const prop in properties) {
                if (!customProps.includes(prop)) {
                    element.style[prop] = properties[prop];
                }
            }

            p1.style.color = colorFrom;
            p2.style.color = color;

            p1.style.transition = `top ${duration} ${ease} ${delay}`;
            p2.style.transition = `top ${duration} ${ease} ${delay}`;

            span.style.transition = `height ${backgroundDuration} ${backgroundEase}  ${backgroundDelay}`;
            span.style.backgroundColor = backgroundColor;


            mpbS(p1, p2, span);
            appendElements(element, [p1, p2, span]);
            element.classList.add("totty-btn1");
        }




        else if (properties.style === 2) {
            const customProps = ['style', 'color', 'colorFrom', 'backgroundColor', 'ease', 'backgroundEase', 'duration', 'backgroundDuration', 'delay', 'backgroundDelay'];

            const color = getProperty(properties.color, 'black');
            const colorFrom = getProperty(properties.colorFrom, 'white');
            const duration = getProperty(properties.duration, '.4s');
            const ease = getProperty(properties.ease, 'ease-in-out');
            const delay = getProperty(properties.delay, '0s');
            const backgroundColor = getProperty(properties.backgroundColor, 'black');
            const backgroundDuration = getProperty(properties.backgroundDuration, '.4s');
            const backgroundEase = getProperty(properties.backgroundEase, 'ease-in-out');
            const backgroundDelay = getProperty(properties.backgroundDelay, '0s');



            const span1 = createElementWithText("span", element.textContent);
            const span2 = document.createElement("span");


            const p1 = createElementWithText("p", element.textContent);
            const p2 = createElementWithText("p", element.textContent);

            appendElements(span1, [p1, p2]);


            for (const prop in properties) {
                if (!customProps.includes(prop)) {
                    element.style[prop] = properties[prop];
                }
            }

            p1.style.color = color;
            p2.style.color = colorFrom;
            p1.style.transition = `top ${duration} ${ease} ${delay}`;
            p2.style.transition = `top ${duration} ${ease} ${delay}`;


            span2.style.backgroundColor = backgroundColor;
            span2.style.transition = `border-radius ${backgroundDuration} ${backgroundEase}, height .4s ${backgroundEase} ${backgroundDelay}`;


            mpbS(span1, span2, p1, p2);
            appendElements(element, [span1, span2]);
            element.classList.add("totty-btn2");
        }




        else if (properties.style === 3) {

            properties.subStyle = properties.subStyle || 1;
            properties.cncl !== false && console.warn("style 3 has 6 other subStyle");


            if (properties.subStyle = 1) {
                const customProps = ['style', 'ease', 'duration', 'delay', 'strokeColor'];

                const ease = getProperty(properties.ease, 'ease');
                const duration = getProperty(properties.duration, '0.6s');
                const delay = getProperty(properties.delay, '0');
                const strokeColor = getProperty(properties.strokeColor, 'black');


                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                svg.appendChild(rect);



                for (const prop in properties) {
                    if (!customProps.includes(prop)) {
                        element.style[prop] = properties[prop];
                    }
                }

                rect.setAttribute("x", "0");
                rect.setAttribute("y", "0");
                rect.setAttribute("fill", "none");
                rect.setAttribute("width", "100%");
                rect.setAttribute("height", "100%");


                element.style.transitionTimingFunction = ease;
                element.style.transitionDuration = duration;
                element.style.transitionDelay = delay;


                rect.style.stroke = strokeColor;


                mpbS(svg, rect);
                appendElements(element, svg);
                element.classList.add("totty-btn3-1");
            }
            element.classList.add("totty-btn3");
        }
    })

}

function navHamburger(e, properties) {
    const elem = document.querySelectorAll(e);

    properties = properties || {};
    properties.style = properties.style || 1;


    if (!elem.length) {
        console.error("Uncaught Error: Totty target he not found.");
    }


    elem.forEach(element => {



        if (properties.style === 1) {
            const customProps = ['style', 'duration', 'ease', 'delay', 'color', 'colorTo', 'height'];

            const duration = getProperty(properties.duration, '0.4s');
            const ease = getProperty(properties.ease, 'ease');
            const delay = getProperty(properties.delay, '0');
            const color = getProperty(properties.color, 'black');
            const colorTo = getProperty(properties.colorTo, 'red');
            const height = getProperty(properties.height, '2px');
            const width = getProperty(properties.width, '36px');



            const toggler = document.createElement("div");
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");


            for (const prop in properties) {
                if (!customProps.includes(prop)) {
                    element.style[prop] = properties[prop];
                }
            }


            const arrEle = [div1, div2, span1, span2];
            arrEle.forEach(e => {
                e.style.transitionTimingFunction = ease;
                e.style.transitionDuration = duration;
                e.style.transitionDelay = delay;
                e.style.height = height;
            });


            div1.style.backgroundColor = color;
            div2.style.backgroundColor = colorTo;


            toggler.style.width = width;


            div1.appendChild(span1);
            div1.appendChild(span2);
            div2.appendChild(span1.cloneNode(true));
            div2.appendChild(span2.cloneNode(true));
            toggler.appendChild(div1);
            toggler.appendChild(div2);


            element.appendChild(toggler);
            element.classList.add('totty-nav-toggler1');
            element.addEventListener('click', (e) => {
                e.currentTarget.classList.toggle('totty-nav-toggler1-is-active');
            })
        }
    })
}


function animateSvg(tg) {
  const trg = document.querySelectorAll(tg);

  trg.forEach(target => {
    target.onmousemove = e => {
      const y = mapValue(e.layerY, [0, target.clientHeight], [0, 300]);
      const x = mapValue(e.layerX, [0, target.clientWidth], [0, 400]);
  
      
      gsap.to(target.querySelector("path"), {
        attr: { d: `M10,150 Q${x+200},${y+150} 390,150` },
        ease: "expo",
      })
    };
  
    target.onmouseleave = () => {
      gsap.to(target.querySelector("path"), {
        attr: { d: `M10,150 Q200,150 390,150` },
        duration: 2,
        ease: "elastic.out(1,0.3)",
      })
    }
  });

  function mapValue(inputValue, initialRange, finalRange) {
    const [initialInputValue, finalInputValue] = initialRange;
    const [initialOutputValue, finalOutputValue] = finalRange;
    
    return initialOutputValue + (inputValue - initialInputValue) * (finalOutputValue - initialOutputValue) / (finalInputValue - initialInputValue);
  }
}



// Common Functions
function createElementWithText(tagName, text) {
    const element = document.createElement(tagName);
    element.textContent = text;
    return element;
}
function mpbS(...element) {
    element.forEach(e => {
        e.style.margin = 0;
        e.style.padding = 0;
        e.style.boxSizing = 'border-box'
    })
}
function appendElements(parent, children) {
    if (!Array.isArray(children)) children = [children];
    children.forEach(child => parent.appendChild(child));
}
function getProperty(property, defaultValue) {
    return (property !== undefined && property !== null) ? property : defaultValue;
}
