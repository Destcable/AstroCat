import container from "../elements/container";
import user from "../elements/user";
import starCore from "../features/starCore";
import fuel from "../features/fuel";
import store from "../reducer";
import isCollide from "../utils/isCollide";

const onClickFieldPlay = (startClick, step = 80) => { 
    let isStart = false;

    container.onclick = ()  => { 
        const storeValues = store.getState();
        
        if ( !isStart ) {
            isStart = true;
            startClick();
        }
        if ( !fuel.get() ) return false;
        if ( !storeValues.isPlay ) return false;

        if ( parseFloat(user.style.top) > ( container.offsetTop + 80) ) { 
            user.style.top = (user.offsetTop - 90) + 'px';
            fuel.take();
        }

        starCore.getAll().forEach(point => {
            if ( isCollide( user, point ) ) { 
                starCore.clear(point);
                store.dispatch({ type: 'stars/increment' });
            }
        });

    };
};

export default onClickFieldPlay;