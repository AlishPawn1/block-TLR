new WOW().init();

if(document.querySelector('.news-slide')){
    banner_slide = new Splide('.news-slide',{
        perPage:3,
        gap: 20,    
        arrows: false,
        pagination: false,
        drag: false,
        breakpoints: {
        1024: {
            perPage: 2,
            drag: true,
        },
        575: {
            perPage: 1,
        }
        },
    }).mount();
}