$(function () {

    $('.banner').revolution({
        delay: 5000,
        startheight: 800,
        startwidth: 1170,

        hideThumbs: 200,

        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 5,

        navigationType: "both",
        navigationArrows: "verticalcentered",
        navigationStyle: "round",

        touchenabled: "off",
        onHoverStop: "on",

        navOffsetHorizontal: 0,
        navOffsetVertical: 20,

        stopAtSlide: -1,
        stopAfterLoops: -1,

        shadow: 1,
        fullWidth: "off"
    });

    var niceScrollOpt = {
        touchbehavior: false,
        cursorcolor: "#b1b1b1",
        cursoropacitymax: 0.8,
        cursorwidth: 8,
        autohidemode: true,
        hidecursordelay: 1000,
        bouncescroll: false
    };

    $("body").localScroll({
        duration: 3e2,
        stop: false
    });

    setTimeout(function () {
        $("#loading-start").fadeOut(1000);
        $("html").niceScroll(niceScrollOpt);
    }, 1);

    $('.parallax').parallax("50%", 1);

    $("img.lazy").lazyload();

    $("#weixin,#weibo").hoverIntent({
        sensitivity: 1,
        interval: 30,
        timeout: 20,
        over: function () {
            $(this).next().animate({
                opacity: "show",
                top: 0
            });
            return false;
        },
        out: function () {
            $(this).next().animate({
                opacity: "hide",
                top: -20
            });
        }
    });

    (function () {
        var $backToTopEle = $('<div id="backtop" class="backtop"></div>').appendTo("body");

        $('#backtop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 400);
        });

        var showBtn = function () {
            var scrollTop = $(document).scrollTop();
            (scrollTop > 0) ? $backToTopEle.fadeIn(100) : $backToTopEle.fadeOut(100);
        };

        $(window).scroll(showBtn);

    })();
});