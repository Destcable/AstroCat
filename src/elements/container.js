const container = () => { 
    const container = document.createElement('div');
    
    container.id = 'container';
    container.style.position = 'relative';
    container.style.height = '100%'
    container.style.width = '100%';
    container.style.border = '1px solid black';

    return container;
};

export default container;