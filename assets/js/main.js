

(function (window, document, $, undefined) {
    'use strict';

    var eduJs = {
        i: function (e) {
            eduJs.d();
            eduJs.methods();
        },

        d: function (e) {
            this._window = $(window),
                this._document = $(document),
                this._body = $('body'),
                this._html = $('html'),
                this.sideNav = $('.rbt-search-dropdown')
        },
        methods: function (e) {
            eduJs.salActive();
            eduJs.menuCurrentLink();
            eduJs.eduSwiperActive();
            eduJs.eduBgCardHover();
            eduJs.magnigyPopup();
            eduJs.counterUp();
            eduJs.pricingPlan();
            eduJs.courseView();
            eduJs.stickyHeader();
            eduJs.masonryActivation();
            eduJs._clickDoc();
            eduJs.wowActivation();
            eduJs.radialProgress();
            eduJs.marqueImage();
            eduJs.popupMobileMenu();
            eduJs.headerSticky();
            eduJs.qtyBtn();
            eduJs.checkoutPage();
            eduJs.offCanvas();
            eduJs.onePageNav();
            eduJs.transparentHeader();
            eduJs.categoryMenuHover();
            eduJs.cartSidenav();
            eduJs.filterClickButton();
            eduJs.selectPicker();
            eduJs.headerTopActivation();
            eduJs.magnificPopupActivation();
            eduJs.showMoreBtn();
            eduJs.sidebarVideoHidden();
            eduJs.courseActionBottom();
            eduJs.topbarExpend();
            eduJs.categoryOffcanvas();
            eduJs.autoslidertab();
            eduJs.moveAnimation();
            eduJs.contactForm();
            eduJs.player();
            eduJs.quizAns();
            eduJs.lessonAccor();
            eduJs.unloadImage();
            eduJs.searchValue();
            eduJs.lessonToggle();
        },

        autoslidertab: function (params) {
            function tabChange() {
                var tabs = $('.nav-tabs.splash-nav-tabs > li');
                var active = tabs.find('a.active');
                var next = active.parent('li').next('li').find('a');
                if (next.length === 0) {
                    next = tabs.first().find('a').on('click');
                }
                next.tab('show');
            }
            var tabCycle = setInterval(tabChange, 5000);
        },

        offCanvas: function (params) {
            if ($('#rbt-offcanvas-activation').length) {
                $('#rbt-offcanvas-activation').on('click', function () {
                    $('.side-menu').addClass('side-menu-active'),
                        $('body').addClass('offcanvas-menu-active')
                }),

                    $('.close_side_menu').on('click', function () {
                        $('.side-menu').removeClass('side-menu-active'),
                            $('body').removeClass('offcanvas-menu-active')
                    }),

                    $('.side-menu .side-nav .navbar-nav li a').on('click', function () {
                        $('.side-menu').removeClass('side-menu-active'),
                            $('body').removeClass('offcanvas-menu-active')
                    }),

                    $('#btn_sideNavClose').on('click', function () {
                        $('.side-menu').removeClass('side-menu-active'),
                            $('body').removeClass('offcanvas-menu-active')
                    });
            }
        },

        cartSidenav: function (params) {
            if ($('.rbt-cart-sidenav-activation').length) {
                $('.rbt-cart-sidenav-activation').on('click', function () {
                    $('.rbt-cart-side-menu').addClass('side-menu-active'),
                        $('body').addClass('cart-sidenav-menu-active')
                }),

                    $('.minicart-close-button').on('click', function () {
                        $('.rbt-cart-side-menu').removeClass('side-menu-active'),
                            $('body').removeClass('cart-sidenav-menu-active')
                    }),

                    $('.side-menu .side-nav .navbar-nav li a').on('click', function () {
                        $('.rbt-cart-side-menu').removeClass('side-menu-active'),
                            $('body').removeClass('cart-sidenav-menu-active')
                    }),

                    $('#btn_sideNavClose, .close_side_menu').on('click', function () {
                        $('.rbt-cart-side-menu').removeClass('side-menu-active'),
                            $('body').removeClass('cart-sidenav-menu-active')
                    });
            }
        },


        menuCurrentLink: function () {
            var currentPage = location.pathname.split("/"),
                current = currentPage[currentPage.length - 1];
            $('.mainmenu li a, .dashboard-mainmenu li a, .for-right-content .rbt-course-main-content li a').each(function () {
                var $this = $(this);
                if ($this.attr('href') === current) {
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
        },


        salActive: function () {
            sal({
                threshold: 0.01,
                once: true,
            });
        },

        eduParalax: function () {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        },

        eduSwiperActive: function () {
            var swiper = new Swiper('.banner-swiper-active', {
                effect: 'cards',
                grabCursor: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.rbt-arrow-right',
                    prevEl: '.rbt-arrow-left',
                },
            });

            var swiper = new Swiper('.team-slide-activation', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper = new Swiper('.team-slide-activation-4', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },

                    1200: {
                        slidesPerView: 4,
                    },
                },
            });

            var swiper = new Swiper('.blog-post-gallery-activation', {
                slidesPerView: 1,
                autoHeight: true,
                loop: true,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                }
            });

            var swiper = new Swiper('.team-slide-activation-2', {
                slidesPerView: 3,
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper = new Swiper('.service-item-3-activation', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                navigation: {
                    nextEl: '.rbt-arrow-right',
                    prevEl: '.rbt-arrow-left ',
                    clickable: true,
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    481: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper = new Swiper('.viral-banner-activation', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
            });

            var swiperThumb = new Swiper('.rbtmySwiperThumb', {
                spaceBetween: 10,
                slidesPerView: 2,
                freeMode: true,
                watchSlidesProgress: true,
            });

            var swiper = new Swiper('.rbt-banner-activation', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                autoHeight: true,
                navigation: {
                    nextEl: '.rbt-arrow-right ',
                    prevEl: '.rbt-arrow-left',
                    clickable: true,
                },
                thumbs: {
                    swiper: swiperThumb,
                },
            });

            var swiper = new Swiper('.rbt-gif-banner-area', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
            });

            var swiper = new Swiper('.testimonial-item-3-activation', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    992: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper = new Swiper('.testimonial-activation-1', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
            });

            var swiper = new Swiper('.modern-course-carousel-activation', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
            });

            var swiper = new Swiper('.category-activation-one', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    }
                },
            });

            var swiper = new Swiper('.category-activation-two', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: false,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                    snapOnRelease: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    481: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },

                    1200: {
                        slidesPerView: 6,
                    },
                },
            });

            var swiper = new Swiper('.category-activation-three', {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                    snapOnRelease: true
                },
                breakpoints: {
                    480: {
                        slidesPerView: 1,
                    },
                    481: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });

            var swiper = new Swiper('.event-activation-1', {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: true,
                    snapOnRelease: true
                },
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                },
            });

            var swiper = new Swiper('.banner-splash-inner-layout-active', {
                effect: 'cards',
                grabCursor: true,
                clickable: true,
                loop: true,
                pagination: {
                    el: '.rbt-swiper-pagination',
                    clickable: true,
                    type: "fraction",
                },
                navigation: {
                    nextEl: '.rbt-arrow-left',
                    prevEl: '.rbt-arrow-right',
                    clickable: true,
                },
            });
        },

        eduBgCardHover: function () {
            $('.rbt-hover-active').mouseenter(function () {
                var self = this;
                setTimeout(function () {
                    $('.rbt-hover-active.active').removeClass('active');
                    $(self).addClass('active');
                }, 0);
            });
        },


        magnigyPopup: function () {
            $(document).on('ready', function () {
                $('.popup-video').magnificPopup({
                    type: 'iframe'
                });
            });
        },

        counterUp: function () {
            var odo = $('.odometer');
            odo.each(function () {
                $('.odometer').appear(function (e) {
                    var countNumber = $(this).attr('data-count');
                    $(this).html(countNumber);
                });
            });
        },


        pricingPlan: function () {
            var mainPlan = $('.rbt-pricing-area');
            mainPlan.each(function () {
                var yearlySelectBtn = $('.yearly-plan-btn'),
                    monthlySelectBtn = $('.monthly-plan-btn'),
                    monthlyPrice = $('.monthly-pricing'),
                    yearlyPrice = $('.yearly-pricing'),
                    buttonSlide = $('.pricing-checkbox');

                $(monthlySelectBtn).on('click', function () {
                    buttonSlide.prop('checked', true);
                    $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                    monthlyPrice.css('display', 'block');
                    yearlyPrice.css('display', 'none');
                });

                $(yearlySelectBtn).on('click', function () {
                    buttonSlide.prop('checked', false);
                    $(this).addClass('active').parent('.nav-item').siblings().children().removeClass('active');
                    monthlyPrice.css('display', 'none');
                    yearlyPrice.css('display', 'block');
                });

                $(buttonSlide).change(function () {
                    if ($('input[class="pricing-checkbox"]:checked').length > 0) {
                        monthlySelectBtn.addClass('active');
                        yearlySelectBtn.removeClass('active');
                        monthlyPrice.css('display', 'block');
                        yearlyPrice.css('display', 'none');
                    } else {
                        yearlySelectBtn.addClass('active');
                        monthlySelectBtn.removeClass('active');
                        monthlyPrice.css('display', 'none');
                        yearlyPrice.css('display', 'block');
                    }
                });
            });
        },

        courseView: function () {
            var gridViewBtn = $('.rbt-grid-view'),
                listViewBTn = $('.rbt-list-view');

            $(gridViewBtn).on('click', function () {
                $(this).addClass('active').parent('.course-switch-item').siblings().children().removeClass('active');
                $('.rbt-course-grid-column').addClass('active-grid-view');
                $('.rbt-course-grid-column').removeClass('active-list-view');
                $('.rbt-card').removeClass('card-list-2');
            })

            $(listViewBTn).on('click', function () {
                $(this).addClass('active').parent('.course-switch-item').siblings().children().removeClass('active');
                $('.rbt-course-grid-column').removeClass('active-grid-view');
                $('.rbt-course-grid-column').addClass('active-list-view');
                $('.rbt-card').addClass('card-list-2');
            })
        },


        stickyHeader: function () {
            // Header Transparent
            if ($('header').hasClass('header-transparent')) {
                $('body').addClass('active-header-transparent')
            } else {
                $('body').removeClass('active-header-transparent')
            }
        },

        masonryActivation: function name(params) {
            $(window).load(function () {
                $('.masonary-wrapper-activation').imagesLoaded(function () {
                    // filter items on button click
                    $('.messonry-button').on('click', 'button', function () {
                        var filterValue = $(this).attr('data-filter');
                        $(this).siblings('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $grid.isotope({
                            filter: filterValue
                        });
                    });
                    // init Isotope
                    var $grid = $('.mesonry-list').isotope({
                        percentPosition: true,
                        transitionDuration: '0.7s',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.resizer',
                        }
                    });
                });
            })

            $(window).load(function () {
                $('.splash-masonary-wrapper-activation').imagesLoaded(function () {
                    // filter items on button click
                    $('.messonry-button').on('click', 'button', function () {
                        var filterValue = $(this).attr('data-filter');
                        $(this).siblings('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                        $grid.isotope({
                            filter: filterValue
                        });
                    });
                    // init Isotope
                    var $grid = $('.splash-mesonry-list').isotope({
                        percentPosition: true,
                        transitionDuration: '0.7s',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: '.resizer',
                        }
                    });
                });
            })
        },


        _clickDoc: function () {
            var inputblur, inputFocus, openSideNav, closeSideNav;
            inputblur = function (e) {
                if (!$(this).val()) {
                    $(this).parent('.form-group').removeClass('focused');
                }
            };
            inputFocus = function (e) {
                $(this).parents('.form-group').addClass('focused');
            };
            openSideNav = function (e) {
                e.preventDefault();
                eduJs.sideNav.addClass('active');
                $('.search-trigger-active').addClass('open');
                eduJs._html.addClass('side-nav-opened');
            };

            closeSideNav = function (e) {
                if (!$('.rbt-search-dropdown, .rbt-search-dropdown *:not(".search-trigger-active, .search-trigger-active *")').is(e.target)) {
                    eduJs.sideNav.removeClass('active');
                    $('.search-trigger-active').removeClass('open');
                    eduJs._html.removeClass('side-nav-opened');
                }
            };
            eduJs._document
                .on('blur', 'input,textarea,select', inputblur)
                .on('focus', 'input:not([type="radio"]),input:not([type="checkbox"]),textarea,select', inputFocus)
                .on('click', '.search-trigger-active', openSideNav)
                .on('click', '.side-nav-opened', closeSideNav)
        },

        wowActivation: function () {
            new WOW().init();
        },

        radialProgress: function () {
            $(window).scroll(function () {
                /* Check the location of each desired element */
                $('.radial-progress').each(function (i) {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    /* If the object is completely visible in the window, fade it in */
                    if (bottom_of_window > bottom_of_object) {
                        $('.radial-progress').easyPieChart({
                            lineWidth: 10,
                            scaleLength: 0,
                            rotate: 0,
                            trackColor: false,
                            lineCap: 'round',
                            size: 180,
                            onStep: function (from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });
                    }
                });
            });
        },


        marqueImage: function () {
            $('.edumarque').each(function () {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function () {
                    t += i;
                    $this.css('background-position-x', -t + 'px');
                }, 10);
            });
        },


        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-button').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rbt-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rbt-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })

            $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rbt-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });
        },

        headerSticky: function () {
            $(window).on('scroll', function () {
                if ($('body').hasClass('rbt-header-sticky')) {
                    var stickyPlaceHolder = $('.rbt-sticky-placeholder'),
                        progressContainer = $('.progress-container'),
                        headerConainer = $('.rbt-header-wrapper'),
                        headerConainerH = headerConainer.outerHeight(),
                        topHeaderH = $('.rbt-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        headerConainer.addClass('rbt-sticky');
                        progressContainer.addClass('progress-bar-add');
                        stickyPlaceHolder.height(headerConainerH);
                    } else {
                        headerConainer.removeClass('rbt-sticky');
                        progressContainer.removeClass('progress-bar-add');

                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

        qtyBtn: function () {
            $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
            $('.pro-qty').append('<span class="inc qtybtn">+</span>');
            $('.qtybtn').on('click', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        },

        checkoutPage: function () {
            $('[data-shipping]').on('click', function () {
                if ($('[data-shipping]:checked').length > 0) {
                    $('#shipping-form').slideDown();
                } else {
                    $('#shipping-form').slideUp();
                }
            })
            $('[name="payment-method"]').on('click', function () {
                var $value = $(this).attr('value');
                $('.single-method p').slideUp();
                $('[data-method="' + $value + '"]').slideDown();
            })
        },

        onePageNav: function () {
            $('.onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: '',
                easing: 'swing',
            });
        },

        transparentHeader: function () {
            if ($('.rbt-header').hasClass('rbt-transparent-header')) {
                var mainHeader = $('.rbt-header').outerHeight();
                $('body').addClass('rbt-header-transpernt-active');
                $('.header-transperent-spacer').css('padding-top', mainHeader + 'px');
            }
        },

        categoryMenuHover: function () {
            $('.vertical-nav-menu li.vertical-nav-item').mouseover(function () {
                $('.rbt-vertical-inner').hide();
                $('.vertical-nav-menu li.vertical-nav-item').removeClass('active');
                $(this).addClass('active');
                var selected_tab = $(this).find('a').attr("href");
                $(selected_tab).stop().fadeIn();
                return false;
            });
        },

        selectPicker: function () {
            $('select').selectpicker();
        },

        filterClickButton: function () {
            $('.discover-filter-activation').on('click', function () {
                $(this).toggleClass('open');
                $('.default-exp-expand').slideToggle('400');
            })
            $('#slider-range').slider({
                range: true,
                min: 10,
                max: 500,
                values: [100, 300],
                slide: function (event, ui) {
                    $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
                }
            });
            $('#amount').val('$' + $('#slider-range').slider('values', 0) +
                " - $" + $('#slider-range').slider('values', 1));
        },


        headerTopActivation: function () {
            $('.bgsection-activation').on('click', function () {
                $(this).parents('.rbt-header-campaign').addClass('deactive')
            })
        },

        magnificPopupActivation: function () {
            $('.parent-gallery-container').magnificPopup({
                delegate: '.child-gallery-single', // child items selector, by clicking on it popup will open
                type: 'image',
                mainClass: 'mfp-with-zoom',
                // other options
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it
                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function
                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        },

        showMoreBtn: function () {
            $.fn.hasShowMore = function () {
                return this.each(function () {
                    $(this).toggleClass('active');
                    $(this).text('Daha az göster');
                    $(this).parent('.has-show-more').toggleClass('active');
                    if ($(this).parent('.has-show-more').hasClass('active')) {
                        $(this).text('Daha az göster');
                    } else {
                        $(this).text('Daha fazla göster');
                    }
                });
            };
            $(document).on('click', '.rbt-show-more-btn', function () {
                $(this).hasShowMore();
            });
        },

        sidebarVideoHidden: function () {
            var scrollTop = $('.sidebar-video-hidden');
            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 250) {
                    $(scrollTop).css('display', 'none');
                } else {
                    $(scrollTop).css('display', 'block');
                }
            });
        },

        courseActionBottom: function () {
            var scrollBottom = $('.rbt-course-action-bottom');
            $(window).scroll(function () {
                var topPos = $(this).scrollTop();
                var targetPossition = $(document).height() * 0.66;
                var filled = (($(document).scrollTop() + window.innerHeight) / $(document).height());
                if (topPos > targetPossition && filled != 1) {
                    $(scrollBottom).addClass('rbt-course-action-active');
                } else {
                    $(scrollBottom).removeClass('rbt-course-action-active')
                }
            });
        },

        topbarExpend: function () {
            var windowWidth = $(window).width(); {
                if (windowWidth < 1199) {
                    $('.top-bar-expended').on('click', function () {
                        $('.top-expended-activation').hasClass('active') ? ($('.top-expended-activation').removeClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({ height: '32px' })) : ($('.top-expended-activation').addClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({ height: ($('.top-expended-inner')).outerHeight() + 'px' }))
                    })
                    $(window).on('hresize', function () {
                        $('.top-expended-activation').hasClass('active') && $('.top-expended-activation').find('.top-expended-inner').css({
                            height: ($('.top-expended-inner')).outerHeight() + 'px'
                        })
                    })
                }
            }
        },

        categoryOffcanvas: function () {
            var windowWidth = $(window).width();
            if (windowWidth < 1200) {
                $('.rbt-side-offcanvas-activation').on('click', function () {
                    $('.rbt-offcanvas-side-menu').addClass('active-offcanvas')
                })
                $('.rbt-close-offcanvas').on('click', function () {
                    $('.rbt-offcanvas-side-menu').removeClass('active-offcanvas')
                })
                $('.rbt-offcanvas-side-menu').on('click', function (e) {
                    e.target === this && $('.rbt-offcanvas-side-menu').removeClass('active-offcanvas');
                });
                $('.rbt-vertical-nav-list-wrapper .vertical-nav-item a').on('click', function (e) {
                    e.preventDefault();
                    $(this).siblings('.vartical-nav-content-menu-wrapper').toggleClass('active').slideToggle('400');
                    $(this).toggleClass('active')
                })
            }
        },

        moveAnimation: function () {
            $('.scene').each(function () {
                new Parallax($(this)[0]);
            });
        },

        contactForm: function () {
            $('.rainbow-dynamic-form').on('submit', function (e) {
                e.preventDefault();
                var _self = $(this);
                var __selector = _self.closest('input,textarea');
                _self.closest('div').find('input,textarea').removeAttr('style');
                _self.find('.error-msg').remove();
                _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
                var data = $(this).serialize();
                $.ajax({
                    url: 'mail.php',
                    type: "post",
                    dataType: 'json',
                    data: data,
                    success: function (data) {
                        _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                        if (data.code == false) {
                            _self.closest('div').find('[name="' + data.field + '"]');
                            _self.find('.rainbow-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
                        } else {
                            $('.error-msg').hide();
                            $('.form-group').removeClass('focused');
                            _self.find('.rainbow-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
                            _self.closest('div').find('input,textarea').val('');

                            setTimeout(function () {
                                $('.success-msg').fadeOut('slow');
                            }, 5000);
                        }
                    }
                });
            });
        },

        player: function () {
            var player = new Plyr('.rbtplayer', {
                muted: false,
                volume: 1,
                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
            });
        },


        quizAns: function () {
            var currentQuestion = 1;
            showQuestion(currentQuestion);

            $('#next-btn').click(function () {
                if (currentQuestion < $('.question').length) {
                    currentQuestion++;
                    showQuestion(currentQuestion);
                }
            });

            $('#prev-btn').click(function () {
                if (currentQuestion > 1) {
                    currentQuestion--;
                    showQuestion(currentQuestion);
                }
            });

            function showQuestion(questionNumber) {
                $('.question').hide();
                $('#question-' + questionNumber).show();

                if (questionNumber == 1) {
                    $('#prev-btn').prop('disabled', true);
                } else {
                    $('#prev-btn').prop('disabled', false);
                }

                if (questionNumber == $('.question').length) {
                    $('#next-btn').hide();
                    $("#submit-btn").show();
                } else {
                    $('#next-btn').show();
                    $('#submit-btn').hide();
                }
            }
            $('#quiz-form').submit(function (event) {
                event.preventDefault();

                // Here, you can add your logic to grade the quiz and show the results to the user
                //   alert("Quiz submitted!");
            });
        },

        lessonAccor: function () {
            // Get saved data from sessionStorage
            let selectedCollapse = sessionStorage.getItem('selectedCollapse');
            if (selectedCollapse != null) {
                $('.accordion .collapse').removeClass('show');
                $('.accordion-button').addClass('collapsed').attr('aria-expanded', false);
                $(selectedCollapse).addClass('show');
                $(selectedCollapse).siblings().find('button').removeClass('collapsed').attr('aria-expanded', true);
            }
            // To set, which one will be opened
            $('.accordion .accordion-button').on("click", function () {
                let target = $(this).data('bs-target');
                // Save data to sessionStorage
                sessionStorage.setItem('selectedCollapse', target);
            });
        },


        unloadImage: function name() {
            $('#createfileImage').click(function (e) {
                $('#createinputfile').click();
            });
            function rbtPreview() {
                const [file2] = createinputfile.files
                if (file2) {
                    createfileImage.src = URL.createObjectURL(file2)
                }
            }
            $('#createinputfile').change(function () {
                rbtPreview(this);
            });
        },

        searchValue: function () {
            $(document).on('keyup', '.rbt-search-active', function () {
                var value = $(this).val().toLowerCase();
                $('.rbt-search-activation .accordion .accordion-item').filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
            });
        },

        lessonToggle: function () {
            $('.lesson-toggle-active').on('click', function () {
                $(this).toggleClass('sidebar-hide')
                $('.rbt-lesson-leftsidebar').toggleClass('sibebar-none');
            })
        }

    }
    eduJs.i();


})(window, document, jQuery);



let scroll_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.nasil_wrapper',
        start: "top top",
        // pin: true,
        scrub: true,
        end: "+=300",
        // markers: true,
    }
}),
    facts = [...document.querySelectorAll('.columns_n')]
scroll_tl.to('.nasil_races', {
    scale: 1,
    duration: 0.2,
    ease: "Power4.easeOut"
}

)

scroll_tl.to(facts, {
    xPercent: -85 * (facts.length - 1),
    scrollTrigger: {
        trigger: ".nasil_races",
        start: "center center",
        pin: true,
        // horizontal: true,
        // pinSpacing:false,
        // markers: true,
        scrub: 1,
        snap: 1 / (facts.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        end: () => `+=4320`
    }
});

// 9.08 off canvas


document.addEventListener("DOMContentLoaded", function () {
    // Get the close button
    var closeButton = document.querySelector('.rbt-close-offcanvas');

    // Add click event listener to the close button
    closeButton.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent default action of the button (in case it's inside a form or has some other default action)

        // Get the off-canvas menu
        var offCanvasMenu = document.querySelector('.rbt-offcanvas-side-menu');

        // Remove the 'active-offcanvas' class to hide the menu
        offCanvasMenu.classList.remove('active-offcanvas');
    });
});

//scroll to link
document.addEventListener("DOMContentLoaded", function () {
    // Check if there's a hash in the URL
    if (window.location.hash) {
        // Remove the hash from the ID because querySelector uses CSS syntax
        var id = window.location.hash.substr(1);

        // Find the element
        var element = document.getElementById(id);

        // If the element exists, scroll to it smoothly
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
});

document.getElementById("readMoreBtn").addEventListener("click", function () {
    var listItems = document.querySelectorAll(".rbt-vertical-nav-list-wrapper.vertical-nav-menu li");

    // Toggle between showing/hiding list items beyond the first 6
    for (var i = 13; i < listItems.length; i++) {
        if (listItems[i].style.display === "none" || listItems[i].style.display === "") {
            listItems[i].style.display = "list-item";
        } else {
            listItems[i].style.display = "none";
        }
    }

    // Toggle button text between "Read More" and "Read Less"
    this.textContent = this.textContent === "Daha az göster" ? "Daha çok göster" : "Daha az göster";
});
//smooth



requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);

const windowHeight = window.innerHeight;

// Get the element to animate
const heroAnimate = document.querySelector('.hero_animate');

// Animate to full window height
gsap.to(heroAnimate, { duration: 1, height: `${windowHeight}px` });

// Wait 4 seconds and then animate back to 700px
setTimeout(() => {
    gsap.to(heroAnimate, { duration: 1, height: '750px' });
}, 4000);


document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');
    const targetContent = document.getElementById('targetContent');
    const body = document.querySelector('body');
    const formURL = "https://example.com/form"; // Replace with your form URL
    let isPopupShown = false;

    // Function to show popup
    function showPopup() {
        popupOverlay.style.display = "flex";
        body.classList.add('no-scroll'); // Prevent scrolling
        isPopupShown = true;
    }

    // Close the popup overlay and enable scrolling when the close button is clicked
    popupClose.addEventListener('click', function () {
        popupOverlay.style.display = "none";
        body.classList.remove('no-scroll'); // Allow scrolling
    });



    // Listen to scroll event
    window.addEventListener('scroll', function () {
        const targetPosition = targetContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show popup when the top of the target content reaches the middle of the window
        if (targetPosition < windowHeight / 2 && !isPopupShown) {
            showPopup();
        }
    });
});


const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".lightCyan-slider", {
    x: "-10%",
    duration: 1,
});

tl.to(
    ".persianGreen-slider",
    {
        x: "-20%",
        duration: 1.5,
    },
    "-=1"
);

tl.to(
    ".white-slider",
    {
        x: "-30%",
        duration: 1,
    },
    "-=1"
);

tl.to(".hide1", {
    x: "0%",
    duration: 1,
    opacity: 1,
});

tl.to(".preloader", {
    opacity: 0,
    duration: 0.4,

});
tl.to(".preloader", {
    x: '200%',
    duration: 0,

});
tl.fromTo(
    ".hero-content",
    {
        opacity: 0,
        y: -20,
    },
    {
        opacity: 1,
        duration: 1,
        y: 0,
    },
    "-=1.5"
);

$(function () {
    var tickerLength = $('.carousel-inner-data ul li').length;
    var tickerHeight = $('.carousel-inner-data ul li').outerHeight();
    $('.carousel-inner-data ul li:last-child').prependTo('.carousel-inner-data ul');
    $('.carousel-inner-data ul').css('marginTop', -tickerHeight);

    function moveTop() {
        $('.carousel-inner-data ul').animate({
            top: -tickerHeight
        }, 600, function () {
            $('.carousel-inner-data ul li:first-child').appendTo('.carousel-inner-data ul');
            $('.carousel-inner-data ul').css('top', '');
        });

    }
    setInterval(function () {
        moveTop();
    }, 3000);
});


$('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 4000);
    }

    $('.next_btn').on('click', function () {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    $('.previous_btn').on('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });

    $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('tab-link')[0].click();
});

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//Spline delete
window.onload = function () {
    var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
    shadowRoot.querySelector('#logo').remove();
}

document.addEventListener("DOMContentLoaded", function () {
    // This will run when the document is fully loaded
    var allModals = document.querySelectorAll('.show-modal');

    allModals.forEach((modal) => {
        modal.classList.add('hide-modal');
        modal.classList.remove('show-modal');
        modal.style.display = 'none'; // Initially set to none
    });
});

function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'block'; // Make sure it's visible
    modal.classList.add('show-modal');
    modal.classList.remove('hide-modal');
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add('hide-modal');
    modal.classList.remove('show-modal');
    setTimeout(() => modal.style.display = 'none', 500); // Hide after animation
}
function raf() {
    requestAnimationFrame(raf)
}

document.addEventListener('DOMContentLoaded', function () {
    // Getting the close button and the card
    const closeButton = document.querySelector('.close-card-info');
    const cardInfo = document.querySelector('.card-info.bounce-slide');

    // Adding click event to the close button
    closeButton.addEventListener('click', function () {
        cardInfo.style.display = 'none';
    });
});



function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

$(document).on("click", "#whatsapp-popup", function () {

    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
    setTimeout(function () {
        $('.loading-animation').hide();
        $('.whatsapp-message-wrapper').css("display", "flex").hide().fadeIn("slow");
    }, 8000)
});

$(document).on("click", ".close_whatsapp", function () {
    $("#whatsapp-chat")
    $(".whatsapp-wrapper").toggleClass("hide-whatsapp show-whatsapp");
});


$('.whatsapp-wrapper').delay(8000).queue(function () {
    $(this).addClass("show-whatsapp");
    $(this).removeClass("hide-whatsapp");
});
$('.whatsapp-message-wrapper').delay(6000).queue(function () {
    $(this).addClass("di");
    $(this).removeClass("loading-animation");
});
$('.loading-animation').delay(6000).queue(function () {
    $(this).addClass("dinone");
});

function myFunction() {
    var element = document.getElementById("bookmark");
    element.classList.toggle("active_icon");
}

//pup up for map
$(".selected_text").hover(function () {
    var popupText = $(this).data("popup-text");

    var position = $(this).offset();
    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    $("#popup_map p").text(popupText);

    $("#popup_map").css({
        display: "block",
        top: position.top + height + 10, // Adjust the vertical position as needed
        left: position.left,
    });
}, function () {
    // Hide the popup when the mouse leaves the element
    $("#popup_map").css("display", "none");
});

window.onscroll = function () { updateProgressBar() };

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'tr', includedLanguages: 'ar,en,tr,fr,de,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}
// Get references to the elements
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();



// Get references to the input field and the suggestion container.
const input = document.getElementById('serachInput');
const suggestionContainer = document.getElementById('suggestions');

// Your array of suggestions with corresponding links (replace with your own).
const suggestions = [
    { text: 'Mesleki Yeterlilik', link: 'wishlist.html' },
    { text: 'Turizm ve Otelcilik Kursları', link: 'wishlist.html' },
    { text: 'Güzellik ve Bakım Kursu', link: 'wishlist.html' },
    { text: 'Mutfak Sanatları', link: 'wishlist.html' },
    { text: 'KPSS Kursu', link: 'wishlist.html' },
    { text: 'ALES - DGS Kursu', link: 'wishlist.html' },
    { text: 'Açıköğretim Kursu', link: 'wishlist.html' },
    { text: 'SPK - SMMM Kursu', link: 'wishlist.html' },
    { text: 'HAKKIMIZDA ', link: 'wishlist.html' },
    { text: 'Bayilik', link: 'wishlist.html' },
    { text: 'Sivan Merkezi', link: 'wishlist.html' },
    { text: 'iletişim', link: 'wishlist.html' },
    { text: 'Kurslar', link: 'wishlist.html' },
    { text: 'Blog', link: 'wishlist.html' },
    { text: 'MYK', link: 'wishlist.html' },
    { text: 'istek listesi', link: 'wishlist.html' },
];

// Hide the suggestion container initially.
suggestionContainer.style.display = 'none';

// Add an event listener to the input field to listen for input changes.
input.addEventListener('input', function () {
    // Clear previous suggestions.
    suggestionContainer.innerHTML = '';

    // Get the current input value.
    const inputValue = input.value.toLowerCase();

    // Filter and display suggestions that match the input.
    const matchingSuggestions = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(inputValue)
    );

    // Display suggestion container if there are matching suggestions.
    if (matchingSuggestions.length > 0) {
        suggestionContainer.style.display = 'block';
    } else {
        suggestionContainer.style.display = 'none';
    }

    // Create and display suggestion links.
    matchingSuggestions.forEach(suggestion => {
        const suggestionLink = document.createElement('a');
        suggestionLink.textContent = suggestion.text;
        suggestionLink.href = suggestion.link;
        suggestionContainer.appendChild(suggestionLink);
    });
});
