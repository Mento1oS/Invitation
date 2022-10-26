let button = document.querySelector('.blob-btn');
let body = document.querySelector('.body');
let trick = document.querySelector('.trick');
console.log(button);
button.addEventListener('click', () => {
    body.classList.remove('none');
    trick.style.display = "none";
    console.log("Ну просил же");
});