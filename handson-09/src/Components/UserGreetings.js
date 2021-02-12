import React from 'react';
import './Stylesheets/mystyle.css';
function GuestGreeting(){
    return (<h1>Please SignUp</h1>);
       
}

function UserGreeting(){
    return (<h1>Welcome back</h1>);
}

function LoginButton(props){
    return (
        <button onClick={props.onClick}>Login</button>);
}


function LogoutButton(props){
    return (
        <button onClick={props.onClick}>Logout</button>);
}


function Greetings(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}


export class UserGreetings extends React.Component{
    constructor(props){

        super(props);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick = ()=>{
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = ()=>{
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        }
        else{
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }
        return (
            <div className="userlogin">
                <Greetings isLoggedIn = {isLoggedIn}/>
                {button}
            </div>
            );}
}

