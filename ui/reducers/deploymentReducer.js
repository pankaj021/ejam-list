import * as actions from '../actions/action-type';

const initState = [];
const boardReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_LIST:
            return action.payload;
        case actions.ADD_LIST:
            return [
                action.payload, ...state
            ]
        case actions.DELETE_LIST:
            return filterList(state, action.payload)
        default:
            return state;
    }
};

function filterList(state, deleteId) {
    let newList = [];
    for (let index = 0; index < state.length; index++) {
        const element = state[index];
        if (element._id === deleteId) {
            continue;
        }
        newList.push(element)
    }
    return newList;
}

export default boardReducer;