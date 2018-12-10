import React, { Component } from 'react';

class Calci extends Component {
    constructor() {
        super();
        this.state = {
            val: 0,
            num1: 0,
            num2: 0
        }
    }

change1 = (e) => {
    this.setState({num1: e.target.value});
}
change2 = (e) => {
    this.setState({num2: e.target.value});
}

sum = () => {
    const val= parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({val: val});
}

        render(){
            console.log(this.state.num1);
            return(
                <div>
                    <input type="number" name="num1" onChange={this.change1}  /> 
                    <input type="number" name="num2" onChange={this.change2}  />
                    <button onClick = {this.sum}>ADD</button>
                    {this.state.val}
                    <p id="sum"></p>
                </div>
            );
        }

    }
    export default Calci;