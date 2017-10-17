
$(document).ready(function () {

    $("header#header .depth1 h2 a").on("mouseenter", function () {
        $("header#header .depth1").removeClass("active");
        $(this).parent().parent().addClass("active");
    });




});