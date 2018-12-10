import React, { Component } from 'react';
import {connect} from 'react-redux';
class Todo extends Component{
    render(){
        return(
            <div>
                <input type = "text" onChange={this.props.change} value={this.props.text}/>
                <button onClick={this.props.addItem}>ADD</button><br/>
                <ul>
                    {this.props.listArr.map((item,index)=> <li key={index}>{item}<button onClick = {this.props.delete.bind(this,index)}>X</button> </li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    text : state.text1,
    // listItem : state.add1,
    listArr : state.listArr}
};
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => {dispatch({type: 'add'})},
        change: (e) => {dispatch({type: 'change', val:e.target.value})},
        delete: (index) => {dispatch({type: "DEL", val: index})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);