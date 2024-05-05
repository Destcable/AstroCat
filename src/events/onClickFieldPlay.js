import fallUser from "../features/fallUser";
import store from "../reducer";
import isCollide from "../utils/isCollide";

const onClickFieldPlay = (user, container, step = 80) => { 
    let isStart = false;
    const starPoints = document.querySelectorAll('#star-point');

    container.onclick = () => { 

        if ( !isStart ) {
            fallUser.start(user, container);
            isStart = true;
            user.style.bottom = '90px'
        }
        
        if ( parseFloat(user.style.top) > ( container.offsetTop + 80) ) { 
            user.style.top = (user.offsetTop - 90) + 'px';
        }


        starPoints.forEach(point => {
            if ( isCollide( user, point ) ) { 
                container.removeChild( point );
                store.dispatch({ type: 'stars/increment' });
                console.log(store.getState().stars);
            }
        });

    };
};

export default onClickFieldPlay;