/**
 * Created by Administrator on 2016/6/27.
 */
//banner图

    //轮播图
$(document).ready(function() {
    //模拟数据库的数据
    var datas = [
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-1.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-2.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-3.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-4.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-5.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-6.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-7.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-8.jpg"
        },
        {
            "href":"#",
            "target":"_blank",
            "alt":"我买网",
            "title":"我买网",
            "src":"../images/banner-9.jpg"
        }
    ];
    $(".slider").append('<ul class="slider-main"></ul>');
    for(var i=0;i<datas.length;i++){
        var data = datas[i];
        $(".slider-main").append('<li class="slider-panel">' +
            '<a href="'+data.href+'" target="'+data.target+'"  >' +
            '<img src="'+data.src+'" title="'+data.title+'" alt="'+data.alt+'" />' +
            '</a></li>');
    }
    $(".slider").append('<div class="slider-extra"></div>');
    $(".slider-extra").append('<ul class="slider-nav"></ul>');
    for(var i =0;i<$(".slider-main").children("li").length;i++){
        $(".slider-nav").append('<li class="slider-item">'+(i+1)+'</li>');
    }
    $(".slider-extra").append('<div class="slider-page">' +
        '<a class="slider-pre" href="javascript:;;"><</a>' +
        '<a class="slider-next" href="javascript:;;">></a>' +
        '</div>');

});
$(function () {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.slider-panel').length;
    //将除了第一张图片隐藏
    $('.slider-panel:not(:first)').hide();
    //将第一个slider-item设为激活状态
    $('.slider-item:first').addClass('slider-item-selected');
    //隐藏向前、向后翻按钮
    $('.slider-page').hide();
    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.slider-panel, .slider-pre, .slider-next').hover(function() {
        stop();
        $('.slider-page').show();
    }, function() {
        $('.slider-page').hide();
        start();
    });
    $('.slider-item').hover(function(e) {
        stop();
        var preIndex = $(".slider-item").filter(".slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex);
    }, function() {
        start();
    });
    $('.slider-pre').unbind('click');
    $('.slider-pre').bind('click', function() {
        pre();
    });
    $('.slider-next').unbind('click');
    $('.slider-next').bind('click', function() {
        next();
    });
    /**
     * 向前翻页
     */
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    /**
     * 向后翻页
     */
    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.slider-panel').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);
        $('.slider-item').removeClass('slider-item-selected');
        $('.slider-item').eq(currentIndex).addClass('slider-item-selected');
    }
    /**
     * 开始轮播
     */
    function start() {
        if(!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }
    /**
     * 停止轮播
     */
    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();
});