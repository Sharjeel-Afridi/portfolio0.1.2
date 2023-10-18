const resumeBtn = document.getElementById('resume-btn');
const url = 'https://drive.google.com/file/d/1A3CDfTW4-Py7Z4Uo94u3G5fHtTZGh94Q/view?usp=sharing';

const aboutEl = document.getElementById('about')
const projectsEl = document.getElementById('projects')
const socialsEl = document.getElementById('socials')

const instaEl = document.getElementById('insta')
const xEl = document.getElementById('x')
const linkedinEl = document.getElementById('linkedin')
const discordEl = document.getElementById('discord')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


function openLink(urlParam){
    window.open(urlParam, '_blank');
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
    scrollTo('about');
});
projectsEl.addEventListener('click', () => {
    scrollTo('projects');
});
socialsEl.addEventListener('click', () => {
    scrollTo('socials');
});

resumeBtn.addEventListener('click', () => {
    openLink(url);
});

instaEl.addEventListener('click', () => {
    const link = 'https://instagram.com/sharjeelafridi_'
    openLink(link)
});

xEl.addEventListener('click', () => {
    const link = 'https://twitter.com/sharjeelafridi_'
    openLink(link)
});
linkedinEl.addEventListener('click', () => {
    const link = 'https://www.linkedin.com/in/sharjeelafridi/'
    openLink(link)
});
discordEl.addEventListener('click', () => {
    const link = 'discordapp.com/users/sharjeelafridi_'
    openLink(link)
});