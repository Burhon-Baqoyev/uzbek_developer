let header = document.querySelector('header');

window.addEventListener('scroll', e => {
    e.preventDefault();
    if(window.scrollY >=100) {
        header.style.backgroundColor = '#666';
    }
    
    else {
        header.style.backgroundColor = 'transparent';
    }
})