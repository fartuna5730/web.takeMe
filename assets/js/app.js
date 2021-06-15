const swiperGallery = new Swiper('.container-gallery', {
  slidesPerView: 'auto',
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.getElementById("sidebar_trigger").addEventListener('click', (event) => {
  if (event.target.closest('.sidebar__item-arrowContent')) {
    event.target.closest('.sidebar__item-arrowContent')
      .classList.toggle('sidebar__item-arrowContent--active');
  }
});


const locationScroll = document.getElementById('link_location');
const accommodationScroll = document.getElementById('link_accommodation');
const guidesScroll = document.getElementById('link_guides');
const stayScroll = document.getElementById('link_stay');
const contactScroll = document.getElementById('link_contact');

const burger = document.getElementById("burger_menu");
const activeMenu = document.getElementById("js-active-menu");

const modalLogin = document.getElementById('link_log');
const activeModalLogin = document.getElementById('modal-log');

locationScroll.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('location').scrollIntoView({
    behavior: "smooth"
  });
  if (burger.classList.contains('open')) {
    burger.classList.remove('open');
    activeMenu.classList.remove('act');
    document.body.classList.remove('lock');
  }
})
accommodationScroll.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('accommodation_location').scrollIntoView({
    behavior: "smooth"
  });
  if (burger.classList.contains('open')) {
    burger.classList.remove('open');
    activeMenu.classList.remove('act');
    document.body.classList.remove('lock');
  }
})

guidesScroll.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('guides').scrollIntoView({
    behavior: "smooth"
  });

  if (burger.classList.contains('open')) {
    burger.classList.remove('open');
    activeMenu.classList.remove('act');
    document.body.classList.remove('lock');
  }
})

stayScroll.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('where_stay').scrollIntoView({
    behavior: "smooth"
  });
  if (burger.classList.contains('open')) {
    burger.classList.remove('open');
    activeMenu.classList.remove('act');
    document.body.classList.remove('lock');
  }
})

contactScroll.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({
    behavior: "smooth"
  });
  if (burger.classList.contains('open')) {
    burger.classList.remove('open');
    activeMenu.classList.remove('act');
    document.body.classList.remove('lock');
  }
})

modalLogin.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('lock');
  activeModalLogin.classList.add('modal-log--active');

  if (burger.classList.contains('open')) {
    burger.classList.remove('open');
    activeMenu.classList.remove('act');
  }
})

activeModalLogin.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.closest('.js-close') || e.target.classList.contains('modal-log')) {
    activeModalLogin.classList.remove('modal-log--active');
    document.body.classList.remove('lock');
  }
})

burger.addEventListener("click", (e) => {
  burger.classList.toggle('open');
  activeMenu.classList.toggle('act');
  document.body.classList.toggle('lock');

})