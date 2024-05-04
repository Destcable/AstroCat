const user = () => { 
    const element = document.createElement('div');
    element.id = 'userElement';

    element.style.width = '100px';
    element.style.height = '100px';
    element.style.backgroundColor = 'red';
    element.style.position = 'absolute';
    element.style.top = '0';

    return element;
};