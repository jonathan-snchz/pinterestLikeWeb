import { Button } from './Button/Button.js';
import { Gallery } from './Gallery/Gallery.js';
import { Header } from './Header/Header.js';
import { loadMore } from './ImageLoading/FeedManager.js';
import { loadImages } from './ImageLoading/LoadImg.js';
import './style.css'

const app = document.querySelector("#app");

Header();

const gallery = Gallery();
app.appendChild(gallery);

loadImages(gallery, true, "home");

const loadButton = Button({
    text: "Load more", 
    fnc: () => loadMore(gallery), 
    type: "redTextButton"
});
app.append(loadButton);
