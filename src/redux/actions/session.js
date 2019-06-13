export const setUser = payload => {
    return {
        type: 'SET_USER',
        payload
    };
}

export const delUser = () => {
    return {
        type: 'DEL_USER',
        
    };
}
