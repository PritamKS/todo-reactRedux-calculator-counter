
const initialState=
{
    count: 0
};
const reducer= (state=initialState, action)=> {
    let newState = {...state}
    switch(action.type){
        case 'INC': return{count: newState.count+1};
        case 'DEC':return{count: newState.count-1};
        default: return newState;
    }
}
export default reducer;