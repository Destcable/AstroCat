import container from "./elements/container";
import star from "./elements/star";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";
import fallUser from "./features/fallUser";
import starCore from "./features/starCore";

const body = document.querySelector('body');
body.appendChild( container );
starCore.generate(20);
container.appendChild( user );

fallUser.waitStop(() => { 
    console.log('Достигла');
    fallUser.stop();
    starCore.clearAll();
});

onClickFieldPlay(user, container);
