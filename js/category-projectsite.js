$(function(){
  // ---------------------------------------------------------------------- //
  // slide
  // ---------------------------------------------------------------------- //
  
  var flag = 1
  var size = $(".img_container li").size()
  var deg = 360 / size
  var n = size
  var rot = 0
  var src
  var num = 1
  setsize()

  for(i=1;i<=size;i++){
    $(".img_container li:nth-child("+i+")").attr("class","box"+i)
    src = $(".img_container li:nth-child("+i+")>img").attr("src")
    $(".img_container li:nth-child("+i+") .top span, .img_container li:nth-child("+i+") .bottom span").css("background-image","url("+src+")")
  }//for end

  $(".number_container .num2").text(size)
  $(".number_container").animate({"width":"105px"},1500)

  $(".circle_container").height($(".circle_container").width())

  function setsize(){
    con_w = $(".img_container").innerWidth()
    $(".img_container").css("height",con_w)
    cnt = 0
    $(".img_container li").each(function(){
      $(this).css("transform","rotate("+(deg*cnt+deg)+"deg) translateY("+-con_w*0.5+"px)")
      cnt ++
    })//each end

    $(".circle_container").height($(".circle_container").width())

    cnt = 0
    target_y= $(".circle_container").width() *  0.65
    $(".list_container li").each(function(){
      $(this).css("transform","rotate("+(deg*cnt+deg*2)+"deg) translateY("+ -target_y +"px)")
      cnt ++
    })//each end

  }//fn setsize end


  function motion(){
    $(".img_container").css("transform","translate(-50%,0) rotate("+rot+"deg)")
    $(".list_container").css("transform"," rotate("+rot+"deg)")
    
    $(".img_container li").removeClass("active")
    $(".box"+n).addClass("active")

    $(".img_container li .arrowbox").stop().fadeOut()
    setTimeout(function(){
      $(".box"+n+" .arrowbox").stop().fadeIn(500)  
    },800)//timeout end

    if(num>size){num = 1}
    if(num<1){num = size}
    $(".number_container>span").animate({"width":"115px"},600,function(){
      $(".number_container .num1").text(num)
      $(this).animate({"width":"8px"})
    })//animate end
  }//fn motion end


  $(window).resize(function(){
    setsize()
  })//resize end
  
  $(".img_container .box"+size).addClass("active")
  $(".box"+size+" .arrowbox").stop().fadeIn(200)
  $(".img_container, .list_container").mousewheel(function(e,delta){
    if(flag == 1){flag= 0;}else{return false}
    setTimeout(function(){flag = 1},1000)
    if(delta>=1){delta=1}else if(delta<=-1){delta=-1}//if end

    n -= -delta
    if(n>size){n = 1}
    if(n<1){n = size}

    rot += -delta * deg
    num += -delta
    motion()
    
  })//mousewheel end


  // ---------------------------------------------------------------------- //
  // svg mouse event
  // ---------------------------------------------------------------------- //

  $("svg.svg_projectlist").mouseenter(function(){
    TweenLite.to(".svg_projectlist .path1", 0.5, {morphSVG:".svg_projectlist .path2",fill:"rgba(252,163,178,0.7)"})
    cnt = 0
    target_y= $(".list_container").width() * 1.3 * 0.65
    $(".list_container li").each(function(){
      $(this).css("transform","rotate("+(deg*cnt+deg*2)+"deg) translateY("+ -target_y +"px)")
      cnt ++
    })//each end

  }).mouseleave(function(){
    TweenLite.to(".svg_projectlist .path1", 0.5, {morphSVG:".svg_projectlist .path1",fill:"#fca3b2"})
    cnt = 0
    target_y= $(".list_container").width() * 0.65
    $(".list_container li").each(function(){
      $(this).css("transform","rotate("+(deg*cnt+deg*2)+"deg) translateY("+ -target_y +"px)")
      cnt ++
    })//each end
  })//mouse event end

  
  $("svg.polygon").mouseenter(function(){
    TweenLite.to(".polygon .path1", 0.5, {morphSVG:".polygon .path2",fill:"rgba(224,69,34,0.3)"})
    $(".circle_project>div p").css("color","#187474")
  }).mouseleave(function(){
    TweenLite.to(".polygon .path1", 0.5, {morphSVG:".polygon .path1",fill:"#e04522"})
    $(".circle_project>div p").css("color","#FFF")
  })//mouse event end

  
  
  // ---------------------------------------------------------------------- //
  // touch sliding
  // ---------------------------------------------------------------------- //
  var startx
  var endx
  var add

  function change(){
    if(flag == 1){flag= 0;}else{return false}
    setTimeout(function(){flag = 1},1000)
    if(startx < endx - 10){
      n --
      num++
      add = 1
    }else if(startx > endx + 10){
      n ++
      num--
      add = -1
    }else{
      return false
    }

    if(n>size){n = 1}
    if(n<1){n = size}

    rot += add * deg
    motion()
  
  }//fn change end
  
  $(".img_container").mousedown(function(e){
    startx = e.clientX 
  })
  $(".img_container").mouseup(function(e){
    endx = e.clientX
    change()
  })

  $(".img_container").bind("touchstart",function(){
    startx = event.changedTouches[0].clientX 
  })
  $(".img_container").bind("touchend",function(){
    endx = event.changedTouches[0].clientX
    change()
  })


})//ready