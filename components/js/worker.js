$(document).ready(function () {
    if (localStorage.getItem("mode") != null || localStorage.getItem("mode") != undefined) {
        var data = JSON.parse(localStorage.getItem("mode"));
        $("#main_nav").removeClass(data['remove']);
        $("#main_nav").addClass(data['add']);
        $("body").css("background-color", data['body_color']);
        $("#sidebar").css("background-color", data['sidebar_color']);
        $(".link").css("color", data['link']);
    }
    var ur = "https://script.google.com/macros/s/AKfycbwi1CH-KOYCOiyo7IjUOjVeHqfcH3uFVMf-bCkwXQVsmI51oAjI/exec";
    $.post(ur, { req: 'r' }, function (data, status) {
        data.forEach(element => {
            //console.log(element);
            $("#link").append("<li><a class='link' data-description='" + element['description'] + "' id='" + element['link'] + "' onclick='show(this);' >" + element['name'] + "</a></li>");
        });
    });
    var x = 0;
    $("#colormode").click(function () {
        var d = {};
        if (x == 0) {
            x = 1;
            $("#main_nav").removeClass("navbar-default");
            $("#main_nav").addClass("navbar-inverse");
            $("body").css("background-color", "rgb(0, 0, 0,0.8)");
            $("#sidebar").css("background-color", "rgb(0, 0, 10,0.8)");
            $(".link").css("color", "white");
            d['remove'] = "navbar-default";
            d['add'] = "navbar-inverse";
            d['body_color'] = "rgb(0, 0, 0,0.8)";
            d['sidebar_color'] = "rgb(0, 0, 10,0.8)";
            d['link'] = "white";
            localStorage.setItem("mode", JSON.stringify(d));
        } else {
            x = 0;
            $("#sidebar").css("background-color", "white");
            $("#main_nav").removeClass();
            $("#main_nav").addClass("navbar navbar-default");
            $("body").css("background-color", "white");
            $(".link").css("color", "black");
            d['remove'] = "navbar-inverse";
            d['add'] = "navbar-default";
            d['body_color'] = "white";
            d['sidebar_color'] = "white";
            d['link'] = "black";
            localStorage.setItem("mode", JSON.stringify(d));
        }
    });

    $("#mob-1").click(function () {
        $("#phn-1").css("width", "423px");
        $("#phn-1").css("height", "877px");
        $("#screen-1").css("width", "375px");
        $("#screen-1").css("height", "677px");
    });
    $("#tab-1").click(function () {
        $("#phn-1").css("width", "1048px");
        $("#phn-1").css("height", "877px");
        $("#screen-1").css("width", "900px");
        $("#screen-1").css("height", "700px");
    });
    var y = 0;
    $("#sidebar-toggle").click(function () {
        if (y == 0) {
            y = 1;
            $("#sidebar-container").animate({ width: "250px" });
            $("#icon").removeClass("glyphicon-arrow-right");
            $("#icon").addClass("glyphicon-arrow-left");
        } else {
            y = 0;
            $("#sidebar-container").animate({ width: "100px" });
            $("#icon").removeClass("glyphicon-arrow-left");
            $("#icon").addClass("glyphicon-arrow-right");
        }
        $("#sidebar").slideToggle();
    });

});
function setMode(data) {

}
function show(button) {
    document.getElementById("web-1").href = button.id;
    var x= document.getElementById(button.id).getAttribute("data-description");
    document.getElementById("panel_body").innerHTML="Application Description : "+x;
    document.getElementById("appname").innerHTML="Application Name : <b>"+document.getElementById(button.id).innerText+"<b>";
    document.getElementById("screen-1").style.backgroundImage='url(./components/img/gif2.gif)';
    document.getElementById("screen-1").src = button.id.toString();
}