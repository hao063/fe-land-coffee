$(document).ready(function () {

    let slider = $(".section-evaluate-product .container-show-in-img");
    let itemClickShow = $('.item-click-show-comment');
    let containerOptionClick = $('.container-evaluate-img');
    let videoEvaluateComment = $('.video-evaluate-comment');
    let slides = slider.children();
    let index = 0;
    let sliderLength = parseInt(slides.length);

    itemClickShow.click(function (e) {
        if (!$(this).hasClass('active')) {
            containerOptionClick = $(this).parent();
            slider = $(".section-evaluate-product .container-show-in-img[data='"+containerOptionClick.attr('data')+"']"); 
            $(".section-evaluate-product .container-show-in-img").removeClass('active');
            slider.addClass('active');
            sliderLength = slider.children().length;
            if(!$(this).hasClass('item-video-show-comment')) {
                videoEvaluateComment.trigger('pause');
            }
            if (!containerOptionClick.children().hasClass('active') && $(this).attr('data') == 0) {
                clearShowImageComment()
                index = 0;
                slider.find("[data='0']").addClass("active-left");
            }else if(!containerOptionClick.children().hasClass('active') && $(this).attr('data') == (sliderLength  - 1)){
                clearShowImageComment()
                index = 4;
                slider.find("[data='"+ (sliderLength - 1) +"']").addClass("active-right");
            }else if (index < $(this).attr('data')) {
                index = $(this).attr('data');
                changeSlideRight(index);
            } else {
                index = $(this).attr('data');
                changeSlideLeft(index);
            }
            updateCircleIndicator();
        }else {
            clearShowImageComment();
            $(".section-evaluate-product .container-show-in-img").removeClass('active');
        }
    });

    function changeSlideRight(index) {
        slides.attr('class', 'item');
        if (index == 0) {
            slider.find("[data='" + (sliderLength - 1) + "']").addClass("next-right");
            slider.find("[data='0']").addClass("active-right");
        } else {
            slider.find("[data='" + (parseInt(index) - 1) + "']").addClass("next-right");
            slider.find("[data='" + index + "']").addClass("active-right");
        }
    }

    function changeSlideLeft(index) {
        slides.attr('class', 'item');
        if (index == 0) {
            slider.find("[data='" + 1 + "']").addClass("next-left");
            slider.find("[data='0']").addClass("active-left");
        } else {
            slider.find("[data='" + (parseInt(index) + 1) + "']").addClass("next-left");
            slider.find("[data='" + index + "']").addClass("active-left");
        }
    }

    function updateCircleIndicator() {
        itemClickShow.removeClass('active')
        containerOptionClick.find("[data='" + index + "']").addClass("active");
    }

    function clearShowImageComment() { 
        slides.attr('class', 'item');
        containerOptionClick.find("[data='" + index + "']").removeClass("active");
    }
});