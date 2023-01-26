$(function(){
  var src
  var src_prev
  var src_next
  src = $(".single_container .bg img").attr("src")
  $(".single_container .bg").css("background-image","url("+src+")")

  src_prev = $(".thumb_prev img").attr("src")
  $(".thumb_prev .bg").css("background-image","url("+src_prev+")")
  src_next = $(".thumb_next img").attr("src")
  $(".thumb_next .bg").css("background-image","url("+src_next+")")

  $(".top_button").click(function(){
    $("body,html").stop().animate({"scrollTop":0},0)
  })
  function top(){
    if(scrt>=100){
      $(".top_button").addClass("active")
    }else{
      $(".top_button").removeClass("active")
    }//if else end
  }//fn top
  top()

  function mobile_size(){
    // div.phone의 가로 세로 비율 img.dummy와 맞추기
    mw = $(".dummy").width()
    mh = $(".dummy").height()
    $(".phone").width(mw)
    $(".app, .phone").height(mh)
  }//fn mobile_size
  mobile_size()

  $(window).resize(function(){
    mobile_size()
    top()
  })//resize

  $(window).scroll(function(){
    top()
  })//resize

  $(".download").click(function(){
    alert("안드로이드 운영체제만 설치가 가능합니다.\n마켓에 등록되지 않은 상품으로 설치시 보안 경고창이 출력됩니다.")
  })//click

})//ready 