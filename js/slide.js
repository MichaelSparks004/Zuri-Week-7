const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const forwardButton = document.querySelector('.carousel-btn--forward');
const backwardButton = document.querySelector('.carousel-btn--backward')
const navDots = document.querySelector('.carousel-nav');
const dots = Array.from(navDots.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);



// arrange the slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';
// slides[5].style.left = slideWidth * 5 + 'px';


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);


const moveToSLide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('currentSlide-slide');
    targetSlide.classList.add('current-slide');
}


const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// when I click left, move the slides to the left
backwardButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = navDots.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;


    moveToSLide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})


// when I click right, move the slides to the right
forwardButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = navDots.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSLide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

})


// when I click the nav indicators, move to that slide

navDots.addEventListener('click', e => {

    //what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = navDots.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSLide(track, current, targetSlide);
    updateDots(currentDot, targetDot);
})
