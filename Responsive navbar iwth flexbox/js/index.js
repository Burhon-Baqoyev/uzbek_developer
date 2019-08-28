let topnav = document.querySelector('nav');
let toggler = document.querySelector('.toggler');

toggler.addEventListener('click', dropdown);

function dropdown() {
    if(topnav.className === "") {
        topnav.className+= ' responsive';
    }
    else {
        topnav.className = '';
    }
}