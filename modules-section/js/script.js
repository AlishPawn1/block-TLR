if(document.querySelector('.module-slide')){
    banner_slide = new Splide('.module-slide',{
        perPage:4,
        gap: 2,    
        arrows: false,
        pagination: false,
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