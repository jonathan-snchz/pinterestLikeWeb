export const randomColorBorder = (pfp) => {
    const randomColors = [
            '#FF6B6B', '#1a605bff', '#45B7D1', '#F9A826', 
            '#5b4dc2ff', '#FD79A8', '#00B894', '#E17055',
            '#0984E3', '#D63031', '#00CEC9', '#a078f1ff'
        ];
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    pfp.style.borderColor = randomColor;
}
