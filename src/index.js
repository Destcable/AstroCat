import container from "./elements/container";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";
import fallUser from "./features/fallUser";

const body = document.querySelector('body');
body.appendChild( container() );

const containerElement = document.getElementById( 'container' );

containerElement.appendChild( user() );

const userElement = document.getElementById( 'userElement' );
setTimeout(() => { fallUser().start(userElement, containerElement); }, 1500)

onClickFieldPlay(userElement, containerElement);