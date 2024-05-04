import container from "./src/elements/container";
import user from "./src/elements/user";
import onClickFieldPlay from "./src/events/onClickFieldPlay";

const body = document.querySelector('body');

body.appendChild( container() );

const containerElement = document.getElementById( 'container' );

containerElement.appendChild( user() );

const userElement = document.getElementById( 'userElement' );

setInterval(() => { 
    const userBottom = userElement.offsetTop + userElement.offsetHeight;
    const containerHeight = containerElement.clientHeight;

    if (userBottom < containerHeight) {
        userElement.style.top = (userElement.offsetTop + 10) + 'px';
    } else {
        console.log('Достигла')
    }

}, 50);

onClickFieldPlay(userElement, containerElement);