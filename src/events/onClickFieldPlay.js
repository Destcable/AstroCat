import fallUser from "../features/fallUser";
import starCore from "../features/starCore";
import store from "../reducer";
import isCollide from "../utils/isCollide";

const onClickFieldPlay = (user, container, step = 80) => { 
    let isStart = false;
    const starPoints = document.querySelectorAll('#star-point');

    container.onclick = () => { 
        const storeValues = store.getState();
        
        if ( !isStart ) {
            fallUser.start(user, container);
            isStart = true;
            user.style.bottom = '90px'
        }

        if ( !storeValues.isPlay ) return false;
        
        if ( parseFloat(user.style.top) > ( container.offsetTop + 80) ) { 
            user.style.top = (user.offsetTop - 90) + 'px';
        }


        starPoints.forEach(point => {
            if ( isCollide( user, point ) ) { 
                starCore.clear(point);
                store.dispatch({ type: 'stars/increment' });
                console.log();
            }
        });

    };
};

export default onClickFieldPlay;