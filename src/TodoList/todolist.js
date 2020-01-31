import React, { Component } from 'react';

// creating a component called TodoList
class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    render(){
    return (
        <div> 
            <h1> My TodoList </h1>
            <form> 
                <input value ={this.state.userInput} type="text" placeholder="Renseigner un item"/>
                <button> Add </button>
            </form>
        </div>
    );
  }
}
export default TodoList;