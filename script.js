const image = document.querySelector('body img');
const scrollThreshold  = 500;
const img = "./images/taj.jpg"
const newImg = "./images/image2.jpg"

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition < scrollThreshold){
        image.src = img;
    } else if(scrollPosition > scrollThreshold){
        image.src = newImg;
    }

});