/**
 * Created by Alkali on 16/3/3.
 */
;(function(){
    window.onload = function(){
        var demo = document.getElementById("demo"),
            tap = document.createEvent('HTMLEvents'),
            body = document.getElementsByTagName("body")[0];
        var event = "tap 事件";
        tap.initEvent("tap", true, true);//事件名称，是否可以冒泡，是否阻止事件的默认操作

        //touchstart,touchmove,touchend事件发生时，触发tap事件。
        body.addEventListener("touchstart", function(e){
            e.preventDefault();
            event = "touchstart";
            demo.dispatchEvent(tap);
        }, false);

        body.addEventListener("touchmove", function(e){
            e.preventDefault();
            event = "touchmove";
            demo.dispatchEvent(tap);
        }, false);

        body.addEventListener("touchend", function(){
            event = "touchend";
            demo.dispatchEvent(tap);
        }, false);

        //绑定事件函数，规定在tap事件发生时改变div内文字
        demo.addEventListener("tap", function(){
            demo.innerHTML = event;
        }, false);
    }
})(window);