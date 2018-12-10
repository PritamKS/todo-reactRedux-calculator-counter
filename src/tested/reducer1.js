const initialState ={
    text: ""
};

const reducer =(state=initialState, action) => {
    const newState = {...state};
    switch(action.type){
        case 'CHANGE': newState.text = action.val;
        break;
        case 'INC': newState.text = Number(newState.text)+1;
        break;
        case 'DEC': newState.text = Number(newState.text)-1;
        break;
        default: return newState;
    }
    return newState;
}

export default reducer;