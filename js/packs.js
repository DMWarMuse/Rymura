$('.drop-down-show-hide').hide();

$('#packs').change(function () {
    $('.drop-down-show-hide').hide()    
    $('#' + this.value).show();
});
