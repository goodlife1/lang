$(document).ready(function () {
    var circle = $("#plane"),
        plane_spead=20,
        left ="",
        top="-190",
        t=1,
        free_width=0.70,
        type_disp=-1,
        a=true;
    if($(window).width()<=1440){
        plane_spead=200;
        free_width=0.8;
        type_disp=1;
        console.log(free_width);
    }
    $(window).resize(function () {
    if($(window).width()<=1440){
        plane_spead=200;
        free_width=0.8;
        console.log(free_width);
    }
});
  //Cloud
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
//End cloud


$('#slide').cycle('fade'); //big item


var iconsetTop =$('#sl-bl-1').offset().top;

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= iconsetTop+130) {
        $('#sl-bl-1').slideDown(2000);
    } else {
    }
});
var slide3 =$('#sl-3').offset().top;
var slide3_active=false;


//show items
$(window).on('scroll', function() {

    if ($(window).scrollTop() >= slide3+50 && !slide3_active) {
        slide3_active=true;

        $( "div[item_number='1']" ).toggle( "bounce", { times: 1 }, 1500 );
        setTimeout(function () {
            $( "div[item_number='2']" ).toggle( "bounce", { times: 1 }, 1500 );
        },1000);
        setTimeout(function () {
            $( "div[item_number='3']" ).toggle( "bounce", { times: 1 }, 1500 );
        },2000);
    } else {
    }
});


    function drawPosition() {
circle.css('display','block');
        left = parseInt(circle.css('left').replace("px",""));
        left=left+5;
        top = type_disp*(10+Math.sin(left*0.008)*120);
        circle.css({'left':left,'top':top});
    }
    var slide4 =$('#sl-3').offset().top;

    $(window).on('scroll', function() {

        if ($(window).scrollTop() >= slide4+50 ) {

setTimeout(function () {


    var StartTime = setInterval(function () {
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


    var angle = 0;
    setInterval(function(){
        angle+=3;
        $("#sun").rotate(angle);
    },50);


});
