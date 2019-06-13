
const initialState = {
    user: null,
}

function session(state = initialState, action) {
    switch(action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload } // trae todos los datos del objeto
        default: 
            return state;
    }
}
export default session
