$(function () {
    /**
     * Created by Administrator on 2016/6/27.
     */
//动态生成 背景图 动态创建分类div
//全部商品分类改变样式 添加图片
    var images = ["url(../images/icon1.png)","url(../images/icon2.png)","url(../images/icon3.png)","url(../images/icon4.png)","url(../images/icon5.png)","url(../images/icon6.png)","url(../images/icon7.png)","url(../images/icon8.png)","url(../images/icon9.png)","url(../images/icon10.png)","url(../images/icon11.png)"];
//设置icon
    for(var i =0;i<images.length;i++){
        var img = images[i];
        $(".lcfnav-good-sort .title>b").eq(i).css("backgroundImage",img);
    }
//模拟数据  水果
    var dates = [
        {
            "title":"国产水果>",
            "line":"|",
            "list1":"苹果",
            "list2":"梨芒",
            "list3":"果樱桃",
            "list4":"草莓",
            "list5":"香蕉",
        },
        {
            "title":"海鲜水产>",
            "line":"|",
            "list1":"虾类",
            "list2":"鱼类",
            "list3":"海参",
            "list4":"蟹类",
            "list5":"肉类",
        },
        {
            "title":"国产水果>",
            "line":"|",
            "list1":"苹果",
            "list2":"梨芒",
            "list3":"果樱桃",
            "list4":"草莓",
            "list5":"哈密瓜",
        },
        {
            "title":"生肉禽蛋>",
            "line":"|",
            "list1":"进口肉食",
            "list2":"羊肉",
            "list3":"猪肉",
            "list4":"禽肉",
            "list5":"蛋类",
        },
        {
            "title":"国产水果>",
            "line":"|",
            "list1":"苹果",
            "list2":"梨芒",
            "list3":"果樱桃",
            "list4":"草莓",
            "list5":"哈密瓜",
        },
        {
            "title":"生肉禽蛋>",
            "line":"|",
            "list1":"进口肉食",
            "list2":"羊肉",
            "list3":"猪肉",
            "list4":"禽肉",
            "list5":"肉类",
        },
        {
            "title":"生肉禽蛋>",
            "line":"|",
            "list1":"进口肉食",
            "list2":"羊肉",
            "list3":"猪肉",
            "list4":"牛肉",
            "list5":"禽肉",
        },
        {
            "title":"国产水果>",
            "line":"|",
            "list1":"苹果",
            "list2":"梨芒",
            "list3":"果樱桃",
            "list4":"草莓",
            "list5":"西瓜",
        },
        {
            "title":"生肉禽蛋>",
            "line":"|",
            "list1":"进口肉食",
            "list2":"羊肉",
            "list3":"猪肉",
            "list4":"牛肉",
            "list5":"禽肉",
        },
        {
            "title":"国产水果>",
            "line":"|",
            "list1":"苹果",
            "list2":"梨芒",
            "list3":"果樱桃",
            "list4":"草莓",
            "list5":"西瓜",
        },
        {
            "title":"生肉禽蛋>",
            "line":"|",
            "list1":"进口肉食",
            "list2":"羊肉",
            "list3":"猪肉",
            "list4":"牛肉",
            "list5":"禽肉",
        },
        {
            "title":"国产水果>",
            "line":"|",
            "list1":"苹果",
            "list2":"梨芒",
            "list3":"果樱桃",
            "list4":"草莓",
            "list5":"西瓜",
        }
    ];
    var dates1 = [
        {
            "title":"进口生鲜>",
            "line":"|",
            "list1":"羊肉",
            "list2":"猪肉",
            "list3":"牛肉",
            "list4":"鸡肉",
            "list5":"鳄鱼肉",
        },
        {
            "title":"进口水果>",
            "line":"|",
            "list1":"牛油果",
            "list2":"柠檬",
            "list3":"火龙果",
            "list4":"榴莲",
            "list5":"提子",
        }
    ];
    var dates2 = [
        {
            "title":"进口食品>",
            "line":"|",
            "list1":"进口海外直采",
            "list2":"进口牛奶/奶粉",
            "list3":"进口饮料/水",
            "list4":"进口咖啡茶叶",
            "list5":"进口冲饮果茶",
        },
        {
            "title":"环球百货>",
            "line":"|",
            "list1":"全球美食",
            "list2":"母婴童区",
            "list3":"美妆个护",
            "list4":"营养健康",
            "list5":"家居日用",
        }
    ];

    for(var i=0;i<$(".itme").length;i++){
        $(".itme").eq(i).append('<div class="header-good-sort fl"></div>');
        $(".itme").eq(i).children("div").addClass("list"+i);
    }

    function creatGoodSort(element,datas){
           for(var j =0;j<datas.length;j++){
           var date = datas[j];
           $(""+element+"").append(' <div class="china-fruits">' +
           '<h2 class="title-h2 fl">' +
           '<a href="#">'+date.title+'</a>' +
           '</h2>' +
           '<ul class="fl">' +
           '<li class="line">'+date.line+'</li>' +
           '<li><a href="#">'+date.list1+'</a></li>' +
           '<li class="line">'+date.line+'</li>' +
           '<li><a href="#">'+date.list2+'</a></li>' +
           '<li class="line">'+date.line+'</li>' +
           '<li><a href="#">'+date.list3+'</a></li>' +
           '<li class="line">'+date.line+'</li>' +
           '<li><a href="#">'+date.list4+'</a></li>' +
           '<li class="line">'+date.line+'</li>' +
           '<li><a href="#">'+date.list5+'</a></li></ul></div>');
           }
    };
    //全部商品1
    creatGoodSort(".list0",dates);
    //全部商品2
    creatGoodSort(".list1",dates1);
    //全部商品3
    creatGoodSort(".list2",dates2);
    //全部商品4
    creatGoodSort(".list3",dates);
    //全部商品5
    creatGoodSort(".list4",dates1);
    //全部商品6
    creatGoodSort(".list5",dates2);
    //全部商品7
    creatGoodSort(".list6",dates);
    //全部商品8
    creatGoodSort(".list7",dates1);
    //全部商品9
    creatGoodSort(".list8",dates2);
    //全部商品10
    creatGoodSort(".list9",dates);
    //全部商品11
    creatGoodSort(".list10",dates1);
  /*  //itme0
    for(var j =0;j<dates.length;j++){
        var date = dates[j];
        $(".list0").append(' <div class="china-fruits">' +
            '<h2 class="title-h2 fl">' +
            '<a href="#">'+date.title+'</a>' +
            '</h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list1+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list2+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list3+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list4+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list5+'</a></li></ul></div>');
    }
    //itme1
    for(var j =0;j<dates1.length;j++){
        var date1 = dates1[j];
        $(".list1").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date1.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list1+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list2+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list3+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list4+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list5+'</a></li></ul></div>');
    }
    //itme2
    for(var j =0;j<dates2.length;j++){
        var date2 = dates2[j];
        $(".list2").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date2.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list1+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list2+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list3+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list4+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list5+'</a></li></ul></div>');
    }
    //itme3
    for(var j =0;j<dates.length;j++){
        var date = dates[j];
        $(".list3").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list1+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list2+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list3+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list4+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list5+'</a></li></ul></div>');
    }
    //itme4
    for(var j =0;j<dates1.length;j++){
        var date1 = dates1[j];
        $(".list4").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date1.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list1+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list2+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list3+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list4+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list5+'</a></li></ul></div>');
    }
    //itme5
    for(var j =0;j<dates2.length;j++){
        var date2 = dates2[j];
        $(".list5").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date2.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list1+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list2+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list3+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list4+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list5+'</a></li></ul></div>');
    }
    //itme6
    for(var j =0;j<dates.length;j++){
        var date = dates[j];
        $(".list6").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list1+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list2+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list3+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list4+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list5+'</a></li></ul></div>');
    }
    //itme7
    for(var j =0;j<dates1.length;j++){
        var date1 = dates1[j];
        $(".list7").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date1.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list1+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list2+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list3+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list4+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list5+'</a></li></ul></div>');
    }
    //itme8
    for(var j =0;j<dates2.length;j++){
        var date2 = dates2[j];
        $(".list8").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date2.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list1+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list2+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list3+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list4+'</a></li>' +
            '<li class="line">'+date2.line+'</li>' +
            '<li><a href="#">'+date2.list5+'</a></li></ul></div>');
    }
    //itme9
    for(var j =0;j<dates.length;j++){
        var date = dates[j];
        $(".list9").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list1+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list2+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list3+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list4+'</a></li>' +
            '<li class="line">'+date.line+'</li>' +
            '<li><a href="#">'+date.list5+'</a></li></ul></div>');
    }
    //itme10
    for(var j =0;j<dates1.length;j++){
        var date1 = dates1[j];
        $(".list10").append(' <div class="china-fruits"><h2 class="title-h2 fl"><a href="#">'+date1.title+'</a></h2>' +
            '<ul class="fl">' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list1+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list2+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list3+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list4+'</a></li>' +
            '<li class="line">'+date1.line+'</li>' +
            '<li><a href="#">'+date1.list5+'</a></li></ul></div>');
    }*/

//鼠标放入li的样式
    $(".lcfnav-good-sort .itme").mouseenter(function () {
        $(this).css("backgroundColor","#ffffff").siblings().css("backgroundColor","");
        $(this).children(0).children("a").css("color","#3a9900");
        $(this).children(0).children("b").css("backgroundPosition","right");
        $(this).children(".header-good-sort").stop().fadeIn(200);
        $(this).children(".header-good-sort").addClass("current");

    });
//鼠标离开li的样式
    $(".lcfnav-good-sort .itme").mouseleave(function () {
        $(this).css("backgroundColor","");
        $(this).children(0).children("a").css("color","#ffffff");
        $(this).children(0).children("b").css("backgroundPosition","left");
        $(this).children(".header-good-sort").stop().fadeOut(200);
        $(this).children(".header-good-sort").addClass("current")
    });

});