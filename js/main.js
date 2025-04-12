/*
Author       : AB_Themes
Template Name: Edumate
Version      : 1.0
*/

(function ($) {
    "use strict";

    $(document).ready(function () {
        //>> Mobile Menu Js Start <<//
        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll < 400) {
                $(".ab-sticky-header").removeClass("ab-sticky-active");
            } else {
                $(".ab-sticky-header").addClass("ab-sticky-active");
            }
        });
		
		// Clone the main menu and append it to the hamburger menu
		var abHamburger = $(".ab-mobile-menu-active > ul").clone();
		var abHamburgerMenu = $(".ab-hamburger-menu nav");

		if (abHamburgerMenu.find("ul").length === 0) {
			abHamburgerMenu.append(abHamburger);
		}

		// Add toggle buttons for sub-menus if they don't exist
		$(".ab-hamburger-menu nav .sub-menu").parent().each(function () {
			if (!$(this).find(".ab-menu-close").length) {
				$(this).append('<button class="ab-menu-close"><i class="fas fa-chevron-right"></i></button>');
			}
		});

		// Toggle dropdown menu when clicking on submenu parent or button
		$(".ab-hamburger-menu").on("click", ".ab-menu-close, .menu-item-children > a", function (e) {
			e.preventDefault();
			var parent = $(this).parent();

			if (!parent.hasClass("active")) {
				parent.addClass("active");
				parent.children(".sub-menu").slideDown();
			} else {
				parent.removeClass("active");
				parent.children(".sub-menu").slideUp();
			}
		});

       function toggleMenu() {
			if ($(window).width() <= 991) {
				$(".ab-hamburger-toogle").show(); // Show hamburger toggle
				$(".ab-main-menu").hide(); // Hide main menu
			} else {
				$(".ab-hamburger-toogle").hide(); // Hide hamburger toggle
				$(".ab-main-menu").show(); // Show main menu
				$(".ab-hamburger").removeClass("ab-hamburger-open");
				$(".ab-hamburger-overlay").removeClass("ab-hamburger-overlay-open");
			}
		}


		// Open Hamburger Menu
		$(".ab-hamburger-toogle").on("click", function () {
			$(".ab-hamburger").addClass("ab-hamburger-open");
			$(".ab-hamburger-overlay").addClass("ab-hamburger-overlay-open");
		});

		// Close Hamburger Menu
		$(".ab-hamburger-close-toggle, .ab-hamburger-overlay").on("click", function () {
			$(".ab-hamburger").removeClass("ab-hamburger-open");
			$(".ab-hamburger-overlay").removeClass("ab-hamburger-overlay-open");
		});

        //>> Sticky Header Js Start <<//
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        // Video Popup
        if ($.fn.magnificPopup) {
            $('.video-popup').magnificPopup({
                type: 'iframe'
            });
        }

        /* Slider */
        if ($.fn.owlCarousel) {
            $("#course_slider").owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                margin: 30,
                stagePadding: 10, // Add padding to the stage
                responsive: {
                    0: {
                        items: 1 // 1 item for small screens
                    },
                    576: {
                        items: 2 // 2 items for tablets
                    },
                    768: {
                        items: 3 // 3 items for medium screens
                    },
                    992: {
                        items: 4 // 4 items for larger screens
                    }
                }
            });
        }


        // Price Range Sliders (Ensure elements exist before using them)
        if (document.getElementById("price-range-min") && document.getElementById("price-range-max")) {
            const minRange = document.getElementById("price-range-min");
            const maxRange = document.getElementById("price-range-max");
            const minPriceDisplay = document.getElementById("display-min-price");
            const maxPriceDisplay = document.getElementById("display-max-price");
            const minInput = document.getElementById("input-min-price");
            const maxInput = document.getElementById("input-max-price");

            function updatePriceDisplays() {
                let minValue = parseInt(minRange.value);
                let maxValue = parseInt(maxRange.value);

                if (minValue > maxValue - 5) {
                    minValue = maxValue - 5;
                    minRange.value = minValue;
                }

                minPriceDisplay.textContent = minValue;
                maxPriceDisplay.textContent = maxValue;
                minInput.value = minValue;
                maxInput.value = maxValue;
            }

            function updateSliders() {
                let minValue = parseInt(minInput.value);
                let maxValue = parseInt(maxInput.value);

                if (minValue > maxValue - 5) {
                    minValue = maxValue - 5;
                    minInput.value = minValue;
                }

                minRange.value = minValue;
                maxRange.value = maxValue;
                updatePriceDisplays();
            }

            minRange.addEventListener("input", updatePriceDisplays);
            maxRange.addEventListener("input", updatePriceDisplays);
            minInput.addEventListener("input", updateSliders);
            maxInput.addEventListener("input", updateSliders);
        }
    }); // Closed $(document).ready() properly ✅

    // Preloader (Ensuring the element exists before modifying it)
    window.addEventListener("load", function () {
        const preloader = document.querySelector(".preloader");
        if (preloader) {
            preloader.classList.add("fade-out");
            setTimeout(() => preloader.style.display = "none", 500);
        }
    });
	
	

})(jQuery);

