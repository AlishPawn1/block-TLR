
jQuery(function ($){



    // bottom-to-top
    var btn = $('#button');

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

        $(document).ready(function() {
            $('.primary-menu li.menu-dropdown > a').append('<span class="dropdown-btn"><svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_15_71)"><path d="M9.24242 4.5L0.757568 4.5" stroke="#1E1E1E" stroke-miterlimit="10" stroke-linecap="round"/><path d="M5.60596 0.805176L9.24232 4.49991" stroke="#1E1E1E" stroke-miterlimit="10" stroke-linecap="round"/><path d="M9.24232 4.5L5.60596 8.19474" stroke="#1E1E1E" stroke-miterlimit="10" stroke-linecap="round"/></g><defs><clipPath id="clip0_15_71"><rect width="10" height="9" fill="white"/></clipPath></defs></svg></span>');

        
            $('.dropdown-btn').on('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                var $parentLi = $(this).parent().parent();
                $parentLi.toggleClass('open').siblings().removeClass('open');
                $parentLi.find("ul.sub-menu").first().slideToggle();
                $parentLi.siblings().find("ul.sub-menu").slideUp().parent().removeClass('open');
            });
        
            $(document).on('click', function(event) {
                if (!$(event.target).closest('.menu-dropdown').length) {
                    $('.menu-dropdown').removeClass('open');
                    $('.sub-menu').slideUp();
                }
            });
        });
        
        $('.primary-menu li').has('ul').addClass('menu-dropdown');



    $(document).ready(function() {
        var currentPath = window.location.pathname.replace(/\/$/, '');

        $('.primary-menu a').each(function() {
            var href = $(this).attr('href').replace(/\/$/, '');
            var lastPartHref = href.substring(href.lastIndexOf('/') + 1);
            if (currentPath.endsWith(lastPartHref)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });

    $(document).ready(function(){
        if($(window).width() <= 1024){
            var clonedMenuItem = $('.top-header-list').clone();
            $('.nav-item').append(clonedMenuItem);
        }

    });

    $(document).ready(function(){
        $('.hamburger').click(function(){
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.nav-item').toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        });
    
        $('.overlay').click(function(){
            $('.overlay').removeClass('active');
            $('.hamburger').removeClass('active');
            $('.nav-item').removeClass('active');
            $('body').removeClass('overflow-hidden');
        });
    });

    $(document).ready(function(){
        $('.footer-item .title').click(function(event){
            if ($(window).width() <= 575) {
              event.preventDefault();
              event.stopPropagation(); 
            
              var $submenu = $(this).next('ul');
              
              $submenu.slideToggle('fast', function() {
                $submenu.toggleClass('active');
              });
              $(this).toggleClass('active');
              $(this).parent().siblings().find('ul').removeClass('active').hide();
            }
          });
    });

    $(document).ready(function() {
        $(window).on('scroll', function() {
            let scrollPosition = $(window).scrollTop();
    
            $('.sticky-inner-list').each(function() {
                let section = $(this);
                let sectionId = section.attr('id');
                let sectionOffset = section.offset().top - 100;
                let sectionHeight = section.outerHeight();
    
                if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                    $('.sticky-inner-nav-list a').removeClass('active');
                    $('.sticky-inner-nav-list a[href="#' + sectionId + '"]').addClass('active');
                }
            });
        });
    });


});

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