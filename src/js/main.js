import Swiper from 'swiper';
import fitText from './libs/fittext';

document.addEventListener('DOMContentLoaded', () => {

  /* listen for clicks on elements with data-toggle="navigation", then show navigation */
  const dataToggleNavigation = Array.prototype.slice.call(document.querySelectorAll('[data-toggle="navigation"]'), 0);
  const oSite = document.getElementById('js-site');

  if (dataToggleNavigation.length > 0) {
    dataToggleNavigation.forEach( el => {
      el.addEventListener('click', () => {
        oSite.classList.toggle('o-site--navigation-is-visible');
        el.classList.toggle('c-hamburger--is-active');
        document.getElementsByTagName('html')[0].classList.toggle('overflow-hidden');
      });
    });
  }

  /* listen for scroll more than Xpx, then if true add class to header */
  const siteHeader = document.getElementById('js-header');
  let scrollpos = window.scrollY;

  window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;

    if(scrollpos > 10){
      siteHeader.classList.add('c-header--sticky');
    } else {
      siteHeader.classList.remove('c-header--sticky');
    }
  });

  const featureIntroSwiper = new Swiper ('.c-feature--intro', {
    speed: 600,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.c-swiper__button--next',
      prevEl: '.c-swiper__button--prev',
    },
  });

  /* fittext */
  // .c-feature--intro
  window.fitText( document.getElementById('js-featureIntroOne',), 2.25 );
  window.fitText( document.getElementById('js-featureIntroTwo',), 0.85 );
  window.fitText( document.getElementById('js-featureIntroThree',), 3.95 );

  // .c-feature--todo
  window.fitText( document.getElementById('js-featureIntroFour',), 1.5 );

  // .c-feature--bloggers
  window.fitText( document.getElementById('js-featureBlogOne',), 0.55 );
  window.fitText( document.getElementById('js-featureBlogTwo',), 1 );
});