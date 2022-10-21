const dropCourses = document.querySelector('.drop-btn');
const dropLinks = document.querySelector('.drop-links');

//Event Listener
dropCourses.addEventListener('click', () => {
    dropLinks.classList.toggle('drop-links-show');
});

