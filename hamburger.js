const hambuger = document.getElementById('hambuger');
const navUL = document.getElementById('ul-nav');
hambuger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})