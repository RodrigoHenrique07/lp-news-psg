
const closeMenu = document.querySelector('.btn-menu')
const openMenu = document.querySelector('.close')

closeMenu.addEventListener('click', function() {
    closeMenu.classList.add('hide')
    openMenu.classList.remove('hide')
    
    
})

openMenu.addEventListener('click', function(){
    openMenu.classList.add('hide')
    closeMenu.classList.remove('hide')
})


var swiper = new Swiper(".slide-noticias", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    pagination: {
    el: ".slide-noticias-pagination",
    clickable: true,
  },
  breakpoints:{
    320: {
        slidesPerView: 1.3,
        spaceBetween: 12,
    },
    600:{
        slidesPerView: 3.1,
        spaceBetween: 20,
    },
    780:{
        slidesPerView: 2.3,
        spaceBetween: 18,
    },
    991:{
        slidesPerView: 2.8,
        spaceBetween: 15,
    },
    1200:{
        slidesPerView: 3.5,
        spaceBetween: 20,
    },
  }
});
AOS.init({
    duration: 1000,
    once: true
});