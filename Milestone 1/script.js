"use strict";
const button = document.getElementById('toggle-skills');
const skills = document.getElementById('skill');
button.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
