import { dataList } from "./films.js";

// Make the Data Usable.
const filmList = dataList.Movie;

createGrid(filmList);

// Create the grid
function createGrid(filmListSelected) {
    let html = '';
    filmListSelected.forEach((film)=> { 
        html += `<div class="miniature js-miniature" data-film-number="${film._Number}">
        <div class="image-box">
            <img class="miniature-img" src="images/${film._Picture}" alt="">
        </div>
        <div>
            <p class="miniature-title">${film._TranslatedTitle}</p>
            <p class="miniature-theme">${film._Category}</p>
            </div>
        </div>`
    })
    document.querySelector('.grid-film-selection').innerHTML = html;


    const miniatureElement = document.querySelectorAll('.js-miniature');

    miniatureElement.forEach((miniature) => {
        miniature.addEventListener('click',() => {
            const pickedFilm = miniature.dataset.filmNumber;
            document.location.href=`film-page.html?film=${pickedFilm}`;
        })
    })
}


const menuBarButtonList = document.querySelectorAll('.js-menu-bar-button');
menuBarButtonList.forEach((button) => {
    button.addEventListener('click', () => {
        const filmTypeToPass = button.dataset.typeFilm;
        makeButtonUnselected()
        button.classList.add('selected-button')
        getSelectedFilm(filmTypeToPass);
    })})

function getSelectedFilm(filmType) {
    let futureSelectedFilm = []
    if (filmType === "All") {
        futureSelectedFilm = filmList
        console.log('passed');
    } else {
        filmList.forEach((film) => {
            if (film._Category.includes(filmType)) {
                futureSelectedFilm.push(film)
            }
        })
    }
    createGrid(futureSelectedFilm);
}

function makeButtonUnselected() {
    menuBarButtonList.forEach((rm) => {
        rm.classList.remove('selected-button');
    }) 
}
