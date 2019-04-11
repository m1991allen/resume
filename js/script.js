
$(document).ready(function () {
    $('.logo img').fadeIn(5000);

    //點選gotop置頂
    $('#gotop').click(function (event) {
        $('html, body').animate({
            scrollTop: 0
        }, '1000');
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() < 100) { //判斷捲軸小於200座標位置時，消失
            $('#gotop').stop().fadeOut('fast');
        } else {
            $('#gotop').stop().fadeIn('fast'); //stop()可以讓使用者停止滾動時也跟著停止，不會持續做完
            // $('#gotop').stop().fadeTo('fast', 1);
            // fadeIn及fadeOut同時使用可能會有衝突，所以可以用fadeTo替換，但要加上透明度參數)
        }
    });
});
