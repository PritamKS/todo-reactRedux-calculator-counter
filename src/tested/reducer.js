const initialState = {
text:"",
list: []
};

const reducer =(state=initialState, action) => {
    const newState= {...state};
    switch(action.type){
        case 'CHANGE': newState.text = action.val;
        console.log(newState.text);
        break;
        case 'ADD': newState.list.push(newState.text);
        newState.text='';
        console.log(newState.list);
        break;
        case 'DELETE': 
        var newArr = [...newState.list];
        newArr.splice(action.val, 1);
        newState.list = newArr;
        break;
        default: return newState;
    }
    return newState;
};
export default reducer;