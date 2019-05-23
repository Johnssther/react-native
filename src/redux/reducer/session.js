const initialState = {
    user: false
}

function session(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, counter: state.counter +1 } // trae todos los datos del objeto
        default: return state;
    }
}
export default session
