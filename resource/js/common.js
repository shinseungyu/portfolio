// a태그 클릭시 위로 올라가는거 방지
$(document).on('click', 'a[href="#"]', function (e) { e.preventDefault(); })

$(function () {
    // 공통 헤더 
    const $menuBtn = $('#hamburger');
    const $mainMenu = $('.main_menu');

    $menuBtn.on('click', function () {
        $(this).toggleClass('active');

        // active 클래스 여부에 따라 mainMenu 클래스 추가/제거
        if ($(this).hasClass('active')) {
            $mainMenu.addClass('active');
        } else {
            $mainMenu.removeClass('active');
        }
    });
    $(window).on("wheel", function (event) {
        const headerArea = $(".header_area");

        if (event.originalEvent.deltaY > 0) {
            headerArea.removeClass("scroll");
        } else {
            headerArea.addClass("scroll");
        }
    });

});