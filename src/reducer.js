import { createStore } from "redux"

function storeReducer(state = { 
    stars: 0,
    isPlay: false 
}, action) {
    switch (action.type) {
        case 'stars/increment':
            return { stars: state.stars += 1 }
        case 'isPlay/start':
            return { isPlay: state.isPlay = true };
        case 'isPlay/stop':
            return { isPlay: state.isPlay = false };
        default:
            return state
    }
};

const store = createStore(storeReducer);

export default store;