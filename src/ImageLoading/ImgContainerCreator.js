import { Button } from '../Button/Button';
import { randomColorBorder } from './BorderColor';


export const imgContainerCreator = (image) => {

    const imgContainer = document.createElement("div");
    
    const mainImg = document.createElement("img");
    mainImg.src=image.urls.regular;
    mainImg.alt=image.alt_description;
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
        fnc: () => window.open(image.links.html), 
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
            <p class="userName">${image.user.name}</p>
            <p class="upDate">📤${image.updated_at.split('T')[0]}</p>
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
        // Append

    imgContainer.append(mainImg, stats, visitButton, pfp, info);
    
        // Return

    return imgContainer;
};