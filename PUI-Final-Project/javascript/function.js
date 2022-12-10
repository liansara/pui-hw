//source: https://animejs.com/documentation/#cssSelector//
//source: https://www.youtube.com/watch?v=f_gozrMnD7I

//animejs animation----------------------------------------------------------------

const animation1 = anime({
    targets: "#bizIntTitle",
    translateX: 50,
    duration: 4000,                         // source: https://www.youtube.com/watch?v=f_gozrMnD7I
    autoplay: false,
});

const animation2 = anime({
    targets: "#vendorTitle",
    translateX: 50,
    duration: 4000,
    autoplay: false,
});

const animation3 = anime({
    targets: "#opsTitle",
    translateX: 50,
    duration: 4000,
    autoplay: false,
});

const animation4 = anime({
    targets: "#auditTitle",
    translateX: 50,
    duration: 4000,
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
