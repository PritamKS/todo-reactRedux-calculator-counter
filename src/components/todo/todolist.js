import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }
    
    createTasks(item){
        return(
            <div key={item.key}>
            <input type = "checkbox" />
            {item.text}
            <button onClick={()=>this.delete(item.key)}>delete</button>
            </div>
        );
    }

    render() { 
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return ( 
            <div>
            {listItems}
            </div>
         );
    }
}
 
export default List;