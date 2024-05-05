import container from "./elements/container";
import star from "./elements/star";
import user from "./elements/user";
import onClickFieldPlay from "./events/onClickFieldPlay";

const body = document.querySelector('body');
body.appendChild( container );

for (let i = 0; i < 5; i++) container.appendChild( star() );

container.appendChild( user );

onClickFieldPlay(user, container);