import { Button } from './Button/Button.js';
import { Gallery } from './Gallery/Gallery.js';
import { Header } from './Header/Header.js';
import { loadImages, loadRandomImages, loadSearchQuery } from './ImageLoading/loadImg.js';
import './style.css'

const app = document.querySelector("#app");

Header();

const gallery = Gallery();
app.appendChild(gallery);

loadImages(gallery);

const randomButton = Button({
    text: "Load more", 
    fnc: () => loadRandomImages(gallery, false), 
    type: "redTextButton"
});
randomButton.classList.add("hide", "random");

const searchButton = Button({
    text: "Load more", 
    fnc: () => {
        const searchInput = document.querySelector(".searchBar");
        const searchText = searchInput.value.trim();
        loadSearchQuery(gallery, false, searchText);
    }, 
    type: "redTextButton"
});
searchButton.classList.add("hide", "search");

const loadButton = Button({
    text: "Load more", 
    fnc: () => loadImages(gallery, false), 
    type: "redTextButton"
});
loadButton.classList.add("hide", "load");
loadButton.classList.toggle("hide");

app.append(randomButton, searchButton, loadButton);
