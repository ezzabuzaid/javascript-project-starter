$(document).ready(function () {
    "use strict";
    var galleryHoverImg = $(".gallery .sub > div");
    galleryHoverImg.hover(function () {
        $(this).find(".first").animate({
            bottom: 40 + "%"
        }, 500)
    }, function () {
        $(this).find(".first").animate({
            bottom: 0
        }, 500)
    });
    galleryHoverImg.hover(function () {
        $(this).find(".last").animate({
            top: 40 + "%"
        }, 500)
    }, function () {
        $(this).find(".last").animate({
            top: 0
        }, 500)
    });
    var headerButton = $("header aside button");
    $(".data-nav").on("click", function () {
        $("html,body").animate({
            scrollTop: $($(this).data("nav")).offset().top
        }, 1e3)
    });

    function menu() {
        var headerAside = $("header aside"),
            headerSpan = headerButton.find("span");
        headerButton.toggleClass("toggle-button-nav");
        headerSpan.toggleClass("toggle-span");
        headerAside.toggleClass("toggle-nav")
    }
    $("header aside ul li").on("click", function () {
        menu();
        $("html,body").animate({
            scrollTop: $($(this).data("nav")).offset().top
        }, 1e3)
    });
    headerButton.on("click", menu);
    var headerArrowUp = $("header .up"),
        headerArrowDown = $("header .down");
    headerArrowDown.on("click", function () {
        $("html,body").animate({
            scrollTop: $($(this).data("nav")).offset().top
        }, 1e3)
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1500) {
            headerArrowUp.show(500)
        } else {
            headerArrowUp.hide()
        }
    });
    headerArrowUp.on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1e3)
    });
    var specialImage = $(".special .image-dot img"),
        activeSpecial = "active-special";
    specialImage.on("click", function () {
        $(this).addClass(activeSpecial).siblings().removeClass(activeSpecial);
        $(".special #specialFood").attr("src", $(".special .image-dot img.active-special").attr("src"))
    });
    var l = 0,
        time = 2500;

    function changeImage() {
        if (l < specialImage.length) {
            l = l + 1
        } else {
            l = 1
        }
        $(".special #specialFood").attr("src", "images/dish-" + l + ".jpg");
        setTimeout(changeImage, time);
        console.log(l)
    }
    $(window).on("load", changeImage());
    $(".button-main").on("click", function () {
        $(this).addClass("active-menu").siblings().removeClass("active-menu");
        var valueMain = $(this).attr("data-filter");
        $(".filter-main").not("." + valueMain).hide(300);
        $(".filter-main").filter("." + valueMain).show(500)
    });
    $(".button").on("click", function () {
        $(this).addClass("active-menu").siblings().removeClass("active-menu");
        var value = $(this).attr("data-filter");
        if (value === "all") {
            $(".filter").slideDown(500);
            $(".menu .sub").removeClass("col-2").addClass("col-4")
        } else {
            $(".filter").not("." + value).hide(300);
            $(".filter").filter("." + value).show(500);
            $(".menu .sub").removeClass("col-4").addClass("col-2")
        }
    });
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 50,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3e3,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1e3: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    })
});

function getPage(page, i) {
    "use strict";
    var request = new XMLHttpRequest;
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(i).innerHTML = this.responseText
        }
    };
    request.open("GET", page, true);
    request.send()
}