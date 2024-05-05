import container from "../elements/container";
import star from "../elements/star";

const starCore = {
    generate: (count = 5) => { 
        for (let i = 0; i < count; i++) container.appendChild( star() );
    }
};

export default starCore;