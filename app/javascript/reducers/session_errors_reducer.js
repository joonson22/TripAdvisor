import { RECEIVE_ERRORS, CLEAR_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_action';

export default (state = [],action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return []
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            return [];
        default: 
            return state;

    }
}