$(document).ready(function () {
   var window_width = $(window).width();
   var main_width = $(".main_container").width();
   var long_container = $(".long_container");
   var item = $(".item");
   var slider_number = 0;

   long_container.css("width" , main_width * 3.05);
   item.css("width" , long_container.width() / 9);

   $(".see_next").click(function () {
      if(slider_number < 2 ){
          slider_number++
          if (slider_number == 2){
              $(".see_next").animate({opacity: 0});
          } else{
              $(".see_next").animate({opacity: 1});
          }

          if(slider_number == 0){
              $(".see").animate({opacity: 0});
          }else {
              $(".see").animate({opacity: 1});
          }

          var item_widht = $(".item").width();
          var pixels_moved = item_widht * slider_number;

          long_container.animate({
              marginLeft: -pixels_moved
          });

      }
   });

    $(".see").click(function () {
        if(slider_number > 0 ){
            slider_number--
            if (slider_number == 0){
                $(".see").animate({opacity: 0});
            } else{
                $(".see").animate({opacity: 1});
            }

            if(slider_number == 2){
                $(".see_next").animate({opacity: 0});
            }else {
                $(".see_next").animate({opacity: 1});
            }

            var item_widht = $(".item").width();
            var pixels_moved = item_widht * slider_number;

            long_container.animate({
                marginLeft: -pixels_moved
            });

        }
    });

});