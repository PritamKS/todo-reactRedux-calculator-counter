const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type){
        case 'incr':
            return {count: newState.count+1};
        case 'decr':
            return {count: newState.count-1};
        default:
            return newState;
    }
}
export default reducer;