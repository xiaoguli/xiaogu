/**
 * Created by Administrator on 2016/6/28.
 */
function creatMain(datas,element){
    for(var i =0;i<datas.length;i++){
        var sort = datas[i];
        element.append('<div class="fl lcf-main-left">' +
            '<h2>'+sort.titleh2+'</h2>' +
            '<div class="main-sort clearfix">' +
            '<div class="floor-one">' +
            '<span>'+sort.span1+'</span>' +
            ' </div><ul>' +
            '<li><a href="#">'+sort.itemer1+'</a></li>' +
            '<li><a href="#">'+sort.itemer2+'</a></li>' +
            '<li><a href="#">'+sort.itemer3+'</a></li>' +
            '<li><a href="#">'+sort.itemer4+'</a></li>' +
            '<li><a href="#">'+sort.itemer5+'</a></li>' +
            '<li><a href="#">'+sort.itemer6+'</a></li>' +
            '</ul>' +
            '<a class="link-bg" href="#">' +
            '<img class="lazy" data-original="'+sort.src1+'" alt="'+sort.alt1+'"/>' +
            '</a>' +
            ' </div></div>' +
            '<div class="fl lcf-main-right">' +
            '<h3><span class="current">'+sort.titleh31+'</span>' +
            '<span>'+sort.titleh32+'</span>' +
            ' </h3> <div class="right-all-sort-one clearfix">' +
            '<ul class="right-all-ul clearfix"></ul></div>' +
            '<div class="right-all-sort-two clearfix">' +
            ' <ul class="right-all-ul clearfix"></ul></div></div>');
    }
};
function createLi(datas,element){
    for(var i=0;i<datas.length;i++){
        var liser1 = datas[i]
        element.append('<li><a href="'+liser1.href+'">' +
            '<img class="lazy" data-original="'+liser1.src+'" alt="'+liser1.span+'"/></a>' +
            '<span><a href="'+liser1.href+'">'+liser1.span+'</a></span>' +
            '<span><b>￥</b>'+liser1.span1+'</span></li>');
    }
};
//创建楼层中的轮播
function createLi1(datas,element){
    for(var i=0;i<datas.length;i++){
        var liser2 = datas[i]
        element.append('<li class="right-all-sort-slider"><a  href="#">' +
            '<img class="lazy" data-original="'+liser2.src+'" alt="'+liser2.span+'"/></a><a href="'+liser2.href+'">' +
            '<img class="lazy" data-original="'+liser2.src1+'" alt="'+liser2.span1+'"/></a><a href="'+liser2.href+'">' +
            '<img class="lazy" data-original="'+liser2.src2+'" alt="'+liser2.span2+'"/></a>' +
            '<ul class="sort-slider-yuan">' +
            '<li class="current"></li>' +
            '<li></li><li></li></li>');
    }
};
//鼠标经过精选推荐
function hotRemd(element,element1){
    element.mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
       element1.eq(index).stop().show().siblings("div").hide();
    });
};
//鼠标经过圆点
function sliderYuan(element1,element2){
    element1.mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        var index = $(this).index();
        element2.eq(index).stop().show().siblings("a").hide();
    });
};

//创建楼层
function creatMainFn(data,element,bgs,datas1,datas2,datas3,datas4) {
//创建1F内容
    var element1 = $(element);
    creatMain(data, element1);
//背景图片
    for (var i = 0; i < bgs.length; i++) {
        var bg = bgs[i];
        var index = i;
        $(""+element+">.lcf-main-left ul li").eq(index).css("background", "url(" + bg + ") no-repeat");
    }
//精选推荐
    var ul1 = $(""+element+" .right-all-sort-one .right-all-ul");
//精选推荐1
    createLi(datas1, ul1);
//精选推荐2
    createLi1(datas2, ul1);
//精选推荐3
    createLi(datas3, ul1);
//热门推荐
    var ul2 = $(""+element+" .right-all-sort-two .right-all-ul");
    createLi(datas4, ul2);
//鼠标经过精选推荐
    var element0 = $(""+element+" .lcf-main-right>h3>span");
    var element1 = $(""+element+" .lcf-main-right>div");
    hotRemd(element0, element1);
//鼠标经过圆点
    var element2 = $(""+element+" .sort-slider-yuan li");
    var element3 = $(""+element+" .right-all-sort-slider>a");
    sliderYuan(element2, element3);
};

