//source: https://animejs.com/documentation/#cssSelector//




// function finishAnimation() {
//     $("#box").css();
// }


// function start() {
//     $("#office").click(function () {
//         $("#box").animate(
//             { bottom: '-=150' },
//             2000,function(){

//             }
//         )

//     });
// };




// function start() {
//     $("#box").fadeIn(2000).animate(
//         { 'left': 250 },
//         2000,
//         // finishAnimation
//     )
// }


// anime({
//     targets: "#bizIntTitle",
//     translateX: 50,
//     duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
//     // autoplay: false,
// });

// anime({
//     targets: "#vendorTitle",
//     translateX: 50,
//     duration: 4000,

// });

// anime({
//     targets: "#opsTitle",
//     translateX: 50,
//     duration: 4000,
// });

// anime({
//     targets: "#auditTitle",
//     translateX: 50,
//     duration: 4000,
// });

//-----------box animation test3 simple parallax -- not working ---------------------------------------------------------------

// const image = document.getElementsByClassName('thumbnail');
// // var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
//     orientation: 'down',
//     delay: .5,
//     maxTransition: 60,
// });


//-----------box animation test2---------------------------------------------------------------

// var focusDown, focusUp;
// var up = false, down = false, scrollPos = 0, scrollPos1;
// var isScrolling;
// window.addEventListener('scroll', function () {
//     window.clearTimeout(isScrolling);
//     scrollPos1 = $(window).scrollTop();
//     if (scrollPos1 == scrollPos) { } else {
//         if (scrollPos1 > scrollPos) {
//             up = false;
//             down = true;
//         } else {
//             up = true;
//             down = false;
//         }
//     }
//     scrollPos = scrollPos1;

//     var duration = 2000;
//     var offset = 5;

//     if (down) {
//         focusDown = anime({
//             targets: '#box', easing: 'linear', duration: 200,
//             translateY: function (el) {
//                 return $('#box').offset().left + offset;
//             }
//         });
//     }
//     if (up) {
//         focusUp = anime({
//             targets: '#box', easing: 'linear', duration: duration,
//             translateY: function (el) {
//                 return $('#box').offset().left - offset;
//             }
//         });
//     }



//     isScrolling = setTimeout(function () {
//         if (focusUp && focusUp !== 'undefined') { focusUp.pause(); }
//         if (focusDown && focusDown !== 'undefined') { focusDown.pause(); }
//     }, 200);
// }, false);
//-----------box animation test1---------------------------------------------------------------

// const animation1 = anime({
//     targets: "#box",
//     translateY: 100,
//     duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
//     autoplay: false,
// });

// const animation2 = anime({
//     targets: "#box",
//     translateY: 200,
//     duration: 10000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
//     autoplay: false,
// });

// const distance1 = document.querySelector("#intro");
// const distance2 = document.querySelector("#office");

// window.onscroll = function () {
//     const scrollPercent = window.pageYOffset - distance1.offsetTop;
//     //console.log(scrollPercent);
//     //console.log(window.pageYOffset);  //see how far away from the top
//     //console.log(section1.offsetTop); // section1 is 235 px from the top
//     animation1.seek((scrollPercent / 100 / 8) * animation1.duration);  // change 5 to higher to make slower

//     // const scrollPercent1 = window.pageYOffset - section1.offsetTop;
//     // animation1.seek((scrollPercent1 / 100 / 8) * animation1.duration);
//     const scrollPercent2 = window.pageYOffset - distance2.offsetTop;
//     animation2.seek((scrollPercent2 / 100 / 8) * animation2.duration);

// }



// var updates = 0;

// anime({
//     targets: '#box',
//     duration: 5000,
//     translateY: 235,
// });


function resizeheight() {
    var height = ((screen.height) * .90);
    return height;
}





//animejs test-------animation that works but wrong things----------------------------------------------------------------



const animation1 = anime({
    targets: "#bizIntTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});

const animation2 = anime({
    targets: "#vendorTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});

const animation3 = anime({
    targets: "#opsTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});

const animation4 = anime({
    targets: "#auditTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});


//const section1 = document.querySelector("#intro");
const section2 = document.querySelector("#office");
const section3 = document.querySelector("#road");
const section4 = document.querySelector("#van");


window.onscroll = function () {
    // const scrollPercent1 = window.pageYOffset - section1.offsetTop
    const scrollPercent1 = window.pageYOffset - 2;
    animation1.seek((scrollPercent1 / 100 / 8) * animation1.duration);
    // animation1.seek((1) * animation1.duration);

    const scrollPercent = window.pageYOffset - section2.offsetTop;
    // console.log(scrollPercent);
    // console.log(window.pageYOffset);  //see how far away from the top
    // console.log(section1.offsetTop); // section1 is 235 px from the top
    animation2.seek((scrollPercent / 100 / 8) * animation2.duration);  // change 5 to higher to make slower



    const scrollPercent3 = window.pageYOffset - section3.offsetTop;
    animation3.seek((scrollPercent3 / 100 / 8) * animation3.duration);

    const scrollPercent4 = window.pageYOffset - section4.offsetTop;
    animation4.seek((scrollPercent4 / 100 / 8) * animation4.duration);
}


//------------------ Animation: Move the box--------------------------------------------------
const box1 = document.querySelector('#box');            //source: https://www.youtube.com/watch?v=Dl-byluXevQ

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    box1.style.transform = `translateY(${3.5 * val}%)`;

});