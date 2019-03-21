
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
            let id = $(this).attr('href');
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


var elem = $(".fadein-fast");
function isScrolledIntoView(elem, window) {
    var docViewTop = $(window).scrollTop() + 400;
    var docViewBottom = docViewTop + $(window).height() -400;
    
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();
    
    return (docViewBottom <= elemBottom && elemTop <= docViewTop);
}
$(document).on("scroll", function () {
    if (isScrolledIntoView(elem, window)) {
        elem.addClass("ff");
                $(".fadein-fast").css('opacity', '1');
    } 
});



// Fly In left 
var elem2 = $(".flyin-left");
function isScrolledIntoView(elem2) {
    var docViewTop = $(window).scrollTop() + 400;
    var docViewBottom = docViewTop + $(window).height() - 400;
    
    var elemTop = elem2.offset().top;
    var elemBottom = elemTop + elem2.height();
    
    return (docViewBottom <= elemBottom && elemTop <= docViewTop);
}
$(document).on("scroll", function () {
    if (isScrolledIntoView(elem2)) {
        elem2.addClass("fll");
                elem2.show();
                elem2.css('opacity', '1');
    }
});

// Fly In Right
var elem3 = $(".flyin-right");
function isScrolledIntoView(elem3) {
    var docViewTop = $(window).scrollTop() + 400;
    var docViewBottom = docViewTop + $(window).height() -400;
    
    var elemTop = elem3.offset().top;
    var elemBottom = elemTop + elem3.height();
    
    return (docViewBottom <= elemBottom && elemTop <= docViewTop);
}
$(document).on("scroll", function () {
    if (isScrolledIntoView(elem3)) {
                elem3.show();
        elem3.addClass("flr");
                elem3.css('opacity', '1');
    }
});
