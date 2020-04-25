import * as actions from '../actions/action-type';

const initState = []
const boardReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.GET_TEMPLATES:
            return action.payload;
        default:
            return state;
    }
};

export default boardReducer;