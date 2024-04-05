const Totty = {
    "animateSvg": animateSvg,
};

function animateSvg(targets, options = {}) {
    if (typeof gsap === 'undefined') {
      console.error("GSAP is not defined. Make sure to include GSAP library by either using a CDN or importing it from GSAP.");
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
    } = {...defaultOptions, ...options};
  
    const trg = Array.isArray(targets) ? targets : [targets];
  
    trg.forEach(target => {
      const targetElements = (typeof target === 'string') ? document.querySelectorAll(target) : (target instanceof NodeList || Array.isArray(target)) ? Array.from(target) : [target];
  
      if (targetElements.length === 0) {
        console.error(`Target '${target}' not found.`);
        return;
      }
  
      targetElements.forEach(element => {
        const { height: sh, width: sw } = element.getBoundingClientRect();
        gsap.set(element.querySelector("path"), { attr: { d: `M${offsetLeft},${sh / 2} Q${sw / 2},${sh / 2} ${sw - offsetRight},${sh / 2}` } });
  
        element.onmousemove = e => {
          const y = mapValue(e.offsetY, [0, sh], [-sh * (yMultiplier - 1), sh * yMultiplier]);
          const x = mapValue(e.offsetX, [0, sw], [-sw * (xMultiplier - 1), sw * xMultiplier]);
  
          gsap.to(element.querySelector("path"), {
            attr: { d: `M${offsetLeft},${sh / 2} Q${x},${y} ${sw - offsetRight},${sh / 2}` },
            ease: "expo",
          });
        };
  
        element.onmouseleave = () => {
          gsap.to(element.querySelector("path"), {
            attr: { d: `M${offsetLeft},${sh / 2} Q${sw / 2},${sh / 2} ${sw - offsetRight},${sh / 2}` },
            duration: duration,
            ease: ease,
          });
        };
      });
    });
  
    function mapValue(inputValue, initialRange, finalRange) {
      const [initialInputValue, finalInputValue] = initialRange;
      const [initialOutputValue, finalOutputValue] = finalRange;
  
      return initialOutputValue + (inputValue - initialInputValue) * (finalOutputValue - initialOutputValue) / (finalInputValue - initialInputValue);
    }
  }