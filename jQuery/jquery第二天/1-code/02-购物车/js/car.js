//全选和全不选功能
//当全选按钮应选下边
// console.log($('.checkall'));
$('.checkall').change(function () {
    $('.j-checkbox,.checkall').prop('checked', $(this).prop('checked'))
    if ($(this).prop('checked')) {
        $('.cart-item').addClass('check-cart-item')
        maxMoney()
    } else {
        $('.cart-item').removeClass('check-cart-item')
        maxMoney()
    }
})
$('.j-checkbox').change(function () {
    if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
        $('.checkall').prop('checked', true)
       
    } else {
        $('.checkall').prop('checked', false)
    }
    if ($(this).prop('checked') == true) {
        $(this).parent().parent().addClass('check-cart-item')
        maxMoney()
    } else {
        $(this).parent().parent().removeClass('check-cart-item')
        maxMoney()
    }
})
$('.increment').click(function () {
    var n = $(this).siblings('.itxt').val()
    $(this).siblings('.itxt').val(++n)
    // 计算小计模块
    var p = $(this).parents('.p-num').siblings('.p-price').html()
    p = p.substring(1)
    var price = (n * p).toFixed(2)
    $(this).parents('.p-num').siblings('.p-sum').html(`￥${price}`)
    maxMoney()
})
$('.decrement').click(function () {
    var n = $(this).siblings('.itxt').val()
    if (n == 1) {
        return false
    }
    $(this).siblings('.itxt').val(--n)

    // 计算小计模块
    var p = $(this).parents('.p-num').siblings('.p-price').html()
    p = p.substring(1)
    var price = (n * p).toFixed(2)
    $(this).parents('.p-num').siblings('.p-sum').html(`￥${price}`)
    maxMoney()
})
// 5.计算总额模块
function maxMoney() {
    var num = 0
    var money = 0
    // console.log( $('.j-checkbox:checked').parents('.cart-item').find('.itxt'));
    $('.j-checkbox:checked').parents('.cart-item').find('.itxt').each(function (i, ele) {
        num += parseFloat($(ele).val())
    })
    // console.log(num);
    $('.amount-sum em').html(num)
    // console.log(num);
    $('.j-checkbox:checked').parents('.cart-item').find('.p-sum').each(function (i, ele) {
        money += parseFloat($(ele).text().substring(1))
    })
    $('.price-sum em').html(`￥${money.toFixed(2)}`)
}
maxMoney() 
//6. 删除商品模块
// ①单独删除
console.log($('.p-action'));
$('.p-action a').click(function(){
    $(this).parents('.cart-item').remove()
    maxMoney() 
})
// ②删除选中的
$('.remove-batch').click(function () {
    $('.j-checkbox:checked').parents('.cart-item').remove()
    maxMoney() 
})
// ③清空购物车
$('.clear-all').click(function () {
    $('.cart-item').remove()
    maxMoney() 
})