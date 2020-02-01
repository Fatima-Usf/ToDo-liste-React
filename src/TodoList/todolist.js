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

    onChange(event){
        this.setState({
            userInput: event.target.value
        }, () => console.log(this.state.userInput));
    }
    render(){
    return (
        <div> 
            <h1> My TodoList </h1>
            <form> 
                <input 
                    value ={this.state.userInput} 
                    type="text"
                    placeholder="Item"
                    onChange={this.onChange.bind(this)}
                        />
                <button> Add </button>
            </form>
        </div>
    );
  }
}
export default TodoList;