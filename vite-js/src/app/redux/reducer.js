import { LIST } from './actions';

const initialState = {};

export function list(state = initialState, action) {
    switch (action.type) {
        case LIST:{
            return {...state};
        }
        default:
            return state;
    }
}
