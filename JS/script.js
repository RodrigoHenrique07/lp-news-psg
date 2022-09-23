
const openModal = document.querySelector('.btn-menu')

const closeModal = document.querySelector('.js-close-modal')

const modal = document.getElementById('js-modal')

function openMenu (){
    modal.classList.add('active')
}

function closeMenu(){
    modal.classList.toggle('active')
}

openModal.addEventListener('click', openMenu)
closeModal.addEventListener('click', closeMenu)
// modal.addEventListener('mouseleave' , () => {
//     modal.classList.remove('active')
// })




// closeMenu.addEventListener('click', function() {
//     closeMenu.classList.add('hide')
//     openMenu.classList.remove('hide')
    
    
// })

// openMenu.addEventListener('click', function(){
//     openMenu.classList.add('hide')
//     closeMenu.classList.remove('hide')
// })


// =============== Menu Fixo ==============
const header = document.getElementById('js-header')

function menuFixo () {
    if (window.pageYOffset > 80){
        header.classList.add('fixed-menu')
    } else {
        header.classList.remove('fixed-menu')
    }
}

document.addEventListener('scroll', menuFixo)


// ============= SLIDE SWIPER ===========
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

// ============ SCROLL SUAVE ==========
const linksToSection = document.querySelectorAll('.js-nav li a')
function scrollToSection (event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const initPosition = section.offsetTop;
    console.log(initPosition);

    window.scrollTo({
        top: initPosition,
        behavior: "smooth"
     })

}

linksToSection.forEach(links =>{
    links.addEventListener('click', scrollToSection )
})