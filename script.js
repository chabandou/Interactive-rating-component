let allRatings = document.querySelector('form')
let selectedRating = 0;
const submitButton = document.querySelector('#submitBtn');
let ratingDisplay = document.querySelector('#ratingDisplay');
const thankYouSec = document.querySelector('#thankYouSec');
const mainSec = document.querySelector('#mainSec')

// thankYouSec.style.display = "none"


allRatings.addEventListener('click', function() {
    selectedRating = document.querySelector('input[name="rating"]:checked');
})





submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (selectedRating !== 0) {
        ratingDisplay.innerText = selectedRating.value;
        // mainSec.style.display = "none"
        // thankYouSec.style.display = "block"
        mainSec.classList.toggle("display")
        thankYouSec.classList.toggle("display")
    } else {

    }
})

