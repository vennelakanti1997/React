import React from 'react';
import'./Stylesheets/mystyle.css';
export class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count:0}
    }

    increment = ()=>{
        this.setState(prevState=>{alert("Hello member!");return {count:prevState.count+1}})
    }
    
    ClickOnMe= ()=>{alert("I am Clicked!");}

    decrement = ()=>{this.setState(prevState =>{return{count:prevState.count-1}})}
    welcome(message){alert(message);}
    render(){
        return(
            <div className="counter">
                <p>{this.state.count}</p>
                
                <div><button onClick = {this.increment}>Increment</button></div>
                <div><button onClick = {this.decrement}>Decrement</button></div>
                <div><button onClick = {this.welcome.bind(this, 'welcome')}>Say Welcome</button></div>
                <div><button onClick = {this.ClickOnMe}>Click on me</button></div>
                
            </div>
            )


    }
}