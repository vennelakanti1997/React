import React from 'react';
import'./Stylesheets/mystyle.css';
export class Counter extends React.Component{
    constructor(){
        super();
        this.state = {count:0}
        
    }

    /* increment = ()=>{
        
        this.setState(prevState=>{return {count:prevState.count+1}})
       
    } */
    increment(message){
        this.setState(prevState=>{return {count:prevState.count+1}})
        alert("Hello " + message +" !");
    }
    
    ClickOnMe= ()=>{alert("I am Clicked!");}

    decrement = ()=>{this.setState(prevState =>{return{count:prevState.count-1}})}
    welcome(message){alert(message.target.value);}
    render(){
        return(
            <div className="counter">
                <p>{this.state.count}</p>
                
                <div><button onClick = {this.increment.bind(this, "member")}>Increment</button></div>
                <div><button onClick = {this.decrement}>Decrement</button></div>
                <div><button value="Welcome" onClick = {(e)=>alert(e.target.value)}>Say Welcome</button></div>
                <div><button onClick = {this.ClickOnMe}>Click on me</button></div>
                
            </div>
            )


    }
}