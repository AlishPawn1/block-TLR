new WOW().init();

if(document.querySelector('.package-slide')){
    banner_slide = new Splide('.package-slide',{
        perPage:4,
        gap: 2,    
        arrows: false,
        pagination: false,
        drag: false,
        breakpoints: {
        1024: {
            perPage: 3,
            drag: true,
        },
        991: {
            perPage: 2,
        },
        575: {
            perPage: 1,
        }
        },
    }).mount();
}