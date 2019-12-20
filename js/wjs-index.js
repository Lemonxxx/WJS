/**
 * Created by itcast.
 */
$(function(){
  /*工具提示初始化*/
  $('[data-toggle="tooltip"]').tooltip();

    /*获取当前所有item*/
    var items=$(".carousel-inner .item");
    /*监听屏幕的大小改变*/
    $(window).on("resize",function(){
        /*1.获取当前屏幕的宽度*/
        var width=$(window).width();
        /*2.判断屏幕的宽度*/
        if(width>=768){/*说明非移动端*/
            /*为每一个item添加子元素--遍历*/
            $(items).each(function(index,value){
                var item=$(this);
                /*当前自定义属性中 存储的图片路径*/
                var imgSrc=item.data("largeImage");
                console.log(imgSrc);
                /*添加非移动端的子元素*/
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        }
        else{
            $(items).each(function(index,value){
                var item=$(this);
                var imgSrc=item.data("smallImage");
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            });
        }
    }).trigger("resize");

    /*添加移动端的滑动操作*/
    var startX,endX;
    var carousel_inner=$(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel=$(".carousel");

    carousel_inner.addEventListener("touchstart",function(e){
        startX= e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function(e){
        endX= e.changedTouches[0].clientX;
        if(endX-startX > 0){
            /*上一张*/
            carousel.carousel('prev');
        }
        else if(endX-startX < 0){
            /*下一张*/
            carousel.carousel('next');
        }
    });

    /*计算产品块导航项原始的宽度*/
  var ul=$(".wjs_product .nav-tabs");
  var lis=ul.find("li");
  var totalWidth = 0;
  lis.each(function (index,value) {
/*    console.log(value);*/
	totalWidth=totalWidth+$(value).innerWidth();
	/*获取宽度的方法*/
	/*1. width（）:只能得到当前元素的内容的宽度*/
	/*2. innerWidth（）：它可以得到当前元素的内容宽度和padding值*/
	/*3.outerWidth():它可以得到当前元素的内容宽度和padding值+broder*/
	/*4.outerWidth(true):它可以得到当前元素的内容宽度和padding值+broder+margin*/
  });
  ul.width(totalWidth);
  /*使用插件实现导航条的滑动操作*/
  var myScroll = new IScroll('.tabs_parent',{
	/*默认为垂直滑动，所以要实现水平滑动必须设置*/
	scrollX:true,scrollY:false
  });
});