 new WOW().init();
$(document).scroll(function(){
$("#header #header-content").addClass("wow slideInUp")
    
})



/* Skitter Slider */
$(function() {
  $('.skitter-large').skitter({
     interval:2000,
      controls:true,
  });
});
/* The End Of Skitter Slider */

/* Smozing Scroll */
/* navbar [ 1 ] */
$("#header #navbar a").click(function(){
    var hrefAtrr = $(this).attr("href")
    var possion = $(hrefAtrr).offset().top
$("body").animate({scrollTop:possion},2000)
})
/* navbar [ 1 ] */
/* navbar [ 2 ] */
$("#header #navbar2 a").click(function(){
    var hrefAtrr = $(this).attr("href")
    var possion = $(hrefAtrr).offset().top
$("body").animate({scrollTop:possion},2000)
})
/* navbar [ 2 ] */
/* The End Of Smozing Scroll */

/* Fixed Btn */
$("#fixedBtn").click(function(){
   $("body").animate({scrollTop:0},2000)
})
$(window).scroll(function(){
    var scllTop = $(window).scrollTop()
    if (scllTop > $("#about").offset().top){
        $("#fixedBtn").fadeIn(200)
    }else{
        $("#fixedBtn").fadeOut(200)
    } 
})

/* The End Of Fixed Btn */
  
/* Navbar Scrolling */
$(window).scroll(function(){
    var scrT = $("#about").offset().top
    var scTop = $(window).scrollTop()
    if(scTop > scrT){
        $(".navbar").css("display","none");
      $(".navbar2").css("display","block").animate({top:"0%"},0)
        $("#logo2").addClass("wow hinge")
    }else{
        $(".navbar").css("display","block")
        $(".navbar2").css("display","none")
    }
    
    
})
        
/* The End Of Navbar Scrolling */





