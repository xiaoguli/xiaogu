/**
 * Created by Administrator on 2016/6/27.
 */
$(function () {
   var pics = [
      {
         "src":"../images/pic7.1.png",
         "alt":"充值"
      },
      {
         "src":"../images/pic8.1.png",
         "alt":"我买宝"
      },
      {
         "src":"../images/pic2.1.png",
         "alt":"VIP"
      },
      {
         "src":"../images/pic9.1.png",
         "alt":"积分商城"
      },
      {
         "src":"../images/pic3.1.png",
         "alt":"环球百货"
      },
      {
         "src":"../images/pic1.1.png",
         "alt":"宝宝中心"
      },
      {
         "src":"../images/pic5.1.png",
         "alt":"电子礼卡"
      },
      {
         "src":"../images/pic4.1.png",
         "alt":"大客户"
      },
      {
         "src":"../images/pic6.1.png",
         "alt":"尊享卡"
      }
   ];

   $(".lcf-news-icon").append("<ul></ul>");
   for(var i=0;i<pics.length;i++){
      var pic1 = pics[i];
      $(".lcf-news-icon>ul").append(
          ' <li><a class="pic1" href="#">' +
          '<img src="'+pic1.src+'" alt="'+pic1.alt+'"/>' +
          '</a>' +
          '</li>'
      );
   }
   //当前高亮显示  其他隐藏显示
   $(".lcf-news-icon>ul>li").mouseenter(function () {
          $(this).fadeTo(10,1).siblings().stop().fadeTo(100,0.8);
      });
   $(".lcf-news-icon>ul>li").mouseleave(function () {
      $(".lcf-news-icon>ul>li").stop().fadeTo(100,1);
   });
});