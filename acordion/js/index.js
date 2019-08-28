

let acc = document.querySelectorAll('.accordion');

acc.forEach(function(item){
    item.addEventListener('click',accordion);
    function accordion(){
        let pannel = item.nextElementSibling;
        if(pannel.style.maxHeight) {
            pannel.style.maxHeight = null;
        }

        else {
            pannel.style.maxHeight = pannel.scrollHeight + "px";
        }
    }

})