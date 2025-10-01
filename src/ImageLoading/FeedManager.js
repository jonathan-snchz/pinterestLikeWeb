import { loadImages } from "./LoadImg";

let feedType = "home";
let searchText = "";

export const feedChanger = (type, search = "") => {
    feedType = type;
    searchText = search;

    if (type !== "search") {
        const searchBar = document.querySelector(".searchBar");
        searchBar.value = "";
    }
}

// Función para el botón de load more

export const loadMore = (gallery) =>{
    loadImages(gallery, false, feedType, searchText);
} 
