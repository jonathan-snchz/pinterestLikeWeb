import './Button.css';

export const Button = ({text = "Ejemplo", fnc = () => {}, type = "textButton"} = {}) => {
    
    const button = document.createElement("button");

    button.classList.add(type);
    if (type === "iconButton") {
        button.textContent = "";
        button.innerHTML = `
            <img src="${text}" alt="${text}" >
        `
    } else{
       button.textContent = text;
    }
    button.addEventListener("click", fnc);

    return button;
}

