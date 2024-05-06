import container from "./elements/container";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";
import fallUser from "./features/fallUser";
import starCore from "./features/starCore";
import store from "./reducer";

const body = document.querySelector('body');
body.appendChild( container );
starCore.generate( 20 );
container.appendChild( user );

fallUser.waitStop(() => { 
    console.log('Вы проиграли! Ваш счет: ' + store.getState().stars);
    fallUser.stop();
    starCore.clearAll();
});

onClickFieldPlay(user, container);
