import Swiper from 'swiper';
import fitText from './libs/fittext';

document.addEventListener('DOMContentLoaded', () => {

  /* listen for clicks on elements with data-toggle="navigation", then show navigation */
  const dataToggleNavigation = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="navigation"]'), 0);

  if (dataToggleNavigation.length > 0) {
    dataToggleNavigation.forEach( el => {
      el.addEventListener('click', () => {
        document.body.classList.toggle('navigation-is-visible');
        el.classList.toggle('c-hamburger--is-active');
      });
    });
  }

});

var featureTodo = new Swiper ('#js-todoSwipes', {
  /* modify classes */

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

/* fittext */
window.fitText( document.getElementById('js-todoHeading',), 0.55 );
window.fitText( document.getElementById('js-todoSubHeading',), 1.39 );
window.fitText( document.getElementById('js-aboutHeading',), 0.5 );