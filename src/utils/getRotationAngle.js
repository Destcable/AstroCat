const getRotationAngle = (user) => {
    if (!user) {
        console.error('User object is undefined or null');
        return 0; // Возвращаем нулевой угол по умолчанию или что-то другое в зависимости от вашей логики
    }
    // Получаем текущее значение свойства transform
    const transformStyle = window.getComputedStyle(user).getPropertyValue('transform');
    
    // Разбираем значение свойства transform, чтобы получить угол поворота
    const matrix = transformStyle.split('(')[1].split(')')[0].split(',');
    const a = matrix[0];
    const b = matrix[1];
    
    // Вычисляем угол поворота в радианах
    const angleRad = Math.atan2(b, a);
    
    // Преобразуем угол в градусы
    let angleDeg = angleRad * (180 / Math.PI);
    
    // Убедимся, что угол находится в диапазоне [0, 360]
    if (angleDeg < 0) {
        angleDeg += 360;
    }
    
    return angleDeg;
};

export default getRotationAngle;