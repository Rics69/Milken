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

//scrollDown
const downBtn = document.querySelector('.header__down');

downBtn.addEventListener('click', ()=>{
    window.scrollBy({
        left: 0, // на какое количество пикселей прокрутить вправо от текущей позиции
        top: 830, // на какое количество пикселей прокрутить вниз от текущей позиции
        behavior: 'smooth' // определяет плавность прокрутки: 'auto' - мгновенно (по умолчанию), 'smooth' - плавно
      });
});

//scrollTop

const btnTop = document.querySelector('.scrolltop');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 530){
        btnTop.style.display = 'flex';
    }else{
        btnTop.style.display = 'none';
    }
});

btnTop.addEventListener('click', ()=>{
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});

//news
const newsItems = document.querySelectorAll('[data-news]'),
      newsBtn = document.querySelector('.news__btn');

newsBtn.addEventListener('click', ()=>{
    let numberNewsItem = 0;
    newsItems[numberNewsItem+3].classList.toggle('hidden');
    newsItems[numberNewsItem+4].classList.toggle('hidden');
    newsItems[numberNewsItem+5].classList.toggle('hidden');
    numberNewsItem += 3;
});

//menu
const menuElement = document.querySelector('.menu');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 200){
        menuElement.style.backgroundColor = '#000';
        menuElement.style.zIndex = '10';
    }else{
        menuElement.style.backgroundColor = 'transparent';
    }
});