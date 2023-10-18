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
// Store the scroll position when the page is unloaded or refreshed
window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
  });
  
  // Restore the scroll position when the page is loaded
  window.addEventListener('load', function() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  });
  