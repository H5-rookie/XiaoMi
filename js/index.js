

var resGoods = document.getElementById("res_goods");
resGoods.onclick =function(){

}
/* 触摸大导航出现下拉框 缺少运动 */
$(function(){
  $("#down_goods").css("display","none");
  $(".nav_lis>a").hover(function(){
    $("#down_goods").css("display","block");
  },function(){
    $("#down_goods").css("display","none");
  });
});

/* 轮播图 */
var box_swiper = document.querySelector('.home_Pic_container');
var swiper = document.querySelector('.home_Pic');
var swiper_images = document.querySelector('.home_Pic');
var imgLiS = slider.children
console.log(swiper_images);