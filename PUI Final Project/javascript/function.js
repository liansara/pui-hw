$(window).scroll(function () {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    $('.parallax--bg').css('position', 'center ' + (wScroll) + 'px')
}


// trying to copy https://www.youtube.com/watch?v=SmolT-tV5Lw&t=295s