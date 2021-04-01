import {combineReducers} from 'redux';

const INITIAL_STATE = {
    backgroundColor: '#00bfff',
    weight: 100,
    height: 50,
    longPress: 'unchecked',
    radius: 3,
    textColor: 'white',
}

const buttonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){

        case 'CHANGE_COLOR':
            return { ...state, backgroundColor: action.payload};
        case 'CHANGE_HEIGHT':
            return { ...state, height: action.payload};
        case 'CHANGE_WEIGHT':
            return { ...state, weight: action.payload};
        case 'CHANGE_RADIUS':
            return { ...state, radius: action.payload};
        case 'CHANGE_TEXT_COLOR':
            return { ...state, textColor: action.payload};
        case 'ENABLE_DISABLE_LONG':
            return { ...state, longPress: action.payload};

        default:
            return state
    }
}

export default combineReducers({
    button: buttonReducer
})