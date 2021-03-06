const swiperDefaultConfig = {
    direction: 'horizontal',
    loop: false,
    centeredSlides: false,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        // delay: 2000,
        // disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 10,
    // breakpoints: {
    //     480: { ... },
    //     720: { ... },
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // }
}

export default swiperDefaultConfig 