import React, { Component } from "react";
import List from './todolist'
class Todo extends Component {
    constructor() {
        super();

        this.state = {
            text: "",
            list: []
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    changeHandler(event) {
        this.setState({ text: event.target.value });
    }

    submitHandler(event) {
        event.preventDefault();

        if(!this.state.text.length){
            return;
        }

        const newItem = {
            text: this.state.text,
            key: Date.now()
        }

        this.setState({ list: this.state.list.concat(newItem), text: "" });
        this.text.value = "";
    }

    deleteItem(key) {
        var filteredItems = this.state.list.filter((item) => { return item.key !== key });
        this.setState({ list: filteredItems });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.changeHandler} ref = {(text) => this.text = text}/>
                    <button>OK</button>
                </form>
                <List entries={this.state.list} delete={this.deleteItem} />
            </div>
        );
    }
}

export default Todo;
