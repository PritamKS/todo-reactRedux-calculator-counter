import React, { Component } from 'react';
import {connect} from 'react-redux';

class Calculator extends Component {
    render(){
        return(
            <div>
                <input type= "number" name= "num1" onChange= {this.props.change} value={this.props.num1}/>
                <input type= "number" name= "num2" onChange= {this.props.change} value={this.props.num2}/>
                <button name="sum" onClick= {this.props.comp}>+</button>
                <button name="sub" onClick= {this.props.comp}>-</button>
                <button name="mul" onClick= {this.props.comp}>x</button>
                <button name="div" onClick= {this.props.comp}>/</button>
                <p>{this.props.sol}</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {return{
    num1: state.num1,
    num2: state.num2,
    sol: state.sol
}};

const mapDispatchToProps = (dispatch) => {return{
    change: (e) => dispatch({type: "CHANGE", val: e.target.value, name: e.target.name }),
    comp: (e) => dispatch({type: "COMP", name: e.target.name})
}};

export default connect (mapStateToProps, mapDispatchToProps)(Calculator);