// $(window).scroll(function () {
//     parallax();
// })

// function parallax() {
//     var wScroll = $(window).scrollTop();
//     $('.parallax--bg').css('position', 'center ' + (wScroll) + 'px')
// }


// trying to copy https://www.youtube.com/watch?v=SmolT-tV5Lw&t=295s


var elements = document.querySelectorAll('#pink_car');

anime({
    targets: "#bizIntTitle",
    translateX: 50
});

anime({
    targets: "#vendorTitle",
    translateX: 50
});

anime({
    targets: "#opsTitle",
    translateX: 50
});

anime({
    targets: "#auditTitle",
    translateX: 50
});