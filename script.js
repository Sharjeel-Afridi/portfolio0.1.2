const resumeBtn = document.getElementById('resume-btn');
const url = 'https://drive.google.com/file/d/1A3CDfTW4-Py7Z4Uo94u3G5fHtTZGh94Q/view?usp=sharing';

const instaEl = document.getElementById('insta')
const xEl = document.getElementById('x')
const linkedinEl = document.getElementById('linkedin')
const discordEl = document.getElementById('discord')

const github = document.getElementById('github');

const hamburger = document.querySelector('.hamburger');
const navRight  = document.querySelector('.nav-right');
const navBtn = document.querySelector('nav button');


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
github.addEventListener('click', () => {
    const link = 'https://github.com/Sharjeel-Afridi'
    openLink(link)
});


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navRight.classList.toggle('active');
    navBtn.classList.toggle('active');
})