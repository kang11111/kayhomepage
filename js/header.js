$(function(){
  var flag = 1

  $(".gnb_btn").click(function(){
    $(this).toggleClass("active")
    flag *= -1
    if(flag==-1){
      $(".gnb, .gnb_dummy1, .gnb_dummy2").addClass("active")
    }else{
      $(".gnb, .gnb_dummy1, .gnb_dummy2").removeClass("active")
    }//if else end
  })//click

})//ready