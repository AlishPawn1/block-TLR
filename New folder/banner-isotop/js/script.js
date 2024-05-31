
jQuery(function($) {
    $(document).ready(function() {
        var $grid = $('.news-insight-list .row').isotope({
            itemSelector: '.isotop-item',
            layoutMode: 'fitRows'
        });

        var filterFns = {
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };

        $('.isotop-btns').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({ filter: filterValue });
        });

        $('.isotop-btns').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });
});