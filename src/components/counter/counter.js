import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
 render() {
   return (
     <div>
       <h1>Counter</h1>
       <button onClick={this.props.Increment}>+</button>
       <span>{this.props.count}</span>
       <button onClick={this.props.Decrement}>-</button>
     </div>
   );
 }
}

const mapStateToProps = state => ({
 count: state.count
});

const mapDispatchToProps = dispatch => {
 return {
   Increment: () => dispatch({ type: "INC" }),
   Decrement: () => dispatch({ type: "DEC" })
 };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);