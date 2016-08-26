/**
 * Created by Administrator on 2016/6/26.
 */
//头部广告动画
$(function () {
    //定时器 top图片
    setTimeout(function () {
        //定时器 广告栏滑出
        $(".topAd").slideUp(function () {
            //大图片隐藏
            $(".topAdBig").hide();

            $(".topAdSmall").show();
            $(".topAd").slideDown();
        });
    },2000);
    // 创建城市模拟数据
    var datas = ["北京","上海","广州","周口","郑州","漯河","商丘","洛阳","开封","信阳","安阳","南阳","洛阳","漯河","许昌"]
    //创建城市div
    $(".top-navBar-l li").append('<div id="citys" class="citys"></div>');
    //当前城市
    $("#citys").append('<p>当前城市为：<span>上海</span></p>');
    //热门城市
    $("#citys").append(' <div class="citys-city"> </div>');
    //热门城市：
    $(".citys-city").append('<div class="current-left fl">热门城市：</div>')
    $(".citys-city").append('<div class="current-right fl"></div>')
    for(var i=0;i<datas.length;i++){
        var data = datas[i];
        $(".current-right").append('<span><a href="javascript:;">'+data+'</a></span>');
    }
    $("#citys").append('<div class="city-select"><span>选择按钮</span><b></b></div>');
    //判断是不是显示 默认是隐藏
    var onOff = false;
    $("#top-navBar-l-city").click(function () {

        if(onOff){
            //如果显示 改为隐藏
            $("#top-navBar-l-city").removeClass("current");
            $("#citys").slideUp(60);
            onOff = false;
        }else{
            //如果隐藏改为显示
            $("#top-navBar-l-city").addClass("current");
            $("#citys").slideDown(60);
            onOff = true;
        }
    });
    //点击城市改变当前城市名为点击的城市名
    $(".current-right>span>a").click(function () {
        //当前城市名
        $("#citys>p>span").html($(this).html());
        //当前城市名
        $("#top-navBar-l-city").html($(this).html());
        $("#top-navBar-l-city").removeClass("current");
        $("#citys").slideUp(60);
        onOff = false;
    });
    //鼠标离开隐藏元素
    $(".top-navBar-l li").mouseleave(function () {
        $("#top-navBar-l-city").removeClass("current");
        $("#citys").slideUp(60);
        onOff = false;
    });
    //我的账户
    //我的账户显示
    $("#mycountparent").mouseenter(function () {
        $("#my-account").stop().slideDown(100);
        $("#mycount").addClass("current");
    });
    $("#mycountparent").mouseleave(function () {
        $("#my-account").stop().slideUp(100);
        $("#mycount").removeClass("current");
    });
    //我的购物车显示
    $("#shopcar").mouseenter(function () {
        $(".myshop-car").stop().slideDown(100);
        $("#lcfnav-shopcar").addClass("current");
    });
    $("#shopcar").mouseleave(function () {
        $(".myshop-car").stop().slideUp(100);
        $("#lcfnav-shopcar").removeClass("current").addClass("lcfnav-shopcar");
    });
    //搜索文本框 获取焦点是 设置val
    $(".header-search>.txt").focus(function () {
        if($(this).val() === "6月福利-注册送10元券..."){
            $(this).val("");
        }
    });
    //搜索文本框 失去焦点是 设置val
    $(".header-search>.txt").blur(function () {
        if($(this).val() === ""){
            $(this).val("6月福利-注册送10元券...").css("color","#1FAD00");
        };
    });

    //导航动画
    var navBar = my$("lcfnavBar");
    //记录鼠标点击的时候的位置
    var target = 0;
    //1 给所有li注册事件
    for (var i = 0; i < navBar.children.length; i++) {
        var li = navBar.children[i];
        li.onmouseover = function () {
            var cloud = my$("cloud");
            //鼠标放到li上，让clound 也到当前li的位置
            animate(cloud, this.offsetLeft);
        };
        li.onmouseout = function () {
            var cloud = my$("cloud");
            //鼠标离开回到原来的位置
            animate(cloud, target);
        };
        li.onclick = function () {
            target = this.offsetLeft;
        }
    }
    //服务公告切换
    $(".lcf-news-notice-top li").mouseenter(function () {
        //当前li的index
        var index = $(this).index();
        //对应index的div显示 其他隐藏
        $(this).addClass("current").siblings().removeClass("current").parent().next().children("div").eq(index).addClass("current").siblings().removeClass("current");

    });


    /* setTimeout(function () {
     console.log($("#F1").offset());
     console.log($("#F2").offset());
     console.log($("#F3").offset());
     console.log($("#F4").offset());
     console.log($("#F5").offset());
     console.log($("#F6").offset());
     console.log($("#F7").offset());
     console.log($("#F8").offset());
     console.log($("#F9").offset());
     console.log($("#F10").offset());
     },5000);*/
    //鼠标点击左侧楼层定位时
    $(".fn-fixed>ul>li>a").click(function () {
        $(this).addClass("current").parent().siblings().children(0).removeClass("current");
    });

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop>=1280) {
            $(".fn-fixed").stop().show();
            $(".weixin-fixed").stop().show();
        }else{
            $(".fn-fixed").stop().hide();
            $(".weixin-fixed").stop().hide();
        }
        //鼠标滚出的距离
        var  scrollTops = [1280,1880,2380,2980,3580,4180,4580,5180,5780,6380];
        /*//鼠标滚出的距离
        var  scrollTops = [1280,1880,2380,2980,3580,4180,4680,5280,5880,6480];*/
        for(var i=0;i<scrollTops.length;i++){
            var scrollTop1 = scrollTops[i];
            //判断实际鼠标滚出的距离是否大于等于设置的距离
            if(scrollTop>=scrollTop1){
                $(".fn-fixed>ul>li").eq(i).children(0).addClass("current").parent().siblings().children(0).removeClass("current");
            }
        }
    });
    //窗口改变之后 楼层随之改变位置
    resize();
    window.onresize  = resize;
    function resize(){
        var clientWidth = getClient().clientWidth;
        if(clientWidth>=1920){
            $(".fn-fixed").css({"left":280});
            $(".weixin-fixed").css({"left":60});
        }if(clientWidth<=1880){
            $(".fn-fixed").css({"left":240});
            $(".weixin-fixed").css({"left":20});
        }if(clientWidth<=1780){
            $(".fn-fixed").css({"left":200});
            $(".weixin-fixed").css({"left":-200});
        }if(clientWidth<=1680){
            $(".fn-fixed").css({"left":100});
        }
        if(clientWidth<=1580){
            $(".fn-fixed").css({"left":80});
        }
        if(clientWidth<=1480){
            $(".fn-fixed").css({"left":60});
        }if(clientWidth<=1380){
            $(".fn-fixed").css({"left":10});
        }if(clientWidth<=1280){
            $(".fn-fixed").css({"left":0});
        }
    };
    //右侧广告显示隐藏
   $(function () {
       //右侧广告显示隐藏
       var onOff = false;
       //注册多个事件
       $(".lot-trade>.lot-trade-1").on({"click": function () {
           if(onOff){
               $(".hide-right").stop().animate({"right":-240});
               onOff = false;
           }else{
               $(".hide-right").stop().animate({"right":0});
               onOff = true;
           }
       },"mouseenter": function () {
           $(this).children(0).children("img").attr("src","../images/bl-hover.gif");
       },"mouseleave": function () {
           $(this).children(0).children("img").attr("src","../images/bl1.gif");
       }});
       //fixes-right-hide-1手风琴
       $(".fixes-right-hide-1>ul>li").click(function () {
           $(this).children("div").stop().slideDown(500).parent().siblings().children("div").stop().slideUp(500);
       });
       //购物车样式
       $(".lot-trade-shop-car").on({"mouseenter": function () {
           $(this).css("backgroundColor","#3FA600").children("b").css("backgroundPositionY","bottom");
       },"mouseleave": function () {
           $(this).css("backgroundColor","").children("b").css("backgroundPositionY","top");
       },"click": function () {
           if(onOff){
               $(".hide-right").stop().animate({"right":-240});
               onOff = false;
           }else{
               $(".hide-right").stop().animate({"right":0});
               onOff = true;
           }
       }});
       //下面返回顶部li
       var leftX = ["-34px","-68px","-102px","-136px"]
       var leftx;
       for(var i =0;i<leftX.length;i++){
           leftx = leftX[i];
           var index = i+1;
           $(".fixed-list>li>a").eq(index).css("backgroundPosition",""+leftx+" 0");
       }
       $(".fixed-list>li").mouseenter(function () {
           $(this).children("a").css("backgroundPositionY","bottom");
           $(this).children("span").stop().show().stop().animate({"left":-100});
           $(this).children("span.span1314").stop().animate({"left":-154,"top":-60});
       });
       $(".fixed-list>li").mouseleave(function () {
           $(this).children("a").css("backgroundPositionY","top");
           $(this).children("span").stop().hide().stop().animate({"left":0});
       });

   });


});

