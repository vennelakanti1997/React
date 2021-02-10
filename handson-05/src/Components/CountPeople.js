import React from 'react';


class CountPeople extends React.Component{
    constructor(){
        super();
        this.state={entrycount: 0,
        exitcount:0,
    c:0};
    
    }
    updateEntry(){
        this.setState((prevState,props)=>{
            return {entrycount: prevState.entrycount+1}
        });
    }
    updateExit(){
        this.setState((prevState, props)=>{
            return {exitcount: prevState.exitcount+1}
        });
    }

    render(){
        return(
            <div>
                <span><button onClick={this.updateEntry.bind(this)}>Login</button></span>
                <span><label>{this.state.entrycount} People Entered!!</label></span>
                <span><button onClick={this.updateExit.bind(this)}>Exit</button></span>
                <span><label>{this.state.exitcount} People left!!</label></span>
            </div>)
    }
   
}

export {CountPeople};