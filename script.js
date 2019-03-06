function leftArrowClick() {
  var imgSliderActive = $(".container_slider > img.active");
  imgSliderActive.removeClass("active");

  var prevImg;

  if(imgSliderActive.hasClass("first")) {
    prevImg = $(".container_slider > img.last")
  } else {
    prevImg = imgSliderActive.prev("img");
  }

  prevImg.addClass("active");
  circleActive();
}



function rightArrowClick() {
  var imgSliderActive = $(".container_slider > img.active");
  imgSliderActive.removeClass("active");

  var nextImg;

  if(imgSliderActive.hasClass("last")) {
    nextImg = $(".container_slider > img.first")
  } else {
    nextImg = imgSliderActive.next("img");
  }

  nextImg.addClass("active");
  circleActive();
}



function circleClick() {

  var me = $(this);
  var meIndex = me.index();

  var imgSliderActive = $(".container_slider > img.active");
  imgSliderActive.removeClass("active");

  var slides = $(".container_slider > img");
  var nextImg = slides.eq(meIndex);
  nextImg.addClass("active");
  circleActive();
}




function circleActive() {

  var slides = $(".container_slider > img");
  var activeIndex;

  for (var i = 0; i < slides.length; i++) {
    if (slides.eq(i).hasClass("active")) {
      activeIndex = i;
    }
  }

  console.log("img indice numero: ", activeIndex);

  var changeCircle = $(".bottom_link > i.fas");
  changeCircle.removeClass("fas").addClass("far");

  var circles = $(".bottom_link > i");
  var nextCircle = circles.eq(activeIndex);
  nextCircle.removeClass("far").addClass("fas");

}





// main function

function init() {

  var arrowLeft = $(".main_left");
  var arrowRight = $(".main_right");
  var circles = $(".bottom_link > i");


  arrowLeft.click(leftArrowClick);
  arrowRight.click(rightArrowClick);
  circles.click(circleClick);
}

$(document).ready(init);
