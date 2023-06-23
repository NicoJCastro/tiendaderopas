// CAMBIAR BACKGROUN HEADER

const scrollHeader = () => {
    const header = document.getElementById('header')
    // Cuando el desplazamiento sea superior a 50 de altura de la ventana gráfica, añada la clase scroll-header
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)

// SWIPER PRODUCTOS

let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        1024: {
        //   slidesPerView: 5,
          spaceBetween: 72,
        },
      },
  });

//   SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute('id'), sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
}

// SHOW SCROLL UP

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // Cuando el scroll es superior a 350
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data, .products__container, .footer__container, .footer__info`)
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'})
sr.reveal(`.new__card, .brand__img`, {interval: 100})
sr.reveal(`.collection__explore:nth-child(1)`, {origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2)`, {origin: 'left'})



