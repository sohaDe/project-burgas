$('.tab-switch li').click(function() {
    //add selected class to active link
    $(this).addClass('selected').siblings().removeClass('selected'); 

    //hide all dive
    $('.tabs-section .tabs-content > div').hide();

    //show div connected with this link
    $($(this).data('class')).show();
    
});