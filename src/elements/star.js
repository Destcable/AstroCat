import container from "./container";
const star = () => { 
    const element = document.createElement('div');
    element.id = 'star-point';
    element.style.backgroundColor = 'black';
    element.style.width = '20px';
    element.style.height = '20px';
    element.style.position = 'absolute';
    element.style.left = Math.floor(Math.random() * (container.offsetWidth - 20)) + 'px';
    element.style.top = Math.floor(Math.random() * (container.offsetHeight - 20)) + 'px';
    
    return element;    
}

export default star;