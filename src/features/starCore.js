import container from "../elements/container";
import star from "../elements/star";

const starCore = {
    generate: (count = 5) => { 
        for (let i = 0; i < count; i++) container.appendChild( star() );
    },
    clearAll: () => { 
        const starPoints = document.querySelectorAll('#star-point');

        starPoints.forEach(point => container.removeChild( point ));
    },
    clear: ( starPoint ) => { 
        container.removeChild( starPoint );
    }
};

export default starCore;