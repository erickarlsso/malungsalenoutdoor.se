document.addEventListener('DOMContentLoaded', () => {

  /* listen for clicks on elements with data-toggle="navigation", then show navigation */
  const dataToggleNavigation = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="navigation"]'), 0);

  if (dataToggleNavigation.length > 0) {
    dataToggleNavigation.forEach( el => {
      el.addEventListener('click', () => {
        document.body.classList.toggle('navigation-is-visible');
      });
    });
  }

});