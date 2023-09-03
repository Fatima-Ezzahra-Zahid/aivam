/**
 * Created by f.elhalafi on 20/11/2019.
 */
(function ($, Drupal) {
    $(function () {
        "use strict";

        $('#block-galerieshomepage .items').on('change', function (e) {
            e.preventDefault();
            var selection = $(this).val();
            $.ajax({
                url: '/change-galerie',
                type: "POST",
                dataType: "JSON",
                data: {
                    selection: selection
                },
                success: function (response) {
                    if ($('#slider-salon').hasClass('slick-initialized')) {
                        $('#slider-salon').slick('unslick');
                    }
                    $('#slider-salon').html(response.images);
                    $('#block-galerieshomepage .width-text h2').html(response.title);
                    $('#block-galerieshomepage .width-text p').html(response.body);
                    $('#block-galerieshomepage .width-text a').attr("href", response.url);
                    applySlider();
                }
            });
        });
    });
})(window.jQuery, window.Drupal);
function applySlider() {
    jQuery('#slider-salon').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
        ]
    });
}
