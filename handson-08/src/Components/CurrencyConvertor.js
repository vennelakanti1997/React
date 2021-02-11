import React from 'react';
import'./Stylesheets/mystyle.css';

export class CurencyConvertor extends React.Component{
    constructor(props){
        super(props);
        this.state = {amount:null, type: ' '};
     
    }
    submitHandler = (event)=>{
        console.log("In submit")
        if(this.state.type==='Euro'){
            console.log("In Euro")
            alert(this.state.amount * 35)
            event.preventDefault();
        }
        else{
            console.log("In else")
            alert("Currenct type must be 'Euro'")
        }
    }

    
      handleChange= (event)=>{
          console.log(event.target.name,",",event.target.value);
          let nam = event.target.name;
        let val = event.target.value;
        //alert(nam, val);
        this.setState({[nam]: val});
    }

     

    render(){
        return(
            <div>
                <h1 className="convertor">Curency Convertor!!!</h1>
               
               
                    <table>
                        <tbody>
                        <tr>
                            <td className="formDetails">Amount:</td>
                            <td><input name="amount" type="text" onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                        <td className="formDetails">Currency:</td>
                        <td><input name="type" type="text" onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><button type="submit" onClick={this.submitHandler}>Submit</button></td>
                        </tr>
                        </tbody>
                    </table>
               
            </div>)
    }
}