import React, {Component} from 'react'
class TodoItems extends Component{ 
        state = {
                TodoItems: [],
                newTodo: ''
                
}; 



componentDidUpdate(prevProps, prevState){
          if(prevState.TodoItems.length !== this.state.TodoItems.length){
                  const jsonState = JSON.stringify(this.state.TodoItems) 
                  localStorage.setItem('TodoItems', jsonState)
          } 
        }
        
        componentDidMount(){
                const itemsFromLocalStorage = localStorage.getItem('TodoItems')
                const todoItem = JSON.parse(itemsFromLocalStorage)
                this.setState(() => ({
                        TodoItems:todoItem
          }))
 handleRemoveOneItem = (itemsToBeRemoved) => {
        this.setState(prevState => ({
                TodoItems:prevState.TodoItems.filter(
                        todoItem => todoItem !==itemsToBeRemoved
                )
        }))
 // console.log('handleRemoveOneItem')
   // alert('welcome')
                                                                
                                                        
  }  
  
  handleClearItem = (itemsToBeRemoved) => {
          alert('you are about to delete all')
          this.setState(prevState =>({
                  todoItem:prevState.todoItem.filter(
                          TodoItems => TodoItems === itemsToBeRemoved
                  )
          }))
  }

  handlechange = (e) => {
          this.setState({newTodo:e.target.value}) 
         

          
        }
                  handleSubmit = (e) => {
                          e.preventDefault();
                          if(this.state.newTodo === '')return;
                          this.setState(prevState => {
                                  return {
                                          TodoItems:prevState.TodoItems.concat(this.state.newTodo)
                                  }
                          })
                         
                  } 


         
                  

                  
render(){     
  return(
   <div>
            <h2>welcome to Todo app</h2>
            <ul>{this.state.TodoItems.map((item, i) =>
                <li key ={i}>{item} 
                <button onClick={()=>this.handleRemoveOneItem (item)}>remove</button>
                </li>
                )}</ul>
            <form onSubmit={this.handleSubmit} required>

            <label>TodoItems</label>
            <input type= 'text' value={this.state.newTodo} onChange={this.handlechange}></input>
            <button>submit</button>
            </form>
            
            <button onClick = {()=>this.handleClearItem()}>Clear All</button>

            </div>
            
            )
            
        }
}
export default TodoItems;