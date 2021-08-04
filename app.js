let screenPosition = window.innerHeight;
screenPosition = parseInt(screenPosition);
// const tl = new TimelineMax();

function page1Appear() {
  let nav = document.querySelector('nav');
  let main = document.querySelector('.main');
  let banner = document.querySelector('.banner');

  let navPosition = nav.getBoundingClientRect().top;
  let mainPosition = main.getBoundingClientRect().top;
  let bannerPosition = banner.getBoundingClientRect().top;


  if ((navPosition < screenPosition) || (mainPosition < screenPosition) || (bannerPosition < screenPosition)) {
    nav.classList.add('nav-appear');
    main.classList.add('main-appear');
    banner.classList.add('banner-appear');
  }
}
page1Appear(); //called only once



// $(document).on('scroll', function () {
//   console.log("jquery connected");
//   if ($(this).scrollTop() >= $('.text').position().top) {
//     console.log("text reached!");
//   }
// })

// $(document).ready(function () {
//   console.log("inside view");
//   $('.target').viewportChecker({
//     // Class to add to the elements when they are visible
//     classToAdd: 'visible',

//     // The offset of the elements (let them appear earlier or later)
//     offset: 100,

//     // Add the possibility to remove the class if the elements are not visible
//     repeat: false,
//     delay: 0

//   });
//   console.log("outside view");
// });

window.addEventListener("wheel", onScroll);
window.addEventListener("keyup", onKeyUp);


function onKeyUp(event) {
  if (event.key == "ArrowUp" || event.key == "ArrowDown") {
    onScroll(event);
  }
}


function onScroll(event) {

  let text = document.querySelector('.target .text');
  let targetCon = document.querySelector('.target .content');
  let quesPic = document.querySelector('.question .pic');
  let quesQ1 = document.querySelector('.question .q1');
  let quesQ2 = document.querySelector('.question .q2');
  let quesQ3 = document.querySelector('.question .q3');
  let quesPlus1 = document.querySelector('.question .plus_one');
  let quesPlus2 = document.querySelector('.question .plus_two');
  let quesPlus3 = document.querySelector('.question .plus_three');
  let endText = document.querySelector('.end .text');
  let endEmail = document.querySelector('.end .email');
  let endMedia = document.querySelector('.end .media');

  let textPosition = text.getBoundingClientRect().top;
  let targetConPosition = targetCon.getBoundingClientRect().top;
  let quesPicPosition = quesPic.getBoundingClientRect().top;
  let quesQ1Position = quesQ1.getBoundingClientRect().top;
  let quesQ2Position = quesQ2.getBoundingClientRect().top;
  let quesQ3Position = quesQ3.getBoundingClientRect().top;
  let quesPlus1Position = quesPlus1.getBoundingClientRect().top;
  let quesPlus2Position = quesPlus2.getBoundingClientRect().top;
  let quesPlus3Position = quesPlus3.getBoundingClientRect().top;
  let endTextPosition = endText.getBoundingClientRect().top;
  let endEmailPosition = endEmail.getBoundingClientRect().top;
  let endMediaPosition = endMedia.getBoundingClientRect().top;

  if ((textPosition <= screenPosition) || (targetConPosition < screenPosition)) {
    text.classList.add('opacityXL');
    targetCon.classList.add('opacityYD');
  }

  if (quesPicPosition <= (screenPosition * 1.5)) {

    quesPic.classList.add('opacityXL');
    quesQ1.classList.add('opacityYDQ1');
    quesQ2.classList.add('opacityYDQ2');
    quesQ3.classList.add('opacityYDQ3');
    quesPlus1.classList.add('opacityYDQ1');
    quesPlus2.classList.add('opacityYDQ2');
    quesPlus3.classList.add('opacityYDQ3');
    console.log("inside if sec3");
  }


  if (endTextPosition <= screenPosition) {
    console.log("end" + endTextPosition);
    console.log(typeof (screenPosition) + screenPosition);

    endText.classList.add('opacityXL');
    endEmail.classList.add('opacityYU');
    endMedia.classList.add('opacityXR');
    console.log("inside if sec4");
  }
}

