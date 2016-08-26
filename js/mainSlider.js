/**
 * Created by Administrator on 2016/6/27.
 */
$(function () {
    //模拟数据
   var listers = [
       {
           "src":"../images/bg1.jpg",
           "href":"#",
           "text":"一品玉红枣夹核桃",
           "stext":"500g丨枣想核你在一起",
           "btext":"￥42.5"
       },
       {
           "src":"../images/bg2.jpg",
           "href":"#",
           "text":"四洲紫菜50束",
           "stext":"袋装40g丨脆烤香",
           "btext":" ￥21.9"
       },
       {
           "src":"../images/bg3.jpg",
           "href":"#",
           "text":" 加州原野厚西梅",
           "stext":" 45g*5丨源于加州",
           "btext":"￥8.9"
       },
       {
           "src":"../images/bg4.jpg",
           "href":"#",
           "text":"  蒙牛特仑苏纯牛奶箱装",
           "stext":"250ml*8丨赠起泡酒饮料750ml",
           "btext":"￥188"
       },
       {
           "src":"../images/bg5.jpg",
           "href":"#",
           "text":"好丽友巧克力派",
           "stext":" 68g*4丨超值！",
           "btext":" ￥1"
       },
       {
           "src":"../images/bg6.jpg",
           "href":"#",
           "text":" 蒙牛纯牛奶(利乐装)",
           "stext":"1L丨手慢无！",
           "btext":"￥1"
       },
       {
           "src":"../images/bg7.jpg",
           "href":"#",
           "text":"伊利纯牛奶箱装",
           "stext":"250ml*16丨营养满满",
           "btext":"￥36.5"
       },
       {
           "src":"../images/bg9.jpg",
           "href":"#",
           "text":" 塔莉亚Telya风味发酵乳",
           "stext":"200g*12丨中粮出品",
           "btext":"￥39.9"
       },
       {
           "src":"../images/bg8.jpg",
           "href":"#",
           "text":"品客薯片原味110g+洋葱110g",
           "stext":"双罐装丨双重享受",
           "btext":"￥12.9"
       },
       {
           "src":"../images/bg10.jpg",
           "href":"#",
           "text":"B&B保宁 洗衣香皂/甘菊香",
           "stext":"200g | 保护幼儿娇嫩肌肤",
           "btext":"￥121"
       }
   ];
    for(var i =0;i<listers.length;i++){
        var lister = listers[i];
        $(".lcf-main-squre").append(' <li>' +
            '<a class="lcf-main-linkImg" href="'+lister.href+'">' +
            '<img src="'+lister.src+'" alt="'+lister.text+'"/>' +
            '</a>' +
            '<div class="lcf-main-shop-ntro">' +
            '<a class="lcf-main-linkTxt" href="#">'+lister.text+'</a>' +
            '<span>'+lister.stext+'</span>' +
            '<b>'+lister.btext+'</b>' +
            ' </div></li>');
    }
    //鼠标移动到li上面发生渐变
    $(".lcf-main-sreen li").mouseenter(function () {
        $(this).css("borderColor","#43AD53");
        $(this).children(".lcf-main-shop-ntro").css("backgroundColor","#43AD53");
    });
    //鼠标离开li发生返回渐变
    $(".lcf-main-sreen li").mouseleave(function () {
        $(this).css("borderColor","#ffffff");
        $(this).children(".lcf-main-shop-ntro").css("backgroundColor","#FFF");
    });

    <!-- main 轮播-->
    var target = $(".lcf-main-sreen")[0].offsetWidth;
    //上一页
    $(".prve").click(function () {
        $(".lcf-main-squre").animate({"left":0},300);
    });
    //下一页
    $(".next").click(function () {
        $(".lcf-main-squre").animate({"left":-target},300);
    });
});