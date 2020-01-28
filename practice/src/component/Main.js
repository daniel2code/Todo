import React, { Component } from 'react';
import Child from './Pikin';

class Main extends Component{
state = {
    name1:'Dan',
    age: 2,
    arr:[1,2,3,4,5],
    func:app = ()=>{}
};
app = ()=>{
    this.setState({arr: [5]})
}

render(){
    

        return <div>
        <Child  name={this.state.name1}/>
        <h2> This is a parent {this.state.age} </h2>
        </div> 
    }
}


// const Main = ()=>{
//         return <div>
         
//         <h2> This is a parent </h2>
        
//          </div>
//     }


export default Main;