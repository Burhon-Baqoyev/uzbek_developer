let pos = 0;
const speed = 250;
let str = document.querySelector('.text').textContent;

document.querySelector('.text').textContent = '';

function type() {
    if(pos<str.length) {
        document.querySelector('.text').textContent += str.charAt(pos);
        pos++;
        setTimeout(type,speed);
    }

    else {
        setTimeout(reverseType,speed);
    }
}

setTimeout(type,speed);

function reverseType() {
    if(pos>=0) {
        document.querySelector('.text').textContent = str.substring(0,pos);
        pos--;
        setTimeout(reverseType,speed);
    }

    else {
        setTimeout(type,speed);
    }
}