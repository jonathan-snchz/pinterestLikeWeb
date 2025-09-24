
const accessKey = "wci3v9ppIVYBj6scZj-PeUQpNGFHW6pC32ZDhWC4Jwg";

// Llamada a la api, ahora gestiona todos los tipos de, hay que pasar el parámetro 

export const GalleryCall = async (counter, type = "home", text) => {
    
    let url;

    if (type === "home") {
        url = `https://api.unsplash.com/photos?page=${counter}&per_page=25&order_by=latest&client_id=${accessKey}`;
    } else if (type === "random") {
        url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=25`;
    } else if (type === "search") {
        url = `https://api.unsplash.com/search/photos/?page=${counter}&per_page=25&query=${text}&client_id=${accessKey}`
    }
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error('API Failed');
        error.status = response.status;
        throw error;
    }

    return await response.json();
};

// https://api.unsplash.com/
// appID: 803207
// accessKey: wci3v9ppIVYBj6scZj-PeUQpNGFHW6pC32ZDhWC4Jwg
// secretKey: aHcNKS9RNcrGWwSYkQ1bHRFRRQ7yjb3uB236sadI04M