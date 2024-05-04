let interval;

const fallUser = {
    start: (user, container) => {
        interval = setInterval(() => {
            const userBottom = user.offsetTop + user.offsetHeight;
            const containerHeight = container.clientHeight;

            if (userBottom < containerHeight) {
                user.style.top = (user.offsetTop + 10) + 'px';
            } else {
                console.log('Достигла');
            }
        }, 50);
    },
    stop: () => {
        clearInterval(interval);
    }
};

export default fallUser;
