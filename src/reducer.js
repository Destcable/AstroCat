import { createStore } from "redux"

function storeReducer(state = { 
    stars: 0,
    isPlay: false 
}, action) {
    switch (action.type) {
        case 'stars/increment':
            state.stars += 1;
            return state;
        case 'isPlay/start':
            state.isPlay = true;
            return state;
        case 'isPlay/stop':
            state.isPlay = false;
            return state;
        default:
            return state
    }
};

const store = createStore(storeReducer);

export default store;