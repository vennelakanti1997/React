// import {MenuComponent} from './menucomponent';
import {MenuComponent} from './menucomponentNav';
import {CompaniesListComponent} from './companydetailscomponent';
import{WatchList} from './watchlistcomponent';
import './Stylesheets/mystyle.css';
import React from 'react';


export class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        
        this.state={email:'', password:'', erroremail: '', errorpassword: '', authMessage:'', isLoggedin:false, userType:'anonymous', userId:null}
    }
     

    handleOnChange = (event)=>this.setState({[event.target.name]:event.target.value})
       
    handleSubmit = (event) => {
      let errormail = false
      let errorpassw = false
      event.preventDefault();

      /* validating password */
      if(this.state.password.length <=0 || this.state.password=='') {
          this.setState({errorpassword:"Password is required"})
          errormail = true
          }else{
            errormail = false
            this.setState({errorpassword:""})
          
        }
        /* validating emal.*/
        const validEmailRegex = 
          RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
 
            
            if(validEmailRegex.test(this.state.email)){
              this.setState({erroremail: ''})
              errorpassw = false
            }
            else{
              this.setState({erroremail: 'Email is required'})
              errorpassw=true
            }
           
            /* If user not found, Raise error or else set the usertype to user */
            if(!(errorpassw || errormail)){
              let requestBody = {"email":this.state.email, "password":this.state.password}
              
              let url = 'http://localhost:8080/users'
                try {
                  fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      }).then((response) => {
                 
                console.log("Response status is: "+ response.status)
                         if(response.status === 404){
                          this.setState({authMessage:"Invalid Username/Password"},  ()=>{console.log("AuthResponse: " + this.state.authMessage)})
                          
                         }
                         else{
                           //console.log("useridJson " + response.json())
                          //  this.setState({userId:response.json().id})
                          return response.json()
                         }
                         
                        }).then((json)=>{this.setState({userId:json.id},console.log("UserID: "+this.state.userId))
                        this.setState({userType:'user'})
                        this.setState({authMessage:""},  ()=>{console.log("AuthMessage:  " + this.state.authMessage)})
                      }).catch((e)=> console.log("Error: "+e.toString()))
                    }     
                    
                    catch(e){
                      console.log("There is error which shows "+e.message); //Handling error  
                    }
             
              
             

            }
            else{

            }

      }
    
      render(){
          return  (
            <div>
              {this.state.userType ==='anonymous' &&<div>
                {/* header is dispalyed based on the type of the user  */}
                <MenuComponent user={this.state.userType}/>
                {/* Display the login form if the user is not logged in */}
                 <div className="container pt-5">
                <h1 className="col-4 text-left">Lets get started by login</h1>
                <div className="col-4 text-danger text-left">The fields marked with * are required</div>
                <ul className="text-danger text-left">
                {this.state.erroremail !='' && <li key="emailmessage">{this.state.erroremail}</li>}
                {this.state.errorpassword !='' && <li key ="errorpassword">{this.state.errorpassword}</li>}
                </ul>
                <div className="text-danger col-4">{this.state.authMessage}</div>
          <form onSubmit={this.handleSubmit}>
             <div className="form-group text-left col-4">
                <label htmlFor="exampleInputEmail1">Email address</label><label className="text-danger">*</label>
                <input type="text" name = "email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleOnChange}/>
                
            </div>

            <div className="form-group text-left col-4">
                <label htmlFor="exampleInputPassword1">Password</label><label className="text-danger">*</label>
                <input type="password" name = "password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handleOnChange}/>
               
            </div>
          
            <div className="form-group text-left col-4">
                
                <button type="submit" className="btn btn-primary">Submit</button> 
            </div>
          
         </form>
         </div>
         
         </div>}
         {/* Display the companies list if the user is an anonymous user */}
         {console.log("userid: " + this.state.userId)}

         {this.state.userType==='user' && <div>
          <WatchList userId={this.state.userId} user={this.state.userType}/></div>
        
         }
         </div>
       );
      }
    
    }
