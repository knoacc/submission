/*
show hide (dropdown menu)
& sticky menu saat scroll
*/

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 75) {
            $("#identity").hide();
        }
        else {
            $("#identity").show();
        };
        if ($(document).scrollTop() > 70) {
            $("#nav").addClass("sticky");
        }
        else {
            $("#nav").removeClass("sticky");
        };
        if ($(document).scrollTop() > 75) {
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
