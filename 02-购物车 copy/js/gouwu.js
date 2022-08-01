$('.checkall').change(function() {
    $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'))
    if($(this).prop('checked') == true) {
        $('.cart-item').addClass('check-cart-item')
    }else {
        $('.cart-item').removeClass('check-cart-item')
    }
})
$('.j-checkbox').change(function() {
    if($('.j-checkbox:checked').length==$('.j-checkbox').length){
        $('.checkall').prop('checked',true)
        
    }else {
        $('.checkall').prop('checked',false)
    }
})