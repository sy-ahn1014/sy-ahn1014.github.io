$(function () {
    /*눈내리는 jquery*/
    $(document).snowfall(
        {image: "img/flake.png", minSize: 3, maxSize: 10, flakeCount: 200}
    );
    function castParallax() {

        var opThresh = 300;
        var opFactor = 300;

        window.addEventListener("scroll", function (event) {
            var top = this.pageYOffset;

            var layers = document.getElementsByClassName("parallax");
            var layer,
                speed,
                yPos;
            for (var i = 0; i < layers.length; i++) {
                layer = layers[i];
                speed = layer.getAttribute('data-speed');
                var yPos = -(top * speed / 50);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            }
        });
    }

        //section1 텍스트박스 스크롤 이벤트
    $(window).scroll(function () {
        $('.fade-box').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({
                'opacity': '1',
                'top': '0px'
            }, 1000);
        }
        });

        $('.text-box').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({
                'opacity': '1',
                'top': '-5%'
            }, 1000);
        }
        });

        $('.text-box2').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({
                'opacity': '1',
                'top': '-420px'
            }, 1000);
        }
        });

        $('.fade').each(function (i) {

        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
            $(this).animate({
                'opacity': '1',
                'top': '0px'
            }, 1000);
        }
        });

        
    }); 

    /*parallax script*/
    document.body.onload = castParallax();

    /*scroll line animation*/
    let path = document.querySelector("path");
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;
    window.addEventListener("scroll", () => {
        var scrollPercentage = (
            document.documentElement.scrollTop + document.body.scrollTop
        ) / (
            document.documentElement.scrollHeight - document.documentElement.clientHeight
        );

        // Length to offset the dashes
        var drawLength = pathLength * scrollPercentage;

        // Draw reverse
        path.style.strokeDashoffset = pathLength - drawLength;

        // Paralax
        const target = document.querySelectorAll(".scroll");

        var index = 2,
            lenght = target.length;
        for (index; index < lenght; index++) {
            var pos = window.pageYOffset * target[index].dataset.rate;

            if (target[index].dataset.direction === "vertical") {
                target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
            } else {
                var posX = window.pageYOffset * target[index].dataset.ratex;
                var posY = window.pageYOffset * target[index].dataset.ratey;

                target[index].style.transform = "translate3d(" + posX + "px, " + posY + "px, 0p" +
                        "x)";
            }
        }
    })



});