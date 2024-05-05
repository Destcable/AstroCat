import { createStore } from "redux"

function storeReducer(state = { stars: 0 }, action) {
    switch (action.type) {
        case 'stars/increment':
            return { stars: state.stars += 1 }
        default:
            return state
    }
};

const store = createStore(storeReducer);

export default store;