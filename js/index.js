// Header

    $(document).scroll(function(){
        var scrollTop = $(window).scrollTop(); 
        if (scrollTop < 300) {
            $("header").css("background-color","#1484e6")
        } else {
            $("header").css("background-color","#58b1ffec")
        }
    });


// 轮播图
lbt1=function(){
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,3000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==8) {index=0;}
        $(".content").animate({"left":-790*index},300);
        $(".index li").eq(index).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");
    }

    //定时器的控制
    $(".pic").hover(function(){
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    },function(){
        timer = setInterval(picLoop,1000);
        $(".left").hide();
        $(".right").hide();
    })

    $(".index li").mouseover(function(){
        $(this).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");
        index = $(this).index();
        $(".content").animate({"left":-790*index},300);

    })

    $(".left").click(function(){
        index--;
        if (index==-1) {index=7;}
        $(".content").animate({"left":-790*index},300);
        $(".index li").eq(index).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");
    })
    $(".right").click(function(){
        index++;
        if (index==8) {index=0}
        $(".content").animate({"left":-790*index},300);
        $(".index li").eq(index).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");    
    })
}
lbt2=function(){
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,3000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==8) {index=0;}
        $(".content").animate({"left":-400*index},300);
        $(".index li").eq(index).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");
    }

    //定时器的控制
    $(".pic").hover(function(){
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    },function(){
        timer = setInterval(picLoop,1000);
        $(".left").hide();
        $(".right").hide();
    })

    $(".index li").mouseover(function(){
        $(this).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");
        index = $(this).index();
        $(".content").animate({"left":-400*index},300);

    })

    $(".left").click(function(){
        index--;
        if (index==-1) {index=7;}
        $(".content").animate({"left":-400*index},300);
        $(".index li").eq(index).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");
    })
    $(".right").click(function(){
        index++;
        if (index==8) {index=0}
        $(".content").animate({"left":-400*index},300);
        $(".index li").eq(index).css("background-color","rgb(0, 89, 255)")
               .siblings().css("background-color","rgba(80, 151, 233, 0.3)");    
    })


}
$(window).resize(function(){
    if($(window).width()>900){
        lbt1();
    }
    if($(window).width()<=900){
        lbt2();
    }
})
// 瀑布流
$(document).ready(function(){
        $.ajax({
            type: 'POST',
            url:"./index.json",
            error: function() {
                alert('请求失败 ');
            },
            success: function(data) {
                ajaxobj=eval("("+data+")");
                var dataHtml = "";
                var item
                for(item=0;item< ajaxobj.list.length;item++){
                    dataHtml += `<a class="item" id="p+${ajaxobj.list[item].pid}">
                    <img  src="${ajaxobj.list[item].purl}" />
                </a>`
                }
                $(".btn").html(dataHtml);
                
            }
        });
    // });
});
$(function(){
    dialog=$(".login").dialog({
        autoOpen:false,
        height:400,
        width:400,
        modal:true,
    });
    $("#contact").button().on("click",".item",function(){
        dialog.dialog("open");
        var msg=$(this).html();
        $(".login").html(msg);
    });
});