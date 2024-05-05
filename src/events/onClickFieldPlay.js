import fallUser from "../features/fallUser";

const onClickFieldPlay = (user, container, step = 80) => { 
    const userElement = document.getElementById( 'userElement' );
    const containerElement = document.getElementById( 'container' );
    let isStart = false;

    container.onclick = () => { 
        if ( !isStart ) { 
            fallUser.start(userElement, containerElement);
            isStart = true;
        }
        
        if ( parseFloat(user.style.top) > ( container.offsetTop + 80) ) { 
            user.style.top = (user.offsetTop - 90) + 'px';
        }
    };
};

export default onClickFieldPlay;