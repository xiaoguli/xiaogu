/**
 * Created by Administrator on 2016/6/28.
 */
    //精选推荐1
//f1左侧
    var sorts1 = [
    {
        "titleh2": "进口食品",
        "span1": "1F",
        "itemer1": "牛奶乳品",
        "itemer2": "零食膨化",
        "itemer3": "零食膨化",
        "itemer4": "饮料及水",
        "itemer5": "饼干糕点",
        "itemer6": "进口餐厨",
        "src1": "../images/sortbg1.png",
        "alt1": "环球购",
        "titleh31": "精选推荐",
        "titleh32": "热卖推荐"
    }
    ];
    //左侧li背景图标
    var bgs = ["../images/sort-pic1.png", "../images/sort-pic2.png", "../images/sort-pic3.png", "../images/sory-pic4.png", "../images/sort-pic5.png", "../images/sort-pic6.png"];
    var liser1s = [{
        "href":"#",
        "src":"../images/sutiao.png",
        "span":"【韩国原装进口】 时怡蜂蜜黄油",
        "span1":"8.9"
    }];
    //精选推荐2
    var liser2s = [{
        "href":"#",
        "src":"../images/main-slider.png",
        "src1":"../images/main-slider1.png",
        "src2":"../images/main-slider2.png",
        "span":"海外采购",
        "span1":"夏季补冲",
        "span2":"健康用好锅"
    }];
    //精选推荐3
    var lisers = [
        {
            "href":"#",
            "src":"../images/sutiao2.png",
            "span":"【自营】 Kars牌坚果巧克力",
            "span1":"69"
        },
        {
            "href":"#",
            "src":"../images/sutiao3.png",
            "span":"【自营 常温酸奶】 suki 多美鲜",
            "span1":"109"
        },
        {
            "href":"#",
            "src":"../images/shutiao5.png",
            "span":"【自营】 Anchor",
            "span1":"79"
        },
        {
            "href":"#",
            "src":"../images/shutiao4.png",
            "span":"帕斯卡马龙蛋糕券",
            "span1":"98"
        },
        {
            "href":"#",
            "src":"../images/shutiao5.png",
            "span":"【自营】 Anchor",
            "span1":"79"
        }
    ];
    //热门推荐
    var lis = [
        {
            "href":"#",
            "src":"../images/sutiao2.png",
            "span":"【自营】 Kars牌坚果巧克力",
            "span1":"69"
        },
        {
            "href":"#",
            "src":"../images/shutiao5.png",
            "span":"【自营】 Anchor",
            "span1":"79"
        },
        {
            "href":"#",
            "src":"../images/shutiao4.png",
            "span":"帕斯卡马龙蛋糕券",
            "span1":"98"
        },
        {
            "href":"#",
            "src":"../images/shutiao5.png",
            "span":"【自营】 Anchor",
            "span1":"79"
        },
        {
            "href":"#",
            "src":"../images/sutiao.png",
            "span":"【韩国原装进口】 时怡蜂蜜黄油",
            "span1":"8.9"
        },
        {
            "href":"#",
            "src":"../images/sutiao3.png",
            "span":"【自营 常温酸奶】 suki 多美鲜",
            "span1":"109"
        },
        {
            "href":"#",
            "src":"../images/sutiao1.png",
            "span":"【自营】 YBARRA亿芭利特级初",
            "span1":"69"
        },

        {
            "href":"#",
            "src":"../images/sutiao3.png",
            "span":"【自营 常温酸奶】 suki 多美鲜",
            "span1":"109"
        }
    ];
    //创建1F
    $(".lcf-main").append('<div id="F1" class="lcfw lcf-main-two clearfix"></div>');
    creatMainFn(sorts1,".lcf-main-two",bgs,liser1s,liser2s,lisers,lis);
    //创建2F
    var sorts2 = [ {
    "titleh2": "生鲜日配",
    "span1": "2F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F2" class="lcfw lcf-main-2F lcf-main-two clearfix"></div>');
    creatMainFn(sorts2,".lcf-main-2F",bgs,liser1s,liser2s,lisers,lis);
    //创建3F
    var sorts3 = [ {
    "titleh2": "时令果蔬",
    "span1": "3F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F3" class="lcfw lcf-main-3F lcf-main-two clearfix"></div>');
    creatMainFn(sorts3,".lcf-main-3F",bgs,liser1s,liser2s,lisers,lis);
    //创建4F
    var sorts4 = [ {
        "titleh2": "奶制品",
        "span1": "4F",
        "itemer1": "牛奶乳品",
        "itemer2": "零食膨化",
        "itemer3": "零食膨化",
        "itemer4": "饮料及水",
        "itemer5": "饼干糕点",
        "itemer6": "进口餐厨",
        "src1": "../images/sortbg1.png",
        "alt1": "环球购",
        "titleh31": "精选推荐",
        "titleh32": "热卖推荐"
    }];
    $(".lcf-main").append('<div id="F4" class="lcfw lcf-main-4F lcf-main-two clearfix"></div>');
    creatMainFn(sorts4,".lcf-main-4F",bgs,liser1s,liser2s,lisers,lis);
    //创建5F
    var sorts5 = [ {
    "titleh2": "休闲保健",
    "span1": "5F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F5" class="lcfw lcf-main-5F lcf-main-two clearfix"></div>');
    creatMainFn(sorts5,".lcf-main-5F",bgs,liser1s,liser2s,lisers,lis);
    //创建6F
    var sorts6 = [ {
    "titleh2": "酒饮冲调茶叶",
    "span1": "6F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F6" class="lcfw lcf-main-6F lcf-main-two clearfix"></div>');
    creatMainFn(sorts6,".lcf-main-6F",bgs,liser1s,liser2s,lisers,lis);
    //创建7F
    var sorts7 = [ {
    "titleh2": "粮油副食",
    "span1": "7F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F7" class="lcfw lcf-main-7F lcf-main-two clearfix"></div>');
    creatMainFn(sorts7,".lcf-main-7F",bgs,liser1s,liser2s,lisers,lis);
    //创建8F
    var sorts8 = [ {
    "titleh2": "母婴玩具",
    "span1": "8F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F8" class="lcfw lcf-main-8F lcf-main-two clearfix"></div>');
    creatMainFn(sorts8,".lcf-main-8F",bgs,liser1s,liser2s,lisers,lis);
    //创建9F
    var sorts9 = [ {
    "titleh2": "个人清洁",
    "span1": "9F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F9" class="lcfw lcf-main-9F lcf-main-two clearfix"></div>');
    creatMainFn(sorts9,".lcf-main-9F",bgs,liser1s,liser2s,lisers,lis);
    //创建10F
    var sorts10 = [ {
    "titleh2": "家电家居",
    "span1": "10F",
    "itemer1": "牛奶乳品",
    "itemer2": "零食膨化",
    "itemer3": "零食膨化",
    "itemer4": "饮料及水",
    "itemer5": "饼干糕点",
    "itemer6": "进口餐厨",
    "src1": "../images/sortbg1.png",
    "alt1": "环球购",
    "titleh31": "精选推荐",
    "titleh32": "热卖推荐"
}];
    $(".lcf-main").append('<div id="F10" class="lcfw lcf-main-10F lcf-main-two clearfix"></div>');
    creatMainFn(sorts10,".lcf-main-10F",bgs,liser1s,liser2s,lisers,lis);

    //鼠标经过到li 图片淡入到哪
    $(".right-all-ul>li").mouseenter(function () {
        $(this).stop().fadeTo(100,0.7);
    })
    //鼠标离开到li 图片淡入到哪
    $(".right-all-ul>li").mouseleave(function () {
        $(this).stop().fadeTo(100,1);
    });


