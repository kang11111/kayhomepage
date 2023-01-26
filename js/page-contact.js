$(function(){
    circle_x1 = parseInt(Math.random()*30) + 3
    $(".circle1").css("left",circle_x1+"%")
    circle_x2 = parseInt(Math.random()*20) + 60
    $(".circle2").css("left",circle_x2+"%")
    circle_x3 = parseInt(Math.random()*40) + 10
    $(".circle3").css("left",circle_x3+"%")
    circle_y1 = parseInt(Math.random()*30) + 3
    $(".circle1").css("top",circle_y1+"%")
    circle_y2 = parseInt(Math.random()*10) + 10
    $(".circle2").css("top",circle_y2+"%")
    circle_y3 = parseInt(Math.random()*20) + 70
    $(".circle3").css("top",circle_y3+"%")
})//ready