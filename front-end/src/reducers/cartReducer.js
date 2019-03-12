export default (state=[],action)=>{
    // signature takes state and action (signature is the stuff passed into a function set as a parameter)
    switch (action.type) {
        case 'UPDATE_CART':
        case 'GET_CART':
        case 'DELETE_ACTION':
            return action.payload.data;
        default:
            return state;
    }
}