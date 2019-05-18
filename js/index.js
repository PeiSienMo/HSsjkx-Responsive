/*Editor Mo;Time 2019/5/18;Tool idea;Tel 15360694561*/
$(document).ready(function () {
    //定义变量获取屏幕视口宽度
    var windowWidth = parseInt($(window).width());
    if(windowWidth > 992){
        $(".dropdown").hover(function () {
            $(this).addClass("open");
            var a = $(this).find("a").first();
            $(a).attr("aria-expanded","true");
        },function () {
            $(this).removeClass("open");
            var a = $(this).find("a").first();
            $(a).attr("aria-expanded","false");
        });
    }
    $(function() {
        //轮播图自动播放
        $('#myCarousel').carousel({
            interval: 3000,//自动播放4s

        });
    });

});