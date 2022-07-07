/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
//slider
const buttons = document.querySelectorAll('[data-btn]'),
      sliderItems = document.querySelectorAll('.liver__slider-item'),
      sliderTrack = document.querySelector('.liver__slider-track');

buttons.forEach(item => {
    item.addEventListener('click', ()=>{
        const currentBtn = item.getAttribute('data-btn');
        if(currentBtn == '2'){
            sliderTrack.classList.remove('hundredPos');
            sliderTrack.classList.add('fifthPos');
        }else if(currentBtn == '3'){
            sliderTrack.classList.remove('fifthPos');
            sliderTrack.classList.add('hundredPos');
        }else{
            sliderTrack.classList.remove('fifthPos');
            sliderTrack.classList.remove('hundredPos');
        }
    });
});

//accordeon
const titleBlock = document.querySelectorAll('[data-block]'),
      contentBlock = document.querySelectorAll('.questions__item-text'),
      svgItems = document.querySelectorAll('.questions__item-svg');
    

titleBlock.forEach(item=>{
    item.addEventListener('click', ()=>{
        const currentBlock = item.getAttribute('data-block');
        const currentContent = contentBlock[currentBlock-1];
        const currentSvg = svgItems[currentBlock-1];
        currentContent.classList.toggle('hidden');
        currentSvg.classList.toggle('hiddentransform');
    });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map