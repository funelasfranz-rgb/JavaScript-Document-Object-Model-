const buttonName = document.getElementById('changeName');
const studentName = document.getElementById('studentName');
const changeBackgroundButton = document.getElementById('changeBackground');
const toggleDetailsButton = document.getElementById('toggleDetails');
const profile = document.getElementById('profile');
const details = document.getElementById('details');
const detailsStudentName = document.getElementById('detailsStudentName');

const backgroundColors = ['#d1fae5', '#dbeafe', '#fef3c7', '#fce7f3'];
let backgroundColorIndex = -1;

buttonName.addEventListener('click', function () {
    studentName.textContent = 'Maria Santos';
    detailsStudentName.textContent = studentName.textContent;
});

changeBackgroundButton.addEventListener('click', function () {
    backgroundColorIndex = (backgroundColorIndex + 1) % backgroundColors.length;
    profile.style.backgroundColor = backgroundColors[backgroundColorIndex];
});

toggleDetailsButton.addEventListener('click', function () {
    const isHidden = details.classList.toggle('hidden');
    toggleDetailsButton.textContent = isHidden ? 'Show Details' : 'Hide Details';
    toggleDetailsButton.setAttribute('aria-expanded', String(!isHidden));
});