//source: https://animejs.com/documentation/#cssSelector//


anime({
    targets: "#bizIntTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});

anime({
    targets: "#vendorTitle",
    translateX: 50,
    duration: 4000,

});

anime({
    targets: "#opsTitle",
    translateX: 50,
    duration: 4000,
});

anime({
    targets: "#auditTitle",
    translateX: 50,
    duration: 4000,
});


const animation1 = anime({
    targets: "#bizIntTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});


// const section1 = document.querySelector("#office");

// window.onscroll = function () {
//     const scrollPercent = window.pageYOffset - section1.offsetTop;
//     //console.log(scrollPercent);
//     //console.log(window.pageYOffset);  //see how far away from the top
//     console.log(section1.offsetTop);
//     animation1.seek((scrollPercent / 100) * animation1.duration);
// }



var updates = 0;

anime({
    targets: '#box',
    translateY: 270,
});