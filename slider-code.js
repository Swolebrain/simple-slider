$(function(){
    $("#first").toggle(); 
    var currentIndex = 0,
        items = $('.caroussel-container div'),
        itemAmt = items.length;
    
    function cycleItems() {
        var item, fadeIn;
        for (var i = 0; i < itemAmt; i++) {
            var elem = items.eq(i); 
            if (elem.css("display") != "none") {
                item = elem;
                if (i == itemAmt-1) 
                    fadeIn = items.eq(0);
                else
                    fadeIn = items.eq(i+1);
                break;
            }
        }
        item.hide("drop");
        fadeIn.toggle("fade");
    }
    
    var autoSlide = setInterval(function() {
        cycleItems();
    }, 3000);
});