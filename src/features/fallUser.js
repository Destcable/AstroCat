import starCore from "./starCore";
import user from "../elements/user";
import container from "../elements/container";

let interval;

const fallUser = {
    start: (user, container) => {
        interval = setInterval(() => {
            const userBottom = user.offsetTop + user.offsetHeight;
            const containerHeight = container.clientHeight;

            if (userBottom < containerHeight) { // TODO: что-то придумать можно вынести в check
                user.style.top = (user.offsetTop + 10) + 'px';
            }
        }, 50);
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
