import container from "./container";
const star = () => { 
    const element = document.createElement('img');

    element.src = '/star.png'
    element.id = 'star-point';
    element.style.width = '24px';
    element.style.height = '24px';
    element.style.position = 'absolute';
    element.style.left = Math.floor(Math.random() * (container.offsetWidth - 20)) + 'px';
    element.style.top = Math.floor(Math.random() * (container.offsetHeight - 150)) + 'px';
    element.style.pointerEvents = 'none';

    return element;    
};

export default star;