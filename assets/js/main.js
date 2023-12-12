// Navbar
document.addEventListener('DOMContentLoaded', function () {
    const toggleBar = document.querySelector('.toggle-bar');
    const navBar = document.querySelector('.nav-bar');
    const closeButton = document.querySelector('.close-button');

    toggleBar.addEventListener('click', function () {
        navBar.classList.add('active');
    });

    closeButton.addEventListener('click', function () {
        navBar.classList.remove('active');
    });
});



// FAQ

const questionAnswers = document.querySelectorAll('.question-answer');

questionAnswers.forEach(function(questionAnswer) {
    const questionTitle = questionAnswer.querySelector('.title-question');
    const btn = questionAnswer.querySelector('.question-btn');
    const answer = questionAnswer.querySelector('.answer');

    questionTitle.addEventListener("click", function() {
        questionAnswers.forEach(function(item) {
            if (item !== questionAnswer) {
                item.classList.remove("show-text");
            }
        })
        questionAnswer.classList.toggle("show-text");
        toggleAnswerVisibility(questionAnswer);
    });

    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        questionAnswers.forEach(function(item) {
            if (item !== questionAnswer) {
                item.classList.remove("show-text");
            }
        })
        questionAnswer.classList.toggle("show-text");
        toggleAnswerVisibility(questionAnswer);
    });

    // Function to smoothly toggle answer visibility
    function toggleAnswerVisibility(element) {
        const answer = element.querySelector('.answer');
        if (element.classList.contains('show-text')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    }

    // Initialize answer visibility on page load
    toggleAnswerVisibility(questionAnswer);
});
