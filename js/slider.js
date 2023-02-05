$(document).ready(function () {
    let slider = $(".slider");
    let slides = slider.children();
    let indicator = $(".indicator");

    let index = 0;
    let timer = setInterval(autoPlay, 4000);

    function autoPlay() {
        nextSlide();
        updateCircleIndicator();
    }

    function nextSlide() {
        if (index == slides.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        changeSlideRight(index);
    }

    function changeSlideRight(index) {
        slides.attr('class', 'item');
        if (index == 0) {
            slider.find("[data-slide='" + (parseInt(slides.length) - 1) + "']").addClass("next-right");
            slider.find("[data-slide='0']").addClass("active-right");
        } else {
            slider.find("[data-slide='" + (parseInt(index) - 1) + "']").addClass("next-right");
            slider.find("[data-slide='" + index + "']").addClass("active-right");
        }
    }

    function changeSlideLeft(index) {
        slides.attr('class', 'item');
        if (index == 0) {
            slider.find("[data-slide='1']").addClass("next-left");
            slider.find("[data-slide='0']").addClass("active-left");
        } else {
            slider.find("[data-slide='" + (parseInt(index) + 1) + "']").addClass("next-left");
            slider.find("[data-slide='" + index + "']").addClass("active-left");
        }
    }

    circleIndicator();

    function circleIndicator() {
        for (let i = 0; i < slides.length; i++) {
            const div = $('<div></div>')
                .attr({ data: i })
                .addClass('indicatorChild');
            indicator.append(div);
            if (i == 0) {
                div.addClass('active');
            }
        }
    }

    $('.indicatorChild').click(function (e) {
        if (!$(this).hasClass('active')) {
            if(index == (parseInt(slides.length) - 1) && $(this).attr('data') == 0) {
                slides.attr('class', 'item');
                index = 0;
                slider.find("[data-slide='" + (parseInt(slides.length) - 1) + "']").addClass("next-right");
                slider.find("[data-slide='0']").addClass("active-right");
            } else if($(this).attr('data') == (parseInt(slides.length) - 1) && index == 0) {
                slides.attr('class', 'item');
                index = $(this).attr('data');
                slider.find("[data-slide='0']").addClass("next-left");
                slider.find("[data-slide='"+ (parseInt(slides.length) - 1) +"']").addClass("active-left");
            } else if (index < $(this).attr('data')) {
                index = $(this).attr('data');
                changeSlideRight(index);
            } else {
                index = $(this).attr('data');
                changeSlideLeft(index);
            }
            updateCircleIndicator();
            resetTimer();
        }
    });

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(autoPlay, 4000);
    }

    function updateCircleIndicator() {
        indicator.children().removeClass('active')
        indicator.find("[data='" + index + "']").addClass("active");
    }

    $('.container-slider').hover(
        function () {
            clearInterval(timer)
        },
        function () {
            resetTimer()
        }
      );

});