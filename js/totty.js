const Totty = {
    "buttonHoverEffect": buttonHoverEffect
};

function buttonHoverEffect(e, properties) {
    const elem = document.querySelectorAll(e);

    elem.forEach(element => {

        properties = properties || {};
        properties.style = properties.style || 1;

        if (properties.style === 1) {
            const customProps = ['style', 'colorFrom', 'color', 'ease', 'duration', 'backgroundEase', 'backgroundDuration', 'backgroundColor', 'delay', 'backgroundDelay'];

            const p1 = createElementWithText("p", element.textContent);
            const p2 = createElementWithText("p", element.textContent);
            const span = document.createElement("span");


            for (const prop in properties) {
                if (!customProps.includes(prop)) {
                    element.style[prop] = properties[prop];
                }
            }

            p1.style.color = `${properties.colorFrom || 'white'}`;
            p2.style.color = `${properties.color || 'gold'}`;

            p1.style.transition = `top ${properties.duration || '.5s'} ${properties.ease || 'ease-in-out'} ${properties.delay || '0s'}`;
            p2.style.transition = `top ${properties.duration || '.5s'} ${properties.ease || 'ease-in-out'} ${properties.delay || '0s'}`;

            span.style.transition = `height ${properties.backgroundDuration || '1s'} ${properties.backgroundEase || 'cubic-bezier(0.19, 1, 0.22, 1)'}  ${properties.backgroundDelay || '0.2s'}`;
            span.style.backgroundColor = `${properties.backgroundColor || 'royalblue'}`;


            mpbS(p1, p2, span)
            appendElements(element, [p1, p2, span]);
            element.classList.add("totty-btn1");
        }




        else if (properties.style === 2) {
            const customProps = ['style', 'color', 'colorFrom', 'backgroundColor', 'ease', 'backgroundEase', 'duration'];

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

            p1.style.color = `${properties.color || 'black'}`;
            p2.style.color = `${properties.colorFrom || 'white'}`;
            p1.style.transition = `top ${properties.duration || '.4s'} ${properties.ease || 'ease-in-out'} ${properties.delay || '0s'}`;
            p2.style.transition = `top ${properties.duration || '.4s'} ${properties.ease || 'ease-in-out'} ${properties.delay || '0s'}`;


            span2.style.backgroundColor = `${properties.backgroundColor || 'black'}`
            span2.style.transition = `border-radius ${properties.backgroundDuration || '.4s'} ${properties.backgroundEase || 'ease-in-out'}, height .4s ${properties.backgroundEase || 'ease-in-out'} ${properties.delay || '0s'}`


            mpbS(span1, span2, p1, p2);
            appendElements(element, [span1, span2]);
            element.classList.add("totty-btn2");
        }
    })

}

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
    children.forEach(child => parent.appendChild(child));
}