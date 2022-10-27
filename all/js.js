let button = document.querySelector('.blob-btn');
let body = document.querySelector('.body');
let trick = document.querySelector('.trick');
button.addEventListener('click', () => {
    trick.style.zIndex = "2";
    trick.style.transition = "all 0.3s ease-in";
    trick.style.transform = "translateX(-100vw)";
    body.classList.remove('none');
    window.top.document.title = "Лиза";
    console.log("Ну просил же");
});