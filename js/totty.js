const Totty = {
    "buttonHoverEffect": buttonHoverEffect
};

function buttonHoverEffect(e, properties) {
    const element = document.querySelector(e);

    properties.style = properties.style || 1;

    if (properties.style === 1) {
        element.classList.add("totty-btn1");

        const p1 = createElementWithText("p", element.textContent);
        const p2 = createElementWithText("p", element.textContent);
        const span = document.createElement("span");

        p1.style.color = "royalblue";
        p2.style.color = "white";

        p1.style.transition = `top ${properties.duration || '.5s'} ${properties.ease || 'ease-in-out'}`;
        p2.style.transition = `top ${properties.duration || '.5s'} ${properties.ease || 'ease-in-out'}`;

        if (properties.backgroundEase || properties.backgroundDuration || properties.background_color) {
            span.style.transition = `height ${properties.backgroundDuration || '1s'} ${properties.backgroundEase || 'cubic-bezier(0.19, 1, 0.22, 1)'} 0.2s`;
            span.style.backgroundColor = properties.background_color || 'white';
        } else {
            span.style.transition = `height 1s cubic-bezier(0.19, 1, 0.22, 1) 0.2s`;
            span.style.backgroundColor = 'white';
        }

        mpbS(p1, p2, span)
        appendElements(element, [p1, p2, span]);
    }
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