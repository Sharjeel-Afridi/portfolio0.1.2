const resumeBtn = document.getElementById('resume-btn');
const url = 'https://drive.google.com/file/d/1A3CDfTW4-Py7Z4Uo94u3G5fHtTZGh94Q/view?usp=sharing';
const aboutEl = document.getElementById('about')

function resume(){
    window.open(url, '_blank');
}

function scrollTo(className){
    const target = document.querySelector(`.${className}`); 
    if(target){
        target.scrollIntoView({
            behaviour: 'smooth'
        })
    }
}
aboutEl.addEventListener('click', () => {
    scrollTo('about')
});
resumeBtn.addEventListener('click', resume);

