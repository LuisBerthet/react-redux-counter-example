import {combineReducers} from "redux";

function modifyCounter(state = 0, action) {
    if (action.type === 1) {
        return state + 1;
    }
    if (action.type === 2) {
        return state - 1;
    }

    return state;
}


const rootReducer = combineReducers({
    counter: modifyCounter
});

export default rootReducer;
