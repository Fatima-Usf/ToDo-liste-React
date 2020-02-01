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
        }//, () => console.log(this.state.userInput)
        );
    }
    addToDo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }
    renderTodo(){
        // loopé pour chaque item 
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} <button> X </button>
                </div>
            );
        });
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
                    // bind() pour ne pas appeller la méthode une infinité de fois
                    onChange={this.onChange.bind(this)}/>
                <button onClick={this.addToDo.bind(this)}> Add </button>
            </form>
            <div>
                {this.renderTodo()}
            </div>
        </div>
    );
  }
}
export default TodoList;