function animateMagnets() {
   const magnetParents = $$('[data-make-sticky="parent"]');

   magnetParents.forEach(magnetParent => {
      const parentMag = magnetParent.dataset.stickyMagnitude || 0.5;
      const children = $$('[data-make-sticky="child"]', magnetParent);

      makeSticky(magnetParent, magnetParent, parentMag);

      if(!children) return;
      children.forEach(child => {
         const childMag = child.dataset.stickyMagnitude || 0.5;

         makeSticky(magnetParent, child, childMag);
      })
   })
}
animateMagnets();








function makeSticky(elementToHover, elementToMove, magnitude, ease) {
   elementToHover.addEventListener('mousemove', (e) => {
      const x = (e.offsetX - elementToHover.clientWidth / 2) * magnitude;
      const y = (e.offsetY - elementToHover.clientHeight / 2) * magnitude;

      gsap.to(elementToMove, { x, y });
   });

   elementToHover.addEventListener('mouseleave', () => {
      gsap.to(elementToMove, {
         x: 0,
         y: 0,
         ease: ease || 'elastic',
         duration: 1.2
      });
   });
}
