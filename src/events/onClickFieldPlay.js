import fallUser from "../features/fallUser";

const onClickFieldPlay = (user, container, step = 80) => { 
    let isStart = false;

    container.onclick = () => { 
        if ( !isStart ) { 
            fallUser.start(user, container);
            isStart = true;
        }
        
        if ( parseFloat(user.style.top) > ( container.offsetTop + 80) ) { 
            user.style.top = (user.offsetTop - 90) + 'px';
        }
    };
};

export default onClickFieldPlay;