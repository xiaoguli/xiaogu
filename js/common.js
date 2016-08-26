    /**
     * Created by Administrator on 2016/6/6.
     */
    //通过id找对应的对象
    function my$(id) {
        return document.getElementById(id);
    };
    //innerText工具
    var InnerTexts = {
        //获dom对象的innerText的取值
        getInnerText: function (element) {
            //判断当前浏览器是否支持innerText
            if (typeof element.innerText === "string") {
                return element.innerText;
            } else {
                return element.textContent;
            }
        },
        //设置dom对象的innerText
        setInnerText: function (element, content) {
            if (typeof element.innerText === "string") {
                element.innerText = content;
            } else {
                element.textContent = content;

            }
        }
    };
    //获dom对象的innerText的取值
    function getInnerText(element) {
        //判断当前浏览器是否支持innerText
        if(typeof element.innerText  === "string") {
            return element.innerText;
        }else{
            return element.textContent;
        }
    };

    //设置dom对象的innerText
    function setInnerText(element, content) {
        if(typeof element.innerText === "string") {
            element.innerText = content;
        }else{
            element.textContent = content;

        }
    };
    //获取element下一个兄弟元素
    function getNextElementSibling(element){
        //能力检测 判断是否支持nextElementSibling
        if(element.nextElementSibling){
            return element.nextElementSibling;
        }else{
            //获取下一个兄弟节点
            var node = element.nextSibling;
            //如果没有下一个节点，此时null
            while(node && node.nodeType !== 1){
                //如果不支持 当前节点的下一个节点的
                node = node.nextSibling;
            }
            return node;
        }
    };
    //获取element上一个兄弟元素
    function getPreviousElementSibling(element){
        //能力检测 判断是否支持nextElementSibling
        if(element.previousElementSibling){
            return element.previousElementSibling;
        }else{
            //获取上一个兄弟节点
            var node = element.previousSibling;
            //如果没有上一个节点，此时null
            while(node && node.nodeType !== 1){
                //如果不支持 当前节点的上一个节点的
                node = node.previousSibling;
            }
            return node;
        }
    };
    //获取第一个子元素 屏蔽浏览器的差异
    function getFirstElementChild(element){
        //能力检测 判断是否支持firstElementChild
        if(element.firstElementChild){
            //支持返回元素
            return element.firstElementChild;
        }else{
            //不知此判断下一个兄弟节点
            var node = element.firstChild;
            while(node && node.nodeType !==1){
                //判断当前节点的下一个子节点
                node = node.nextSibling;
            }
            return node;
        }
    };
    //获取最后一个子元素 屏蔽浏览器的差异
    function getLastElementChild(element){
        //能力检测 判断是否支持firstElementChild
        if(element.lastElementChild){
            //支持返回元素
            return element.lastElementChild;
        }else{
            //不知此判断下一个兄弟节点
            var node = element.lastChild;
            while(node && node.nodeType !==1){
                //判断当前节点的下一个子节点
                node = node.previousSibling;
            }
            return node;
        }
    };

    //将日期对象 转换为日期格式的字符串
    function getDate(date){
        if(!(date instanceof Date)){
            return;
        }
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute  = date.getMinutes();
        var second = date.getSeconds();
        /*month = month<10 ? "0"+month :month;
         day = day<10 ? "0"+day :day;
         hour = hour<10 ? "0"+hour :hour;
         minute = minute<10 ? "0"+minute :minute;
         second = second<10 ? "0"+second :second;*/
        month = checkTime(month);
        day = checkTime(day);
        hour = checkTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);
        function checkTime(i){
            if (i<10)
            {i="0" + i}
            return i
        }
        return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
    };

    //事件处理工具
    var EventTools = {
        //注册事件的三种方式
        addEventListener: function (element,eventName,handler) {
            //判断是否支持addEventListener
            if(element.addEventListener){
                //支持返回
                return element.addEventListener("on"+eventName,handler,false);
                //判断是否支持attachEvent
            }else if(element.attachEvent){
                //支持返回
                return element.attachEvent("on"+eventName,handler);
            }else{
                //都不支持返回
                return element["on"+eventName] = handler;
            }
        },
        //移除事件的三种方式
        removeEventListener: function (element, eventName, handler) {
            //判断是否支持removeEventListener
            if(element.removeEventListener){
                //支持返回
                return element.removeEventListener("on"+eventName,handler,false);
                //判断是否支持detachEvent
            }else if(element.detachEvent){
                //支持返回
                return element.detachEvent("on"+eventName,handler);
            }else{
                //都不支持
                return element["on"+eventName] = handler;
            }
        },
        //获取事件对象 兼容ie8
        getEvent: function (event) {
            //支持event返回event不支持返回window.event(ie8之前)
            return event ? event : window.event;
        },
        //target兼容浏览器
        getTarget: function (event) {
            //支持event.target返回event.target不支持返回event.srcElement(ie8之前)
            return event.target ? event.target : event.srcElement;
        },
        //阻止事件冒泡兼容浏览器ie8之前
        stopPropagation : function (event) {
            //判断是否支持stopPropagation
            if(event.stopPropagation){
                //支持返回event.stopPropagation();
                event.stopPropagation();
            }else{
                //不支持返回event.cancelBubble = false;这个是ie之前所用
                event.cancelBubble = true;
            }
        },
        //取消默认行为的执行兼容浏览器
        preventDefault: function (event) {
            //判断是否支持event.preventDefault
            if(event.preventDefault){
                //支持event.preventDefault();
                event.preventDefault();
            }else{
                //不支持 返回event.returnValue = false;（ie8之前）
                event.returnValue = false;
            }
        },
        //IE8兼容pageX
        getPageX: function (event) {
            //判断是否支持pageX
            if(event.pageX){
                //支持直接返回
                return event.pageX;
            }else{
                //因ie8之前没有支持文档位置 所以需要自己算 有的浏览器支持document.documentElement.scrollLeft 有的浏览器支持document.body.scrollLeft
                var scrollLeft = document.documentElement.scrollLeft||document.body.scrollLeft;
                //滚出浏览器的距离 + 鼠标离窗口的距离
                return scrollLeft + event.clientX;
            }
        },
        //IE8兼容pageY
        getPageY: function (event) {
            //判断是否支持pageY
            if(event.pageY){
                //支持直接返回
                return event.pageY;
            }else{
                //因ie8之前没有支持文档位置 所以需要自己算 有的浏览器支持document.documentElement.scrollLeft 有的浏览器支持document.body.scrollLeft
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                return scrollTop + event.clientTop;
            }
        }
    };
    //获取页面滚动出去的距离 屏蔽浏览器的差异
    function getScroll(){
        var scrollTop = window.pageYOffset ||document.documentElement.scrollTop||document.body.scrollTop||0;
        var scrollLeft = window.pageXOffset ||document.documentElement.scrollLeft||document.body.scrollLeft||0;
        return {
            scrollTop:scrollTop,
            scrollLeft:scrollLeft
        };
    };
    //切换元素  eventElements 代表所有要点击的元素  chageElements 代表所有要改变元素
    function changeElements(eventElements,chageElements){
        //遍历所有的spans
        for(var i = 0;i < eventElements.length;i++){
            //找到每一个span
            var eventElement = eventElements[i];
            //给span设置索引属性
            eventElement.setAttribute('index',i);
            //注册事件
            eventElement.onmouseover = function () {
                //遍历每一个span清除他的class
                for(var i=0;i<eventElements.length;i++){
                    var eventElement = eventElements[i];
                    //移除class属性
                    eventElement.removeAttribute('class');
                }
                //给当前的span重新设置背景
                this.setAttribute('class','current');

                //获得当前span的索引
                var index = this.getAttribute('index');
                //遍历每个li,让所有li隐藏
                for(var i =0;i<chageElements.length;i++){
                    //找到每个li
                    var chageElement = chageElements[i];
                    //让所有li隐藏
                    chageElement.removeAttribute('class');
                }
                //找到span对应的li,让其显示
                chageElement = chageElements[index];
                //让span对应的li显示
                chageElement.setAttribute('class','current');
            };
        }
    };
    //缓动动画
    function animate(element, target) {
        //清除定时器
        if(element.timerId) {
            clearInterval(element.timerId);
        }

        element.timerId = setInterval(function () {
            var current = element.offsetLeft;
            var step = (target - current) / 5;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style.left = current + "px";

            if(step === 0) {
                clearInterval(element.timerId);
            }
        },15);
    };
	 //获取浏览器可视区域的大小
    function getClient() {
        return {
            clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
            clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
        }
    }
