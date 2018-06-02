$(function () {
    var $button_hidden = $(".js-hide-menu");
    var $menu_main = $(".menu__main");

    $button_hidden.on("click", function () {

        if ($menu_main.height() === 0) {
            var height_menu = $menu_main.css({"height":"auto"}).outerHeight();
            $menu_main.css({"height":"0"});
            $menu_main.animate({"height": height_menu}, 500);
            return false;
        }
        else {
            $menu_main.animate({"height": 0}, 500);
            return false;
        }

    });

    $(window).on("resize", function () {
        var width_window = $(window).width();

        if (width_window > 551) {
            $menu_main.attr("style", ' ');
        }

    });
});