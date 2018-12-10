const initialState = {
    text1 : "",
    add1 : "",
    listArr: []
}

const reducer = (state=initialState, action) => {
const newEle = {...state};
switch(action.type){
    case 'change' :
        newEle.text1= action.val;
        break;
    case 'add' :
        // newEle.add1 = newEle.text1;
        newEle.listArr.push(newEle.text1);
        newEle.text1 = "";
        break;
    case 'DEL' :
        const arr = Object.assign([], newEle.listArr);
        arr.splice(action.val,1);
        newEle.listArr = arr;

}
return newEle;
}

export default reducer;