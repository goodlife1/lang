$(document).ready(function () {
    let circle = $("#plane"),
        plane_spead=20,
        left ="",
        top="-150",
        t=1,
        free_width=0.70,
        a=true;
    if($(window).width()<=1440){
        plane_spead=200;
        free_width=0.8;
        console.log(free_width);
    }
    $(window).resize(function () {
    if($(window).width()<=1440){
        plane_spead=200;
        free_width=0.8;
        console.log(free_width);
    }
});
    function init_variable() {
        
    }
    if ($('.cloud').get(0)) {
        var moveCloud = function () {
            $('.cloud').animate({
                'top': '+=20px'
            }, 3000, 'linear', function () {
                $('.cloud').animate({
                    'top': '-=20px'
                }, 3000, 'linear', function () {
                    moveCloud();
                });
            });
        };

        moveCloud();
    }


$('#slide').cycle('fade');


var iconsetTop =$('#sl-bl-1').offset().top;
$(window).on('scroll', function() {
    if ($(window).scrollTop() >= iconsetTop+100) {
        $('#sl-bl-1').slideDown(2000);
    } else {
    }
});
var slide3 =$('#sl-3').offset().top;
var slide3_active=false;
$(window).on('scroll', function() {

    if ($(window).scrollTop() >= slide3+50 && !slide3_active) {
        $( ".item" ).toggle( "bounce", { times: 1 }, 1500 );
        slide3_active=true;
    } else {
    }
});


    function drawPosition() {

        left = parseInt(circle.css('left').replace("px",""));
        left=left+5;
        top = -1*(10+Math.cos(left*0.008)*120);
        circle.css({'left':left,'top':top});
    }
    var slide4 =$('#sl-3').offset().top;

    $(window).on('scroll', function() {

        if ($(window).scrollTop() >= slide4+50 ) {

setTimeout(function () {


    let StartTime = setInterval(function () {
        if (left >$('body').width()*free_width){
            clearInterval(StartTime);
            return;
        }
        console.log(t);

        if(t<12 && a) {
            t = t + 0.3

        }else{
            a = false;
            t=t-0.4
        }
            drawPosition();

        $('#plane').rotate({angle:t});

    },plane_spead);
},2000);

        }
    });




});
