var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 4, 
    autoplay: {
        delay: 3000, 
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: 2,
            spaceBetween: 4, 
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 4, 
        },
    },
});