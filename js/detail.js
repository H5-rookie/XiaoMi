
/* 初始化Swiper */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

/* 模板字符串 */
var publicTop = ` 
<div class="all">
<div id="top">
    <div class="container">
        <!-- 中心 -->
        <a href="http://localhost:3000/indexAfterLogin.html" class="nav_Big_a">小米商城</a>
        <span class="lString">|</span>
        <a href="javascript:;">MI</a>
        <span class="lString">|</span>
        <a href="javascript:;">IoT</a>
        <span class="lString">|</span>
        <a href="javascript:;">云服务</a>
        <span class="lString">|</span>
        <a href="javascript:;">金融</a>
        <span class="lString">|</span>
        <a href="javascript:;">有品</a>
        <span class="lString">|</span>
        <a href="javascript:;">小爱开放平台</a>
        <span class="lString">|</span>
        <a href="javascript:;">企业团购</a>
        <span class="lString">|</span>
        <a href="javascript:;">资质执照</a>
        <span class="lString">|</span>
        <a href="javascript:;">协议规则</a>
        <span class="lString">|</span>
        <a href="javascript:;">下载app</a>
        <span class="lString">|</span>
        <a href="javascript:;">智能生活</a>
        <span class="lString">|</span>
        <a href="javascript:;">Select Location</a>
        <!-- 右边 -->
        <div id="topNav-rt">
            <a href="http://localhost:3000/login.html" class="nav_link client">尊敬的用户abc <i><i></a>
            <span class="link" class="lString">|</span>
            <a href="#" class="nav_link">我的订单</a>
            <span class="link" class="lString">|</span>
            <a href="#" class="nav_new" class="nav_link">消息通知</a>

            <!-- 导航页购物车 -->
            <div id="nav_shopChart">
                <a href="#" div="nav_shopChart_word ">购物车( 0 ) <span
                        id="index_miniChart">购物车中还没有商品，赶紧选购吧！</span></a>
            </div>
        </div>
    </div>
</div>
<!-- 大搜索框 -->
<div id="sec_Nav">
    <div class="container">
        <!-- logo -->
        <div id="miLogo">
            <h1><img src="./img/mi-logo.png" alt="">
            </h1>
        </div>
        <div id="sec_NavBig">
            <ul class="nav_lis">
                <a href="javascript:;">小米手机</a>
                <a href="javascript:;">Redmi 红米</a>
                <a href="javascript:;">电视</a>
                <a href="javascript:;">笔记本</a>
                <a href="javascript:;">家电</a>
                <a href="javascript:;">路由器</a>
                <a href="javascript:;">智能插件</a>
                <a href="javascript:;">服务</a>
                <a href="javascript:;">社区</a>
            </ul>
        </div>
        <!-- 搜索框 -->
        <div id="NavBig_search">
            <input type=" text" class="index_search" placeholder="充电宝">
            <input type="submit" class="index_submit" value="">
            <ul id="res_goods">
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
                <li>王一博同款手机</li>
            </ul>
        </div>
    </div>
</div>
<!-- 触摸字体出现导航下浮框手机 -->
<!-- hover 只能在父子关系下使用 建议使用点击事件 mouseover 添加动态标签active -->
<div id="down_goods">
    <div class="container">
        <ul id="down_list" class="down_list">
            <li class="first">
                <a href="javascript:;">
                    <div class="down_lis_div">
                        <img src="./img/手机.jpg" alt="#" class="menuPic">
                    </div>
                    <div class="title">小米10至尊纪念版</div>
                    <p class="price">5299起</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="down_lis_div">
                        <img src="./img/手机.jpg" alt="#" class="menuPic">
                    </div>
                    <div class="title">小米10至尊纪念版</div>
                    <p class="price">5299起</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="down_lis_div">
                        <img src="./img/手机.jpg" alt="#" class="menuPic">
                    </div>
                    <div class="title">小米10至尊纪念版</div>
                    <p class="price">5299起</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="down_lis_div">
                        <img src="./img/手机.jpg" alt="#" class="menuPic">
                    </div>
                    <div class="title">小米10至尊纪念版</div>
                    <p class="price">5299起</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="down_lis_div">
                        <img src="./img/手机.jpg" alt="#" class="menuPic">
                    </div>
                    <div class="title">小米10至尊纪念版</div>
                    <p class="price">5299起</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="down_lis_div">
                        <img src="./img/手机.jpg" alt="#" class="menuPic">
                    </div>
                    <div class="title">小米10至尊纪念版</div>
                    <p class="price">5299起</p>
                </a>
            </li>
        </ul>
    </div>
</div>
</div>
`

var publicBottom = `<div>
<div class="container">
    <div class="serve">
        <ul>
            <li> <a href=""><em class="iconfont-tool"></em> 预约维修服务</a></li>
            <li> <a href=""><em class="iconfont-tool"></em> 7天无理由退货</a></li>
            <li> <a href=""><em class="iconfont-tool"></em> 15天免费换货</a></li>
            <li> <a href=""><em class="iconfont-tool"></em> 满99元包邮</a></li>
            <li> <a href=""><em class="iconfont-tool"></em> 520余家售后网点</a></li>
        </ul>
    </div>
    <div class="footer-link">
        <dl class="col-links">
            <dt>帮助中心</dt>
            <dd><a href="">账户管理</a></dd>
            <dd><a href="">购物指南</a></dd>
            <dd><a href="">订单操作</a></dd>
        </dl>
        <dl class="col-links">
            <dt>帮助中心</dt>
            <dd><a href="">售后政策</a></dd>
            <dd><a href="">自助服务</a></dd>
            <dd><a href="">相关下载</a></dd>
        </dl>
        <dl class="col-links">
            <dt>帮助中心</dt>
            <dd><a href="">账户管理</a></dd>
            <dd><a href="">购物指南</a></dd>
            <dd><a href="">订单操作</a></dd>
        </dl>
        <dl class="col-links">
            <dt>帮助中心</dt>
            <dd><a href="">账户管理</a></dd>
            <dd><a href="">购物指南</a></dd>
            <dd><a href="">投资者关系</a></dd>
            <dd><a href="">企业社会责任</a></dd>
            <dd><a href="">廉洁举报</a></dd>
        </dl>
        <dl class="col-links">
            <dt>帮助中心</dt>
            <dd><a href="">账户管理</a></dd>
            <dd><a href="">购物指南</a></dd>
            <dd><a href="">订单操作</a></dd>
            <dd><a href="">公益基金会</a></dd>
        </dl>
        <dl class="col-links">
            <dt>特色服务</dt>
            <dd><a href="">F码通道</a></dd>
            <dd><a href="">礼物码</a></dd>
            <dd><a href="">防伪查询</a></dd>
        </dl>
        <div class="col-contact">
            <h3>400-100-5678</h3>
            <p>8:00-18:00（仅收市话费）</p>
            <a class="staffService">
                <i>人工客服</i>
            </a>
            <div class="follow">
                关注小米：
                <a href=""></a>
                <a href="" class="wechat"></a>
            </div>
        </div>
    </div>
    <div class="colr">
        <div class="site-info">
            <div class="logo"><img src="./img/logo-footer.png" alt=""></div>
            <div class="info-text">
                <p>
                    <a href="">小米商城</a><span>|</span>
                    <a href="">MIUI</a><span>|</span>
                    <a href="">米家</a><span>|</span>
                    <a href="">米聊</a><span>|</span>
                    <a href="">多看</a><span>|</span>
                    <a href="">游戏</a><span>|</span>
                    <a href="">企整服务</a><span>|</span>
                    <a href="">小米天猫店</a><span>|</span>
                    <a href="">小米集团隐私政策</a><span>|</span>
                    <a href="">小米集团隐私政策保护规则</a><span>|</span>
                    <a href="">小米商城隐私政策</a><span>|</span>
                    <a href="">小米商城隐私政策</a><span>|</span>
                    <a href="">问题反馈</a><span>|</span>
                    <a href="">Select Location</a>
                </p>
                <img src="./img/尾部.png" alt="">
                <img src="./img/" alt="">
            </div>
            <div class="site-info-slogen"></div>
        </div>
    </div>
</div>
</div> `
//public模板字符串
var publicStyle = document.querySelector('.publicStyle')
publicStyle.innerHTML= publicTop
var phoneBox= document.querySelector('.phone-box')  

var publicStyle_bottom = document.querySelector('.bottomPublic')
publicStyle_bottom.innerHTML = publicBottom