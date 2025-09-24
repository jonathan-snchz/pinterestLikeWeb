export const loadMoreButtonChanger = (type = "home", searchText = "") => {
    return () => {
        const gallery = document.querySelector(".mainGallery");
        loadImages(gallery, false, type, searchText);
    };
};