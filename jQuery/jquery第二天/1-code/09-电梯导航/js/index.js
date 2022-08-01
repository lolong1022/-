
var boxTop = $('.recommend').offset().top;
var flag = true
$(document).scroll(function () {
    //当我们滚动 rexommend 模块，就让电梯导航显示
    if ($(document).scrollTop() >= boxTop) {
        $('.fixedtool').fadeIn()
    } else {
        $('.fixedtool').fadeOut()
    }
if(flag) {
    $.each($('.floor .w'), function (index, ele) {
        var top = $(ele).offset().top
        if ($(document).scrollTop() >= top) {
            $('.fixedtool li').eq(index).addClass('current').siblings('li').removeClass()
        }
    })
}
    
})

$('.fixedtool li').click(function () {
    flag = false
    var index = $(this).index()
    // console.log(index);
    var top = Math.ceil($('.floor .w').eq(index).offset().top+1)
    console.log(('.floor .w'));
    console.log(top);
    $('html').stop().animate({
        scrollTop: top
    },   function() {
        flag=true
    })
 
})

