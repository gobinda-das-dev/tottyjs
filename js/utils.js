const utils = {
   "showCdnError": showCdnError
}

function showCdnError() {
   if (typeof gsap === 'undefined') {
      console.error("GSAP is not defined. Make sure to include GSAP library.");
      return;
  }
}