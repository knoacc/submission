/*
show hide (dropdown menu),
remove elemen (hilangkan logo header)
& sticky menu saat scroll
*/

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 145) {
            $("#identity").hide();
        }
        else {
            $("#identity").show();
        };
        if ($(document).scrollTop() > 140) {
            $("#nav").addClass("sticky");
        }
        else {
            $("#nav").removeClass("sticky");
        };
        if ($(document).scrollTop() > 145) {
            $("#spasi").addClass("spasi");
        }
        else {
            $("#spasi").removeClass("spasi");
        };
    });
      $(".button").click(function() {
        $("ul").toggle(".button");
      });
});
