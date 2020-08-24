let label = $('.product-item__label');
let input = '.product-item__input';
let text = '.product-item__text';
let link = $('.product-item__link');

$(input).each(function(){
    if($(this).prop('disabled') == true){
        let subTitle = $(this).parent().find('.product-item__subtitle').text()
        $(this).parent().addClass('disabled');
        $(this).parent().parent().find(text).text(`Печалька, ${subTitle} закончился`);
     }
    if($(this).prop('checked') == true){
        $(this).parent().addClass('checked');
    }
});

label.on('change', function(){
    if($(this).find(input).prop('disabled', false)){
        $(this).toggleClass('checked');        
    }
});

link.click(function(){
    $(this).parent().parent().find('.product-item__label').toggleClass('checked')
    let inputProp = $(this).parent().parent().find('.product-item__input')
    inputProp.prop("checked", !inputProp.prop("checked"))
});

label.mouseleave(function(){
    if($(this).hasClass('checked')){
        $(this).find('.product-item__header').text('Котэ не одобряет?').css('color', '#d91667');
    }
});

label.mouseenter(function(){
    if($(this).hasClass('checked')){
        $(this).find('.product-item__header').text('Сказочное заморское яство').css('color', '#666666');
    }
});

