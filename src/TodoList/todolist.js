import React, { Component } from 'react';

const MAX_LENGTH = 3;

// creating a component called TodoList
class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: [],
            valid: true

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
    deleteTodo(item) {
    
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
    renderTodo(){
        // loopé pour chaque item 
        return this.state.items.map((item) => {
            return (
                <div className="list__item" key={item}>
                    <div className="list__checkbox">
					<input type="checkbox" />
                    {item} <button onClick={this.deleteTodo.bind(this, item)}> X </button> 
                    </div>
                </div>
            );
        });
    }
    render(){
    return (
        <div className="container">  
            <h1> ToDo Today </h1>
            <form> 
                <input className="forminput" 
                    value ={this.state.userInput} 
                    type="text"
                    name="name"
                    placeholder="Add new item"
                    style={this.state.userInput.length>MAX_LENGTH ? {"border":"2px solid red"}: {}}
                    //style={{border:"2px solid red"}}
                    // bind() pour ne pas appeller la méthode une infinité de fois
                    onChange={this.onChange.bind(this)}
                    />
                    
                <button
                    onClick={this.addToDo.bind(this)}
                    disabled={this.state.userInput.length>MAX_LENGTH}
                >
                    Add
                </button>
                <span style={{color: "red"}}>
                    {`Current count: ${this.state.userInput.length}/${MAX_LENGTH}`}
                </span>
            </form>
            <div>
                {this.renderTodo()}
            </div>
        </div>
    );
  }
}
export default TodoList;