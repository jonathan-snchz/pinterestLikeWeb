import { Button } from '../Button/Button';
import { GalleryCall, SearchQuery } from '../resources/ApiCalls/apiCalls';
import { RandomGalleryCall } from '../resources/ApiCalls/apiCalls';

// Función para los bordes de las pfp en distintos colores

const randomColorBorder = (pfp) => {
    const randomColors = [
            '#FF6B6B', '#1a605bff', '#45B7D1', '#F9A826', 
            '#5b4dc2ff', '#FD79A8', '#00B894', '#E17055',
            '#0984E3', '#D63031', '#00CEC9', '#a078f1ff'
        ];
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    pfp.style.borderColor = randomColor;
}

// Función para crear los imgContainer y sus contenidos

const imgContainerCreator = (image) => {

    const imgContainer = document.createElement("div");
    
    const mainImg = document.createElement("img");
    mainImg.src=image.urls.regular;
    mainImg.className = "image";
    
    const stats = document.createElement("div");
    stats.className = "stats hidden";
    stats.innerHTML = `
        <div class="photos">
            <p>📷</p>
            <p>${image.user.total_photos}</p>
        </div>
        <div class="likes">
            <p>♥️</p>
            <p>${image.likes}</p>
        </div>
    `
    const visitButton = Button({
        text:"Visitar", 
        fnc: () => alert(`Puedes visitar a ${image.user.name} en ${image.user.portfolio_url}`), 
        type: "redTextButton"});
    visitButton.classList.add("visit", "hidden")
        
        //Foto de perfil y su borde

    const pfp = document.createElement("img");
    pfp.className = "pfp";
    pfp.src =image.user.profile_image.large;
    randomColorBorder(pfp);
    
        // Nombre del autor y la fecha de subida

    const info = document.createElement("div");
    info.innerHTML=`
        <div class = "nameDate">
            <p>${image.user.name}</p>
            <p>📤${image.updated_at.split('T')[0]}</p>
        </div>
    `;

        // Determinar el tamaño de las imágenes para asignar las rows

    const aspectRatio = image.height / image.width;
        
        let sizeClass = 'medium';
        
        if (aspectRatio > 1.4) {
            sizeClass = 'large';
        }else if (aspectRatio < 0.8) {
            sizeClass = 'small';
        }
    imgContainer.classList.add('imgContainer');
    imgContainer.classList.add(sizeClass);

        // Efecto hover    

    mainImg.addEventListener("mouseenter", () => {
        stats.classList.toggle("hidden");
        visitButton.classList.toggle("hidden");
    });
    mainImg.addEventListener("mouseleave", () => {
        stats.classList.toggle("hidden");
        visitButton.classList.toggle("hidden");
    });

        // Append

    imgContainer.append(mainImg, stats, visitButton, pfp, info);
    
        // Return

    return imgContainer;
};

// Contador para cargar varias páginas desde el botón de load more

let page = 1;

const resetCounter = (gallery, clearPrevious) => {
    if (clearPrevious === true) {
        gallery.innerHTML = "";
        page = 1;
    }
}

// Pintar imágenes por páginas

export const loadImages = (gallery, clearPrevious = true) =>{
    
    // Resetear a la primera página

    resetCounter(gallery, clearPrevious);

    GalleryCall(page)
        .then(images => {
            console.log(images);
            
            images.forEach(image => {
            
            const imgContainer = imgContainerCreator(image);
            
            gallery.append(imgContainer);
            })
            page++
        })
        .catch(error =>{
            console.log('Api error: ', error);

            // Comprobar si he agotado las peticiones por hora a la api

            if (error.status === 403) {
                gallery.innerHTML = `
                    <div class="403" style="width: 600px; margin: auto;">
                        <h2>API Rate Limit Reached</h2>
                        <p>Parece que en esta hora no se pueden realizar más peticiones, (error: ${error.status})</p>
                    </div>
                `
            } else{
                gallery.innerHTML = `Failed to load the gallery (error: ${error.status})`
            }
    })
}
export const loadRandomImages = (gallery, clearPrevious = true) =>{

    resetCounter(gallery, clearPrevious);

    RandomGalleryCall()
        .then(images => {
            console.log(images);
            
            images.forEach(image => {
            
            const imgContainer = imgContainerCreator(image);
            
            gallery.append(imgContainer);
            })
            page++
        })
        .catch(error =>{
            console.log('Api error: ', error);

            // Comprobar si he agotado las peticiones por hora a la api

            if (error.status === 403) {
                gallery.innerHTML = `
                    <div class="403" style="width: 600px; margin: auto;">
                        <h2>API Rate Limit Reached</h2>
                        <p>Parece que en esta hora no se pueden realizar más peticiones, (error: ${error.status})</p>
                    </div>
                `
            } else{
                gallery.innerHTML = `Failed to load the gallery (error: ${error.status})`
            }
    })
}

export const loadSearchQuery = (gallery, clearPrevious = true, search) =>{

    // Resetear a la primera página

   resetCounter(gallery, clearPrevious);

    SearchQuery(page, search)
        .then(images => {
           console.log(images);
            
            images.results.forEach(image => {
            
            const imgContainer = imgContainerCreator(image);
            
            gallery.append(imgContainer);
            })
            page++
        })
        .catch(error =>{
            console.log('Api error: ', error);

            // Comprobar si he agotado las peticiones por hora a la api

            if (error.status === 403) {
                gallery.innerHTML = `
                    <div class="403" style="width: 600px; margin: auto;">
                        <h2>API Rate Limit Reached</h2>
                        <p>Parece que en esta hora no se pueden realizar más peticiones, (error: ${error.status})</p>
                    </div>
                `
            } else{
                gallery.innerHTML = `Failed to load the gallery (error: ${error.status})`
            }
    })
}