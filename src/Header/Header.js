import './Header.css';
import { Button } from '../Button/Button'
import { loadImages, loadRandomImages, loadSearchQuery } from '../ImageLoading/loadImg';


// Función para intercambiar los botones entre cargar una nueva página o cargar más fotos aleatorias

const toggleButtons = (showButton) => {
    const buttons = {
        random: document.querySelector(".random"),
        search: document.querySelector(".search"),
        load: document.querySelector(".load")
    };
    
    Object.values(buttons).forEach(button=> 
        button.classList.add("hide")
    )

    buttons[showButton].classList.toggle("hide");
};

// Crear el header y sus elementos 

export const Header = () => {

    const header = document.createElement("header");

    const app = document.querySelector("#app");

    const logo = Button({
        text: "/src/resources/logoPinterest.png", 
        fnc: () => {
            const gallery = document.querySelector(".mainGallery");
            loadImages(gallery, true)
            if (document.querySelector(".load").classList.contains("hide")) {
                toggleButtons("load");
            }
        },
        type: "iconButton"});

    const feed = Button({
        text: "Inicio", 
        fnc: () => {
            const gallery = document.querySelector(".mainGallery");
            loadImages(gallery, true)
            if (document.querySelector(".load").classList.contains("hide")) {
                toggleButtons("load");
            }
        },
        type: "textButton"});

    const explore = Button({
        text: "Explorar", 
        fnc: () => {
            const gallery = document.querySelector(".mainGallery");
            loadRandomImages(gallery, true);
            if (document.querySelector(".random").classList.contains("hide")) {
                toggleButtons("random");
            }
        }, 
        type: "textButton"});

    const create = Button({
        text: "Crear", 
        fnc: () => alert("Vamos a publicar"), 
        type: "textButton"});

    const searchBar = document.createElement("input");
    searchBar.type= "text";
    searchBar.placeholder = "🔍 Buscar";
    searchBar.classList.add("searchBar")
    searchBar.addEventListener("input", function() {
        const gallery = document.querySelector(".mainGallery");
        const searchText = this.value.trim();
        
        if (searchText === "") {
        
            loadImages(gallery, true);
            
            if (document.querySelector(".load").classList.contains("hide")) {
                    toggleButtons("load");
            }
        }else{
                loadSearchQuery(gallery, true, searchText);
        
                if (document.querySelector(".search").classList.contains("hide")) {
                    toggleButtons("search");
                }
            }
        });

    const alerts = Button({
        text: "/src/resources/bell.png", 
        fnc: () => alert("Tus notificaciones:"), 
        type: "iconButton"});
    alerts.classList.add("notis");

    const comments = Button({
        text: "/src/resources/comments.png", 
        fnc: () => alert("Comentarios recientes:"), 
        type: "iconButton"});
    comments.classList.add("comments");

    const profile = Button({
        text: "/src/resources/profilePlaceholder.png", 
        fnc: () => alert("Este es tu perfil"), 
        type: "iconButton"});
    
    header.append(logo, feed, explore, create, searchBar, alerts, comments, profile);
    app.append(header)
}
