const Totty = {
    "animateSvg": animateSvg,
};

const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);

function animateSvg(targets, options = {}) {
    if (typeof gsap === 'undefined') {
        console.error("GSAP is not defined. Make sure to include GSAP library.");
        return;
    }

    const defaultOptions = {
        ease: "elastic.out(1,0.3)",
        duration: 2,
        offsetLeft: 0,
        offsetRight: 0,
        xMultiplier: 1,
        yMultiplier: 1
    };

    const {
        ease,
        duration,
        offsetLeft,
        offsetRight,
        xMultiplier,
        yMultiplier
    } = { ...defaultOptions, ...options };

    const trg = gsap.utils.toArray(targets);

    if (trg.length === 0) {
        console.error("No valid targets found to animate.");
        return;
    }

    trg.forEach(target => {
        const targetElements = gsap.utils.toArray(target);

        if (targetElements.length === 0) {
            console.error(`No elements found for target: ${target}`);
            return;
        }

        targetElements.forEach(element => {
            const { height: sh, width: sw } = element.getBoundingClientRect();
            const path = $('path', element);

            if (!path) {
                console.error("No 'path' element found inside the target.");
                return;
            }

            // Set initial path
            const initialPath = `M${offsetLeft},${sh / 2} Q${sw / 2},${sh / 2} ${sw - offsetRight},${sh / 2}`;
            gsap.set(path, { attr: { d: initialPath } });

            const mapY = gsap.utils.mapRange(0, sh, -sh * (yMultiplier - 1), sh * yMultiplier);
            const mapX = gsap.utils.mapRange(0, sw, -sw * (xMultiplier - 1), sw * xMultiplier);

            // Update path on mousemove
            element.onmousemove = e => {
                const y = mapY(e.offsetY);
                const x = mapX(e.offsetX);
                const newPath = `M${offsetLeft},${sh / 2} Q${x},${y} ${sw - offsetRight},${sh / 2}`;

                gsap.to(path, {
                    attr: { d: newPath },
                    ease: "expo",
                });
            };

            // Reset path on mouseleave
            element.onmouseleave = () => {
                gsap.to(path, {
                    attr: { d: initialPath },
                    duration: duration,
                    ease: ease,
                });
            };
        });
    });
}
