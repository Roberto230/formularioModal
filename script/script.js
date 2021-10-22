$(function(){

    oppenWindow();
    clousedWindow();

    function oppenWindow(){
       
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn(); 
        })
    }

    function clousedWindow(){
        var el = $('body,closeForm');

        el.click(function(){
            $('.bg').fadeOut();
        })

        $('form').click(function(e){
            e.stopPropagation();
        })
    }

});