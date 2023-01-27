$(document).ready(function () {

    let slider = $(".main-product-detail .show-image .container-img");
    let itemClickShow = $('.item-show-img-product-detail');
    let containerOptionClick = $('.container-option-show-img');
    let slides = slider.children();
    let index = 0;

    itemClickShow.click(function (e) {
        if (!$(this).hasClass('active')) {
            if (index < $(this).attr('data')) {
                index = $(this).attr('data');
                changeSlideRight(index);
            } else {
                index = $(this).attr('data');
                changeSlideLeft(index);
            }
            updateCircleIndicator();
        }
    });

    function changeSlideRight(index) {
        slides.attr('class', 'item');
        if (index == 0) {
            slider.find("[data='" + (slides.length - 1) + "']").addClass("next-right");
            slider.find("[data='0']").addClass("active-right");
        } else {
            slider.find("[data='" + (index - 1) + "']").addClass("next-right");
            slider.find("[data='" + index + "']").addClass("active-right");
        }
    }

    function changeSlideLeft(index) {
        slides.attr('class', 'item');
        if (index == 0) {
            slider.find("[data='" + (slides.length - 1) + "']").addClass("next-left");
            slider.find("[data='0']").addClass("active-left");
        } else {
            slider.find("[data='" + (index - 1) + "']").addClass("next-left");
            slider.find("[data='" + index + "']").addClass("active-left");
        }
    }

    function updateCircleIndicator() {
        itemClickShow.removeClass('active')
        containerOptionClick.find("[data='" + index + "']").addClass("active");
    }

});