import React from 'react';
import './Stylesheets/mystyle.css';
export class Complaints extends React.Component{
    constructor(props){
        super(props);
        this.state={ename:' ', complaint:' ', NumberHolder:null}
    }

    handleChange = (event) => {
        console.log([event.target.name]+":"+event.target.value);
        this.setState({[event.target.name]:event.target.value})
    }
    

    handleSubmit = (event)=>{
        var msg='Thanks '+ `${this.state.ename}` +' \n Your Complaint was Submitted. \n' +'Transaction ID is: ' + Math.floor(Math.random() * 100) + 1;
        alert(msg);
      event.preventDefault();
    }

    

    render(){
        return(
            <div >
                
                <form onSubmit={this.handleSubmit}>
                    <table className="rootFrame">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                <h1 className="heading">Register you complaints here!!!</h1>
                                </td>
                            </tr>
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" value={this.state.ename} name="ename" onChange={this.handleChange}></input></td>
                            </tr>
                            <tr>
                                <td>Complaint:</td>
                                <td>
                                    <textarea value={this.state.complaint} name= "complaint" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><button type="submit">Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
            )
    }
}