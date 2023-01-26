$(function(){

  /* motion ------------------------------------------- */
  /* setTimeout(function(){
    home_motion()
  },15000) */
  home_motion()
  function home_motion(){
    t = $(".percent_container ul li").offset().top
    if(scrt >= t-winh*0.8){
        $(".percent_container").addClass("active")
    }else{
        $(".percent_container").removeClass("active")
    }//if else end
  }//fn home_motion

  $(window).resize(function(){
      home_motion()
  })//resize
  $(window).scroll(function(){
      home_motion()
  })//scroll

})//ready