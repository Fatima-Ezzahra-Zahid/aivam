jQuery(function ($) {
    $(window).scroll(function () {
        $("header").addClass("active");
    });
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() == 0) {
            $("header").removeClass("active");
        }
    });
    "use strict";
    var f = {
        Slider: function () {
            $('#slide-top').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                autoplay: true,
                infinite: false,
                speed: 300,
            });
            $('#slider-actu').slick({
                dots: true,
                infinite: false,
                vertical: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                verticalSwiping: true,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            verticalSwiping: false,
                            vertical: false,
                        }
                    },
                ]
            });
            $('#slider-marque').slick({
                dots: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0px',
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
            $('#slider-salon').slick({
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
            $('#slider-gallery').slick({
                dots: false,
                slidesToShow: 9,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                centerMode: true,
                centerPadding: '0px',
                speed: 300,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            centerPadding: '100px',
                        }
                    },
                ]
            });
            $('#sous-timeline').slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                ]
            });
            /******slider-vertical*******/
            $('#slider-vertical').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '#slider-date',
                swipeToSlide: true,
                vertical: true,
                verticalSwiping: true,

            });
            $('#slider-date').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '#slider-vertical',
                dots: false,
                focusOnSelect: true,
                swipeToSlide: true,
                vertical: true,
                verticalSwiping: true,
                centerMode: true,
                centerPadding: '60px',
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            vertical: false,
                            slidesToShow: 3,
                            dots: false,
                            arrows: false,
                            centerPadding: '0',
                        }
                    },
                ]

            });

            $('.sous-date').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                vertical: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 640,
                        settings: {
                            vertical: false,
                        }
                    },
                ]


            });


            $('.under-slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                vertical: true,
                infinite: false


            });
            /******slider-horizontal*********/
            $('#horizaontal-date').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '#timeline',
                dots: false,
                infinite: false,
                focusOnSelect: true,
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            vertical: false,
                            slidesToShow: 3,
                            dots: false,
                            arrows: false,
                            centerPadding: '0',
                        }
                    },
                ]

            });
            $('#timeline').slick({
                slidesToShow: 1,
                arrows: false,
                asNavFor: '#horizaontal-date',
                // draggable:false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            centerMode: true,
                            centerPadding: '20px',
                        }
                    },
                ]
            });
            /*****sous slider***********/
            $('.sous-slide').slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                // draggable:false,
            });
            $('#slider-precedent').slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '20px',
                        }
                    },
                ]
            });
            $('#slider-progresse1').slick({
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 641,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                ]
            });
if($(".progress-bar").length>=1){
    $(".progress-bar").loading();
}


            $('#pills-cablage-tab').click(function () {
                setTimeout(function () {
                    $(".progress-bar").loading();
                    $('#slider-progresse1').not('.slick-initialized').slick({
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 641,
                                settings: {
                                    slidesToShow: 1
                                }
                            },
                        ]
                    });
                }, 150);

            });
            if (screen.width <= 641) {
                console.log("zze");
                $('#pills-organigramme-tab').click(function () {
                    setTimeout(function () {
                        $('.befor-shema').not('.slick-initialized').slick({
                            // $('.befor-shema').slick({
                            dots: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            infinite: false,
                            centerMode: true,
                            centerPadding: '80px',
                        });
                    }, 150);
                });
            }

            $('#pills-batterie-tab').click(function () {
                setTimeout(function () {
                    $(".progress-bar").loading();
                    $('#slider-progresse2').not('.slick-initialized').slick({
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 641,
                                settings: {
                                    slidesToShow: 1
                                }
                            },
                        ]
                    });
                }, 150);

            });
            $('#pills-interieur-tab').click(function () {
                setTimeout(function () {
                    $(".progress-bar").loading();

                    $('#slider-progresse3').not('.slick-initialized').slick({
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 641,
                                settings: {
                                    slidesToShow: 1
                                }
                            },
                        ]
                    });
                }, 150);

            });
            $('#pills-emboutissage-tab').click(function () {
                setTimeout(function () {
                    $(".progress-bar").loading();
                    $('#slider-progresse4').not('.slick-initialized').slick({
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        responsive: [
                            {
                                breakpoint: 641,
                                settings: {
                                    slidesToShow: 1
                                }
                            },
                        ]
                    });
                }, 150);

            });
            $('#pills-chiffres-tab').click(function () {

                setTimeout(function () {
                    $('#slider-countdown').not('.slick-initialized').slick({
                        dots: false,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        autoplay: true,
                        responsive: [
                            {
                                breakpoint: 641,
                                settings: {
                                    slidesToShow: 1,
                                    centerPadding: '20px',
                                }
                            },
                        ]
                    });
                }, 150);


            });
        },


        boxActualiteMarge: function (nextSlide) {
            $('#slider-countdown .slick-slide').removeClass('marge-top');
            $('#slider-countdown .slick-slide[data-slick-index="' + (nextSlide - 1) + '"]').addClass('marge-top');
            $('#slider-countdown .slick-slide[data-slick-index="' + (nextSlide + 1) + '"]').addClass('marge-top');
        },


    }
    window.onload = function () {
    };


    $('#slider-countdown').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        f.boxActualiteMarge(nextSlide);
    });

    $(document).ready(function () {
        f.Slider();
        f.boxActualiteMarge(0);



        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $('.card-search button').click(function () {
            $(".card-search").slideUp();

        });
        $('.btn-serach-mobile').click(function () {
            $(".nav-menu>ul").slideToggle();
        });
        $('.btn-serach').click(function () {
            $(".card-search").slideDown();

        });
        $('#slider-marque .slick-center').prev().addClass('small');
        $('#slider-marque .slick-center').prev().prev().addClass('extra-small');
        $('#slider-marque .slick-center').next().addClass('small');
        $('#slider-marque .slick-center').next().next().addClass('extra-small');
        $('#slider-marque').on('afterChange', function (event, slick, currentSlide) {
            $('.slick-slide').removeClass('small');
            $('.slick-slide').removeClass('extra-small');
            $('.slick-center').prev().addClass('small');
            $('.slick-center').prev().prev().addClass('extra-small');
            $('.slick-center').next().addClass('small');
            $('.slick-center').next().next().addClass('extra-small');
        });

        if ($(window).width() <= 641) {
            $('.nav-menu li').click(function (e) {
                $('.sous-nav').slideUp();
                $('.nav-menu li').removeClass('active');
                if ($(this).find(".sous-nav").css('display') == 'none') {
                    $(this).find(".sous-nav").slideDown();
                    $(this).addClass("active");
                }
            })
        }

    });
    jQuery('.drop-down').append('<div class="button"></div>');
    jQuery('.drop-down').append('<ul class="select-list"></ul>');
    jQuery('.drop-down select option').each(function () {
        var bg = jQuery(this).css('background-image');
        jQuery('.select-list').append('<li class="clsAnchor"><span value="' + jQuery(this).val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' + bg + '>' + jQuery(this).text() + '</span></li>');
    });
    jQuery('.drop-down .button').html('<span style=background-image:' + jQuery('.drop-down select').find(':selected').css('background-image') + '>' + jQuery('.drop-down select').find(':selected').text() + '</span>' + '<a href="javascript:void(0);" class="select-list-link">Arrow</a>');
    jQuery('.drop-down ul li').each(function () {
        if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected').text()) {
            jQuery(this).addClass('active');
        }
    });
    jQuery('.drop-down .select-list span').on('click', function () {
        var dd_text = jQuery(this).text();
        var dd_img = jQuery(this).css('background-image');
        var dd_val = jQuery(this).attr('value');
        jQuery('.drop-down .button').html('<span style=background-image:' + dd_img + '>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link">Arrow</a>');
        jQuery('.drop-down .select-list span').parent().removeClass('active');
        jQuery(this).parent().addClass('active');
        $('.drop-down select[name=options]').val(dd_val);
        $('.drop-down .select-list li').slideUp();
    });
    jQuery('.drop-down .button').on('click', 'a.select-list-link', function () {
        jQuery('.drop-down ul li').slideToggle();
    });
    /********fancybox**********/
    if (typeof $.fn.fancybox !== 'undefined') {
        $(".gallery a").attr("data-fancybox", "mygallery");
        $(".gallery a").each(function () {
            $(this).attr("data-caption", $(this).find("img").attr("alt"));
            $(this).attr("title", $(this).find("img").attr("alt"));
        });
        $(".gallery a").fancybox();

        $(window).scroll(function () {
            var scrollPos = $(window).scrollTop();
            var gallery = $("#gallery").offset().top;
            if (scrollPos >= gallery) {
                $("#gallery .more").show();
            }
        });
    }

    $('#lot-slider .item-lot:not(.video)').click(function () {
        var r = $(this).css('background-image');
        $("#one-slider figure").css('background-image', r);

    });
    $('#lot-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.play-video').click(function () {
        var id = $(this).data('id');
        $('.galerie .video iframe').attr('src', "https://www.youtube.com/embed/" + id + "?&showinfo=0")
    });
    $('.galerie .close').click(function () {
        $('.video iframe').attr('src', "")
    });
    $("body").click(function () {

        if($('#block-aivam-content .modal').css('display') === 'block'){
         $('.video iframe').attr('src', "");
        }
    });


});



