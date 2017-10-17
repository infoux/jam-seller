
$(document).ready(function () {


    $("header#header .depth1 h2 a").mouseover(function () {
        $("header#header .depth1").removeClass("active");
        $(this).parent().parent().addClass("active");
    });




});