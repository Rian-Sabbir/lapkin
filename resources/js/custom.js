// Hamburger Menu
function openMenu() {
    document.getElementById('side-bar').style.display = "block";
}

function closeMenu() {
    document.getElementById('side-bar').style.display = "none";
}


// Smooth Scroll===========
// Main menu
$(function(){
    $('.menu a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
    });
});
// Logo
$(function(){
    $('.logo a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
    });
});
// Side menu
$(function(){
    $('.side-menu-bar a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
    });
});
// Next arrow
$(function(){
    $('.next-arrow a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },1000);
    });
});
// Scroll Top
$(function(){
    $('.scroll-top-btn a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },2000);
    });
});

// Scroll Button
$(function(){
    $('.button-div a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },2000);
    });
});

// About btn
$(function(){
    $('.about-btn a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        },2000);
    });
});

// Scroll Top Icon Hide & Show
$('.scroll-top-btn').hide();

$(window).scroll(function(){
    var ourWindow = $(this).scrollTop();

    if(ourWindow<400){
        $('.scroll-top-btn').fadeOut();
    } else {
        $('.scroll-top-btn').fadeIn();
    }

});


// MIXITUP==========
var mixer = mixitup('.wk-container');

