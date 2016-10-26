$.fn.scrolljy = function() {

    this.prepend('<div class="scrolljy"><img src="./css/icon_scroll_down.png" /></div>');
    scrolljy = $(this);
    count = scrolljy.length;

    function fcCheck(){
        $.each(scrolljy, function( index, value ) {
            var test = (this.scrollHeight - this.offsetHeight);
            if (test > 0) {
                $(this).find('.scrolljy').show();
            } else {                    
                $(this).find('.scrolljy').hide();
            } 
        })
    }; fcCheck();

    //scroll
    $(this).scroll(function() {
        var jqpoolOptionCtrlScrolljy = $(this).find('.scrolljy');
        if (this.scrollTop > 80 ) {
            jqpoolOptionCtrlScrolljy.hide();
        } else {
            jqpoolOptionCtrlScrolljy.show();
        }       
    });

};

 
