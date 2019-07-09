

function places(state = [], action) {
    switch (action.type) {
        case 'SET_PLACES':
            return action.payload; // trae todos los datos del objeto
        default:
            return state;
    }
}
export default places
