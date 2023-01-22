$(function(){

var header=$("#header"),
    IntroH=$("#intro").innerHeight(),
    scrollOfset=$(window).scrollTop()

    /*fixed header*/

    checkScroll(scrollOfset);

    $(window).on("scroll",function(){
scrollOfset=$(this).scrollTop();

checkScroll(scrollOfset);

    });

function checkScroll(scrollOfset){

if(scrollOfset >= IntroH){
    header.addClass("fixed");
} else{
     header.removeClass("fixed");
}
}

    /*smooth scroll*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this=$(this),
            blockId= $this.data('scroll'),
            blockOffset=$(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

       $("html,body").animate({

           scrollTop:blockOffset

       },500);
    });

/*menu nav toggle*/

$("#nav_toggle").on("click",function(event){

     event.preventDefault();

    $(this).toggleClass("active");
$("#nav").toggleClass("active");
});

/*collapse*/

    $("[data-collapse]").on("click",function(event){

        event.preventDefault();

                var $this=$(this),
            blockId= $this.data('collapse');

        $this.toggleClass("active");
    });


/*revios*/


    $("[data-slider]").slick({

        infinite: true,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1


    });

});
