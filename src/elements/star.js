import container from "./container";
const star = () => { 
    const element = document.createElement('img');
    element.src = './src/elements/img/star.png'
    element.id = 'star-point';
    element.style.width = '24px';
    element.style.height = '24px';
    element.style.position = 'absolute';
    element.style.left = Math.floor(Math.random() * (container.offsetWidth - 20)) + 'px';
    element.style.top = Math.floor(Math.random() * (container.offsetHeight - 20)) + 'px';
    
    return element;    
}

export default star;