const element = document.createElement('img');

element.id = 'userElement';
element.src = 'user.png';
element.style.width = '100px';
element.style.height = '100px';
element.style.position = 'absolute';
element.style.bottom = '0';
element.style.transition = 'transform 0.5s ease-in-out'; // Плавное изменение поворота
element.style.transformOrigin = 'center'; // Устанавливаем центр вращения


export default element;