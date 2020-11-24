

// 触摸sec_NavBig出现下滑手机菜单
var secNav = document.querySelector('#sec_NavBig')
var downList = document.querySelector('.down_list')
var downGoods = document.querySelector('#down_goods')
secNav.querySelectorAll('a').forEach(a => {
  a.onmouseover=function(){
    downList.style.display= 'block'
    downGoods.style.borderTop = '1px solid #e0e0e0'
  }
  a.onmouseleave=function(){
    downList.style.display = 'none'
    downGoods.style.borderTop = '1px solid white'
  }
});

// 首页轮播图菜单 hover出现二级菜单
var sec_category = document.querySelector('.sec_category')
var touchLis = document.querySelector('.categoryList')
var touchLis_li = document.querySelectorAll('.category-li')

touchLis_li.onmouseover=function(){
  sec_category.style.display='block'
  // console.log(touchLis_li);
}
touchLis_li.onmouseleave=function(){
  sec_category.style.display='none'
}
touchLis_li.forEach((li)=>{
  li.onmouseover=function(){
    console.log(li);
    for(let i=0;i<touchLis_li.length; i++){
      touchLis_li[i].classList.remove('sec_category1')
    }
    li.classList.add('sec_category1')
  }
})


// swiper初始化

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal', // 横向切换选项
  loop: true, // 循环模式选项
  autoplay:true,
  effect:'fade',
  fadeEffect:{
    crossFade:true,
  },
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }

  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})   
