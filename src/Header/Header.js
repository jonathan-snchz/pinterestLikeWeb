import './Header.css';
import { Button } from '../Button/Button'
import { loadImages } from '../ImageLoading/LoadImg';
import { feedChanger } from '../ImageLoading/FeedManager';


// Crear el header y sus elementos 

export const Header = () => {

    const header = document.createElement("header");

    const app = document.querySelector("#app");

    const logo = Button({
        text: "/assets/logoPinterest.png", 
        fnc: () => {
            const gallery = document.querySelector(".mainGallery");
            loadImages(gallery, true, "home")
            feedChanger("home")
        },
        type: "iconButton"});

    const feed = Button({
        text: "Inicio", 
        fnc: () => {
            const gallery = document.querySelector(".mainGallery");
            loadImages(gallery, true, "home")
            feedChanger("home")
        },
        type: "textButton"});

    const explore = Button({
        text: "Explorar", 
        fnc: () => {
            const gallery = document.querySelector(".mainGallery");
            loadImages(gallery, true, "random");
            feedChanger("random")
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
    searchBar.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            const gallery = document.querySelector(".mainGallery");
            const searchText = searchBar.value.trim();
        
            if (searchText === "") {
            
                loadImages(gallery, true, "home");
                feedChanger("home")
            } else{
                    loadImages(gallery, true, "search", searchText);
                    feedChanger("search", searchText)
                }
            }
        });

    const alerts = Button({
        text: "/assets/bell.png", 
        fnc: () => alert("Tus notificaciones:"), 
        type: "iconButton"});
    alerts.classList.add("notis");

    const comments = Button({
        text: "/assets/comments.png", 
        fnc: () => alert("Comentarios recientes:"), 
        type: "iconButton"});
    comments.classList.add("comments");

    const profile = Button({
        text: "/assets/profilePlaceholder.png", 
        fnc: () => alert("Este es tu perfil"), 
        type: "iconButton"});
    
    header.append(logo, feed, explore, create, searchBar, alerts, comments, profile);
    app.append(header)
}
