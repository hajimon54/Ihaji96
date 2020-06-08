//coding fo sticky navbar
window.onscroll = function() {myFunction()};

//this is grabbing the ID for the Navbar
var navbar = document.getElementById("navbar");
//this is grabbing the value of the scroll action which is up or down
var sticky = navbar.offsetTop;

function myFunction() {
  //if the value of the Yoffset is increased then the navbar becomes sticky and moves along with the page
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    //if the value of Yoffset is default then the sticky navbar will be in its default position
    navbar.classList.remove("sticky");
  }
}

//coding for image carousel

//this is linked to the container thats holding the image carousel
const slides = document.querySelectorAll('.slide');

//this is linked to the next arrow button
const next = document.getElementById('next');

//this is linked to the previous arrow button
const prev = document.getElementById('prev');

//this is linked to the play button that starts the slideshow presentation
const play = document.getElementById('play');

//this is linked to the pause button which stops the slideshow
const pause = document.getElementById('pause');

//this variable is declared so that it can stop the slideshow
let auto = false;

//this is how long the slideshow will take for it to show the next image
const intervalTime = 4000;
let slideInterval;

//this function allows the slideshow to go to the next image
const nextSlide = () => {

  // grabs the class called current
  const current = document.querySelector('.current');

  // this removes the class called 'current' which holds the image
  current.classList.remove('current');


  // Check for next slide
  if (current.nextElementSibling){

    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {

    // Add current to the start sibling
    slides[0].classList.add('current');
  }
  
  //this will set how long it will take for the next image to show
  setTimeout(() => current.classList.remove('current'));
};


//this function makes the slideshow go to the previous image
const prevSlide = () => {

  // Get current class
  const current = document.querySelector('.current');

  // Remove current class
  current.classList.remove('current');

  // Check for prev slide
  if (current.previousElementSibling) {

    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {

    // Add current to the last siblling
    slides[slides.length - 1].classList.add('current');
  }

  //this will set how long it will take for the next image to show
  setTimeout(() => current.classList.remove('current'));
};

// Button events

//next button
next.addEventListener('click', e => {
  //this calls the function that allows the slideshow to go onto the next image
  nextSlide();

  if (auto) {

    //the clear interval method is set to the slideInterval which has no time assigned to it
    clearInterval(slideInterval);

    //this method declares how long it will take for the slideshow to move onto the next image
    slideInterval = setInterval(nextSlide, intervalTime);
  }

});

//previous button
prev.addEventListener('click', e => {

  //this calls the function that allows the slideshow to go onto the previous image
  prevSlide();

  if (auto) {

    //the clear interval method is set to the slideInterval and clears the that has been assigned to that variable
    clearInterval(slideInterval);

    //this method declares how long it will take for the slideshow to move onto the next image
    slideInterval = setInterval(nextSlide, intervalTime);
  }

});

play.addEventListener('click', () => {
  auto = true;

  //this sets how long it will take for the slideshow to move onto the next image
  slideInterval = setInterval(nextSlide, intervalTime);
})

pause.addEventListener('click', () => {
  auto = false;
  
  //this will set the time interval to 0 so it will stop the slideshow from going forward or backwards
  clearInterval(slideInterval);
});

//this piece of code is for the left and right keys
//a switch case is being used in this situation
document.addEventListener("keyup", (e) => {
  switch (e.code){
    //when user presses the right arrow key the slideshow will move onto the next image
      case 'ArrowRight':
      nextSlide();
      break;
      //when user presses the left arrow key the slideshow will move onto the previous image
      case 'ArrowLeft':
      prevSlide();
      break;
};
});
