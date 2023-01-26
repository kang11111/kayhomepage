$(window).load(function(){
  for(var i = 0; i < 10; i++) {
    var radius = (rnd(1600,3400)/10);
    var modifier = radius/160;
    $(".loader").append(
      "<div class=\"spinner\" style=\"animation: bar " + 2*modifier + "s linear infinite;" +
      " height: " + radius + "px; animation-delay: -" + (rnd(40,80)/10) + "s\"></div>"
    );//append end
  }//for end
  
  var loaded = 0;
  function loader() {
    if(rnd(0,1) == 1) {
       loaded++;
       $(".spinner:nth-child(" + Math.floor(loaded/15) + ")").css("height", "0px");
       $(".loaded").css("width", (loaded + "%"));
    }//if end
    if(loader >= 100) {
       clearInterval(runloader);
    }//if end
    
    if($(".loaded").width() == 100){
      $(".loader").fadeOut(100)
      $(".loader_circle_container").css("display","block")
      loader_circle()
      $(".percent_container").removeClass("active")
      setTimeout(function(){
        $(".preloader").fadeOut()
        setTimeout(function(){
          $(".percent_container").addClass("active")
        },500)
      },3000)//timeout
    }//if end
  }//fn loader
  
  var runloader = setInterval(loader,10); 
  
  function rnd(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
  }//fn rnd


  //-------------------------------------------------------//
  // circle animate
  //-------------------------------------------------------//
  function loader_circle(){
    anime.timeline({loop: false})
    .add({
      targets: '.loader_circle .circle-white',
      scale: [0, 3],
      opacity: [1, 0],
      easing: "easeInOutExpo",
      rotateZ: 360,
      duration: 1100
    }).add({
      targets: '.loader_circle .circle-container',
      scale: [0, 1],
      duration: 1100,
      easing: "easeInOutExpo",
      offset: '-=1000'
    }).add({
      targets: '.loader_circle .circle-dark',
      scale: [0, 1],
      duration: 1100,
      easing: "easeOutExpo",
      offset: '-=600'
    }).add({
      targets: '.loader_circle .letters-left',
      scale: [0, 1],
      duration: 1200,
      offset: '-=550'
    }).add({
      targets: '.loader_circle .bang',
      scale: [0, 1],
      rotateZ: [45, 15],
      duration: 1200,
      offset: '-=1000'
    }).add({
      targets: '.loader_circle',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1400
    });

    anime({
      targets: '.loader_circle .circle-dark-dashed',
      rotateZ: 360,
      duration: 8000,
      easing: "linear",
      loop: true
    });
  }//fn end
  

})//load event end
