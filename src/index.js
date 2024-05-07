import container from "./elements/container";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";
import fallUser from "./features/fallUser";
import fuel from "./features/fuel";
import starCore from "./features/starCore";
import store from "./reducer";
import isCollide from "./utils/isCollide";

const body = document.querySelector('body');
body.appendChild( container );
starCore.generate( 20 );
container.appendChild( user );

store.dispatch({ type: 'isPlay/start' });

fallUser.waitStop(() => { 
    console.log('Вы проиграли! Ваш счет: ' + store.getState().stars);
    fallUser.stop();
    starCore.clearAll();
    store.dispatch({ type: 'isPlay/stop' });
});

onClickFieldPlay(startClick);

function startClick() { 
    fallUser.start(user, container);
    user.style.bottom = '90px';
    fuel.set(5);
};