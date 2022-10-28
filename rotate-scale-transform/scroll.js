$(function () {
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        $("#title b").css('transform', 'rotateY(' + y + 'deg)');

        var plus = y * 0.0005 + 1;
        $("#links").css('transform', 'rotateX(' + y + 'deg) scale(' + plus + ')');
        let minus = y * -0.0005 + 1;
        $("#info").css('transform', 'rotateZ(' + y + 'deg) scale(' + minus + ')');
    });
});