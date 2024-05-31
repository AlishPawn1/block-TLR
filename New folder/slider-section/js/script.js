
if(document.querySelector('.software-page-slide')){
    new Splide('.software-page-slide',{
        type    : 'loop',   
        perPage:1,
        pagination: false,
        autoplay: true,
    }).mount();
}