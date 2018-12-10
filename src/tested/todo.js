import {connect} from 'react-redux';
import React, {Component} from 'react';


class Todo extends Component{
    render(){
        return(
            <div>
                <input type="text" onChange={this.props.change} value={this.props.text}/>
                <button onClick={this.props.add}>ADD</button>
                {this.props.list.map((item,index)=> <li key={index}>{item}<button onClick={this.props.delete.bind(this,index)}>DELETE</button></li>)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {return{
    text:state.text,
    list: state.list,
    delete: state.delete
}};

const mapDispatchToProps = (dispatch) => {return{
    change: (e) => dispatch({type:"CHANGE", val:e.target.value}),
    add: () => dispatch({type:"ADD"}),
    delete: (index) => dispatch({type:"DELETE", val:index})
}};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);