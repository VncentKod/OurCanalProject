import {dataList} from './films.js'

const filmList = dataList.Movie // Make data usable

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const filmNumber = urlParams.get('film');

// Find the film that corresponds to the data
let matchingFilm; 
filmList.forEach((film) => {
    if (film._Number === filmNumber) {
        matchingFilm = film
    }
});

let html = `<div class="title-film-page">
<img class="return-button js-return-button" src="../images/left-arrow.png" alt="Return">
${(matchingFilm._TranslatedTitle).toUpperCase()}
</div>
<div class="film-selection">
<div class="image-box">
    <img src="images/${matchingFilm._Picture}" alt="">
</div>
<div class="description-box">
    <div class="description">
        <p>${matchingFilm._Description}</p>
    </div>
    <div class="production">
        <p>De: ${matchingFilm._Director}</p>
        <div class="actors-box">
        <p class="actors">Avec: ${matchingFilm._Actors}</p>
        </div>
        <p>Pays: ${matchingFilm._Country}</p>
        <p>Note: ${matchingFilm._Rating}/10</p>
    </div>
    
    <button class="lecture-button js-lecture-button"> 
        <div class="button-components">
            <div>
                <img class="play-button" src="images/play-button.png" alt="">
            </div>
            <p>LECTURE</p>
        </div></button>
</div>
</div>`;


document.querySelector('.js-all-container').innerHTML = html;

const returnButtonElement = document.querySelector('.js-return-button');
returnButtonElement.addEventListener('click', () => {
    document.location.href=`/index.html`;
})

const lectureButtonElement = document.querySelector('.js-lecture-button');
lectureButtonElement.addEventListener('click', () => {
    document.location.href=`${matchingFilm._URL}`;
}) 
