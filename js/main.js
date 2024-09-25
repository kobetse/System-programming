

$(function(){
   let header=$(".header");
   let headerH=1;
   let scrollPos=$
   (window).scrollTop();
   let header_top=$
   (".header_top");

   $(window).on("scroll", function(){
      scrollPos=$(this).scrollTop();
      if (scrollPos>headerH) {
         header_top.addClass("fixed");
      }
      else {
         header_top.removeClass("fixed");
      }
  
   console.log(headerH);
 })
});

$("[data-scroll]").on("click",function(event){
   event.preventDefault();
   let elementId=$(this).data("scroll");
   console.log(elementId);
});

$("[data-scroll]").on("click",function(event){  
   event.preventDefault();
   let elementId=$(this).data("scroll");  
   let elementOffset=$(elementId).offset().top;
 
   $("html,body").animate({    
   scrollTop:elementOffset -100
   } ,1000);
});
