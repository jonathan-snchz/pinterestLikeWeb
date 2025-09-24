import { GalleryCall } from '../ApiCalls/apiCalls';
import { imgContainerCreator } from './ImgContainerCreator';

// Contador de páginas

let page = 1;

// Función resetear el contador

const resetCounter = (gallery, clearPrevious) => {
    if (clearPrevious === true) {
        gallery.innerHTML = "";
        page = 1;
    }
}

// Una sola función para cargar las imágenes, ahora hay que pasar el tipo de feed que queremos

export const loadImages = (gallery, clearPrevious = true, type = "home", searchText = "") => {
    
    resetCounter(gallery, clearPrevious);

    GalleryCall(page, type, searchText)
        .then(data => {
            console.log(data);
            
            // Handle different response structures
            const images = type === "search" ? data.results : data;
            
            images.forEach(image => {
                const imgContainer = imgContainerCreator(image);
                gallery.append(imgContainer);
            });
            page++;
        })
        .catch(error => {
            console.log('Api error: ', error);

            if (error.status === 403) {
                gallery.innerHTML = `
                    <div class="403" style="width: 600px; margin: auto;">
                        <h2>API Rate Limit Reached</h2>
                        <p>Parece que en esta hora no se pueden realizar más peticiones, (error: ${error.status})</p>
                    </div>
                `;
            } else {
                gallery.innerHTML = `Failed to load the gallery (error: ${error.status})`;
            }
        });
};

