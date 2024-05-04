const onClickFieldPlay = (user, container, step = 80) => { 
    container.onclick = () => { 
        if ( parseFloat(user.style.top) > ( container.offsetTop + 80) ) { 
            user.style.top = (user.offsetTop - 90) + 'px';
        }
    };
};