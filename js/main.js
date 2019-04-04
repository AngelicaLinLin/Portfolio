
//Navigation
class StickyNavigation {
    
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.homePage1').click(function() { 
            self.onTabClick(event, $(this)); 
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
    }
    
    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
    }
    
    onScroll() {
        this.checkTabContainerPosition();
    this.findCurrentTabSelector();
    }
    
    onResize() {
        if(this.currentId) {
            this.setSliderCss();
        }
    }
    
    checkTabContainerPosition() {
        let offset = $('.homePage').offset().top + $('.homePage').height() - this.tabContainerHeight;
        if($(window).scrollTop() > offset) {
            $('.homePage-container').addClass('homePage-container--top');
        } 
        else {
            $('.homePage-container').removeClass('homePage-container--top');
        }
    }
    
    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.homePage1').each(function() {
            let id = $(this);//.attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if(this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }
    
    setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.homePage1-slider').css('width', width);
        $('.homePage1-slider').css('left', left);
    }
    
}

new StickyNavigation();


//scroll animation
$(document).ready(function() {
var windowResponsive = $(window).width();

if(windowResponsive > 1000) {
    windowResponsive = 800;
} else {
    windowResponsive = 900;
}
    // Fly In left 
    var elem2 = $(".flyin-left");

     $(document).on("scroll", function () { 
        if($(window).scrollTop() > elem2.offset().top - windowResponsive) {
            elem2.addClass("flyinLeft");
            elem2.removeClass("flyin-left");
                    elem2.show();
                    elem2.css('opacity', '1');
        }
    });

    // Fly In left 2
    var elem1 = $(".flyin-left-2");
     $(document).on("scroll", function () {
        if ($(window).scrollTop() > elem1.offset().top - windowResponsive) {
            elem1.addClass("flyinLeft");
            elem1.removeClass("flyin-left-2");
                    elem2.show();
                    elem2.css('opacity', '1');
        }
    });

    // Fly In Right
    var elem3 = $(".flyin-right");

    $(document).on("scroll", function () {
console.log($(window).width() * 1.4);
        if ($(window).scrollTop() > elem3.offset().top - windowResponsive) {
                    elem3.show();
            elem3.addClass("flyinRight");
            elem3.removeClass("flyin-right");
                    elem3.css('opacity', '1');
        }
    });
})
