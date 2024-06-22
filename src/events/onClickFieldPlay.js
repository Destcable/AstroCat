import container from "../elements/container";
import user from "../elements/user";
import starCore from "../features/starCore";
import fuel from "../features/fuel";
import store from "../reducer";
import isCollide from "../utils/isCollide";
import sound from "../features/sound";
import getRotationAngle from "../utils/getRotationAngle";

const onClickFieldPlay = (startClick) => {
    let isStart = false;

    container.onclick = () => {
        const storeValues = store.getState();

        if (!isStart) {
            isStart = true;
            startClick();
        }
        if (!fuel.get()) return false;
        if (!storeValues.isPlay) return false;

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

        // Вычисляем новые координаты кота после телепортации
        const newX = user.offsetLeft;
        const newY = user.offsetTop - 90; // телепортация кота вверх на 90 пикселей

        // Применяем новые координаты кота
        user.style.left = newX + 20 + 'px';
        
        if ( parseFloat(user.style.top) < ( container.offsetTop + 80) ) {
            return false;
        }
        user.style.top = newY + 'px';

        fuel.take();

        starCore.getAll().forEach(point => {
            if (isCollide(user, point)) {
                starCore.clear(point);
                sound.playCoin();
                store.dispatch({ type: 'stars/increment' });
            }
        });
    };
};

export default onClickFieldPlay;
