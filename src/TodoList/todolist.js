import React, { Component } from 'react';

// creating a component called TodoList
function TodoList() {
    return (
        <div> 
            <h1> My TodoList </h1>
            <form> 
                <input type="text" placeholder="Renseigner un item"/>
            </form>
        </div>
    );
  }
  
export default TodoList;