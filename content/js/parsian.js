$(document).ready(function() {



    var swiper1 = new Swiper(".swiper-top", {

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    $("#btnradio1").click(function() {

        $("#first-btn").show();
        $("#second-btn").hide();
        $("#third-btn").hide();

    });
    $("#btnradio2").click(function() {

        $("#first-btn").hide();
        $("#second-btn").show();
        $("#third-btn").hide();

    });
    $("#btnradio3").click(function() {

        $("#first-btn").hide();
        $("#second-btn").hide();
        $("#third-btn").show();

    });




});