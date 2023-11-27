/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */


// JavaScript Document


function overScroll(){
    var bWidth = $(window).width();
    var bHeight = $(window).height();
    var rWidth = 1920 - bWidth;
    var rHeight = 980 - bHeight;
    $('#scrollBox').overscroll({
        scrollLeft :0,
        scrollTop : 0,
        captureWheel  : false
    });
}

$(window).resize(function(){
    overScroll();
});







$(document).ready(function () {







});



