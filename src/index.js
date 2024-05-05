import container from "./elements/container";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";
import fallUser from "./features/fallUser";

const body = document.querySelector('body');
body.appendChild( container );
container.appendChild( user );



// setTimeout(() => { fallUser.start(userElement, containerElement); }, 1500);
// setTimeout(() => { fallUser.stop(); }, 2000)

onClickFieldPlay(user, container);