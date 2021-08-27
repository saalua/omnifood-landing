const $menuBtn = document.querySelector('.btn-mobile-nav');
const $header = document.querySelector('.header');

$menuBtn.addEventListener('click', () => {
    $header.classList.toggle('nav-open');
});