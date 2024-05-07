import user from "../elements/user";
import container from "../elements/container";
import { FALL_TIME, FALL_USER_PX } from "../config";

let interval;
let rotationAngle = 0; // начальный угол поворота

const fallUser = {
    start: (user, container) => {
        interval = setInterval(() => {
            const userBottom = user.offsetTop + user.offsetHeight;
            const containerHeight = container.clientHeight;

            if (userBottom < containerHeight) {
                user.style.top = (user.offsetTop + FALL_USER_PX) + 'px';
                rotationAngle += 5; // увеличиваем угол поворота на 5 градусов при каждом обновлении
                user.style.transform = `rotate(${rotationAngle}deg)`; // применяем угол поворота
            }
        }, FALL_TIME);
    },
    waitStop: (callback) => { 
        const observer = new MutationObserver(() => { 
            const userBottom = user.offsetTop + user.offsetHeight;

            if (userBottom >= container.clientHeight) { 
                callback();
            }
        });
        
        observer.observe(user, { attributes: true, attributeFilter: ['style'] });
    },
    stop: () => {
        clearInterval(interval);
    }
};

export default fallUser;
