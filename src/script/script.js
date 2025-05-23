let slideIndex = 0;
slideShow();

function plusSlides(n) {

  slideIndex += n;
  //увеличивает или уменьшает текущий индекс слайда

  let slides = document.getElementsByClassName('mySlide');
  //масив обьектов с классом mySlide

  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  //Если индекс становится больше числа слайдов, он возвращается на первый.
  //Если меньше 1, переключается на последний слайд.

  // Скрываем все слайды
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Показываем текущий
  slides[slideIndex - 1].style.display = "flex";
}




function slideShow(){
    let slides = document.getElementsByClassName('mySlide');
    //йоу тут создал масив обьектов с классом 'mySlide'



    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // циклом for мы проходим по каждому элементу масива и добавляем каждому элементу display none
    //тоесть мы сделали переменную i и задали ей значение 0 и написали что до тех пор пока i меньше длины масива (количества элементов в масиве) мы даем элементу массива который ща на очереди display none
    //после каждого прокрута цикла мы прибавляем к переменной i единицу



    slideIndex++;
    //тут мы просто к переменной slideIndex прибавляем 1 (если было 0 то стало 1 и тд)



    if (slideIndex > slides.length) {
      slideIndex = 1;
    }  
    //тут мы сказали что если slideIndex становится больше длины масива мы возвращаем его к значению 1


    slides[slideIndex - 1].style.display = "flex";
    //показываем один слайд из массива (даем ему display flex)
    //slideIndex - 1 потому что индексация в масиве начинается с 0 и если у нас slideIndex равняется 1 то надо отнять 1 что бы показать именно первый обэкт в масиве


    setTimeout(slideShow, 4000);
    //йоу тут задал что бы слайды менялись каждые 3000 миллисекунд тоесть наш цикл будет запускаться раз в 3к миллисекунд
}



function currentSlide(n) {
  slideIndex = n - 1;
  showSlideManual(slideIndex);
}

function showSlideManual(index) {
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("slide-dots-item");

  // Скрываем все слайды
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Удаляем активный стиль у всех точек
  for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
  }

  // Показываем выбранный слайд
  slides[index].style.display = "flex";
  dots[index].classList.add("active");
}



const backgroundMusic = document.getElementById('backgroundMusic');
const volumeSlider = document.getElementById('volumeSlider');

// Устанавливаем громкость при изменении ползунка
volumeSlider.addEventListener('input', function () {
  backgroundMusic.volume = this.value;
});



const slider = document.getElementById('volumeSlider');

function updateSliderBackground(slider) {
  const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, #FF69B4 0%, #FF69B4 ${percentage}%, #000000 ${percentage}%, #000000 100%)`;
}

slider.addEventListener('input', () => updateSliderBackground(slider));
updateSliderBackground(slider); // начальная заливка




const toggleBtn = document.getElementById('toggleMusicBtn');


toggleBtn.addEventListener('click', function () {


  if (backgroundMusic.paused) {
      backgroundMusic.play();
      toggleBtn.querySelector('use').setAttribute('xlink:href', '#pause'); 
  } else {
      backgroundMusic.pause();
      toggleBtn.querySelector('use').setAttribute('xlink:href', '#player');
  }
});