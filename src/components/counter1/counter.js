import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    render(){
        return(
            <div>
            <button onClick = {this.props.incr}>+</button>
            <span>{this.props.count}</span>
            <button onClick = {this.props.decr}>-</button>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = (dispatch) => {
    return{
    incr: () => dispatch({type: "incr"}),
    decr: () => dispatch({type: "decr"})
};
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);