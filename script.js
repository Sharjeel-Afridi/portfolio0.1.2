const resumeBtn = document.getElementById('resume-btn');
const url = 'https://drive.google.com/file/d/1A3CDfTW4-Py7Z4Uo94u3G5fHtTZGh94Q/view?usp=sharing'
resumeBtn.addEventListener('click', function (){
    window.open(url, '_blank');
})
