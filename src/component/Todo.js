import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems';


class Todo extends Component{

    render()
         
    {

        const todoItems = ['study','exercise','eat','sleep','work','sit','dance','cook']
        
        return(
            <div>

            <Header title = 'MY TODO TITLE'/>
            <h1>Welcome my Todo app</h1>

            <TodoItems todoList = {todoItems} />

            
            
        
        } 

            </div>

        )
    }
}
export default Todo