import React from "react";
import './Stylesheets/mystyle.css';
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
export class MailForm extends React.Component{
    constructor(props){
        super(props);
        this.state={uname:'', passw:'', email:'', 
                    errors: {uname: '',email: '',passw: '',}
                }
    }

    handleOnChange = (event)=>{
        console.log([event.target.name]+':'+event.target.value)
        this.setState({[event.target.name]:event.target.value})
        //const { name, value } = event.target;
        const value = event.target.value;
        const name = event.target.name;
        let errors = this.state.errors;
        if(name === 'uname'){
            errors.uname = value.length < 5 ? "User name should have atleast 5 characters" : ' ';
        }
        else if(name==='passw'){
            errors.passw = value.length < 8 ? "Password should have atleast 8 characters" : ' ';
        }
        else {
            const validEmailRegex = 
          RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
            errors.email = validEmailRegex.test(value) ? '': 'Email is not valid!';
        }

        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })
    }

   
    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.log('Valid form');
          console.log(this.state.errors.uname, this.state.errors.email, this.state.errors.passw)
          }else{
            if(this.state.errors.uame!='')
            {alert(this.state.errors.uname)}
            if(this.state.errors.email !='')
          {alert(this.state.errors.email)}
          if(this.state.errors.passw !='')
          {alert(this.state.errors.passw)}
        }
      }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
            <table className="rootFrame">
                <tbody>
                    <tr><td colSpan="2"><h1 className="heading">Register Here!!!</h1></td></tr>
                    <tr>
                        <td>Name: </td>
                        <td><input type="text" name="uname" value={this.state.uname} onChange={this.handleOnChange}/></td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td><input type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/></td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td><input type="password" name="passw" value={this.state.passw} onChange={this.handleOnChange}/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"> <button type="submit">Submit</button></td>
                    </tr>
                </tbody>
            </table>
            </form>
            </div>
        )
    }
}