import container from "./elements/container";
import star from "./elements/star";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";
import isCollide from "./utils/isCollide";

const body = document.querySelector('body');
body.appendChild( container );

for (let i = 0; i < 5; i++) container.appendChild( star() );

container.appendChild( user );



// setTimeout(() => { fallUser.start(userElement, containerElement); }, 1500);
// setTimeout(() => { fallUser.stop(); }, 2000)

onClickFieldPlay(user, container);