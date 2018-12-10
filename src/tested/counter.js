import React, { Component } from 'react';
import {connect} from 'react-redux';
class Counter extends Component{
    render(){
        return(
            <div>
                <input type="number" onChange={this.props.change} />
                <button onClick={this.props.inc}>+</button>
                <button onClick={this.props.dec}>-</button>
                <button onClick={this.props.reset}>Reset</button>
                {this.props.text}
            </div>
        );
    }
}

const mapStateToProps = (state) => {return{
    text: state.text
}};

const mapDispatchToProps = (dispatch) => {return{
    change: (e) => {dispatch({type:"CHANGE", val:e.target.value})},
    inc: () => {dispatch({type:"INC"})},
    dec: () => {dispatch({type:"DEC"})},
    reset: () => {dispatch({type:"RESET"})},
}}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);