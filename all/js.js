let button = document.querySelector('.blob-btn');
let body = document.querySelector('.body');
let trick = document.querySelector('.trick');
button.addEventListener('click', () => {
    body.classList.remove('none');
    trick.style.display = "none";
    console.log("Ну просил же");
});