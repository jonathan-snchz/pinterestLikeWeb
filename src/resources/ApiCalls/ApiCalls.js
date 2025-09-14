
const accessKey = "wci3v9ppIVYBj6scZj-PeUQpNGFHW6pC32ZDhWC4Jwg";

// Llamada a la api por páginas para el feed original 

export const GalleryCall = async (counter) => {
    const response = await fetch(
        `https://api.unsplash.com/photos?page=${counter}&per_page=25&client_id=${accessKey}` 
    );
    if (!response.ok) {
        const error = new Error('API Failed');
        error.status = response.status;
        throw error;
    }

    return await response.json();
};

// Llamada a la api para las fotos aleatorias

export const RandomGalleryCall = async () => {
    const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=25`
    );
    
    if (!response.ok) {
        const error = new Error('API Failed');
        error.status = response.status;
        throw error;
    }

    return await response.json();
};

// Llamada a la api con el contenido del search input 

export const SearchQuery = async (counter, text) => {
    const response = await fetch(
        `https://api.unsplash.com/search/photos/?page=${counter}&per_page=20&query=${text}&client_id=${accessKey}`
    );
    
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