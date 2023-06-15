let allRatings = document.querySelector('form')
const submitButton = document.querySelector('#submitBtn');
let ratingDisplay = document.querySelector('#ratingDisplay');
const thankYouSec = document.querySelector('#thankYouSec');
const mainSec = document.querySelector('#mainSec')



function submit() {
    if (allRatings.rating.value) {
        ratingDisplay.innerText = allRatings.rating.value;
        mainSec.classList.toggle("display");
        thankYouSec.classList.toggle("display");
    } else {

    }
}

allRatings.addEventListener('submit', function(e) {
    e.preventDefault();
    submit()
})
