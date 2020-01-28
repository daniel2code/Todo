import React, { Component } from 'react';
import Header from './Header';

    class Like extends Component{
        state ={ like: 0}
        
        increaseLike = ()=> this.setState((prevState) => ({like : prevState.like + 1 }))
         decreaseLike = ()=> {
             if(this.state.like===0)return
             this.setState((prevState) => ({like : prevState.like - 1 }))}


         resetLike=()=>this.setState({like:0})

        render(){
    
        return (

            <div>
            <Header title ='THIS IS THE LIKES APP HEADER' />
            <h1>Welcome To My Likes APP</h1>
            <h3>Like: {this.state.like} </h3>

            <button onClick = {this.increaseLike} >Like</button>
            <button onClick = {this.decreaseLike} >unlike</button>
            <button onClick = {this.resetLike} >Reset</button>
            
            </div>
        )

    }
    }

    export default Like;