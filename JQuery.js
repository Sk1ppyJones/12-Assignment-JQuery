$(document).ready(function () {
    $("#show-button").click(function () {
        $("#partial-text").toggle("slow");
        $("#full-text").slideToggle("slow");

        var currentText = $("#showmore").text();
        if (currentText == "Show More...") {
            $(".card-img-top").css({ 'filter': 'blur(5px)' });
            $("#showmore").text("Show Less...")
        } else {
            $(".card-img-top").css({ 'filter': 'blur(0px)' })
            $("#showmore").text("Show More...")
        }
    });

});