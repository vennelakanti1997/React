import React from 'react';
import { Card } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';
import {CompanyDetailsComponent} from './companydetailscomponent';
import {MenuComponent} from './menucomponentNav';
/* const handleSubmit=(e, userId) =>{
  
  console.log("Handle Submit: "+e.target.id)
  let requestBody={"userId":userId, "companyId": parseInt(e.target.id)}
  let url = "http://localhost:8080/watchList"
  
  try{
    fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }).then((response) => {response.status===200?alert("Successfully removed from the watch list. UserId: " + userId + " ItemId: " + e.target.id):alert("Failed")})
    .catch((error)=>alert("Cannot remove from watch list." + error))
  } catch(e){
    console.log(e.message)
  }

  } */
  // The delete request is not implemented in the backend. So simply displaying the alert message.
  const handleSubmit=(e, userId) =>{
  
    console.log("Handle Submit: "+e.target.id)
    alert("Successfully removed from the watch list. UserId: " + userId + " ItemId: " + e.target.id)
  }
var userId;
export class WatchList extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.userId)
        this.state = {
          data: [],
          isLoading: true
        };
      }
    
      componentDidMount() {
        try{
          userId = this.props.location.state.userId;
          console.log("UserIDDDDDDDDDDDDdd"+JSON.stringify(this.props.location.state.userId))
      }
      catch(e){
          console.log(e);
          userId = this.props.userId;

      }
      finally{
       let user='user'
      }
          console.log("UserId in ComponentDidMount: " + userId)
        fetch('http://localhost:8080/watchList/' + userId)
          .then((response) => response.json())
          .then((json) => {
            //   console.log(json)
            this.setState({ data: json});
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });}

    render(){
        return(
            <div>
               <MenuComponent user='user' userId={userId}/>
                <h1 className="ml-5 text-left">My Companies List</h1>
                
                {this.state.data.length===0 && <p>No company stock prices added to watch list</p>}
                {this.state.data.length>0 && <CardDeck className="pl-5 mr-5">
                  {this.state.isLoading? <li>"Data is loading"</li>:this.state.data.map((item) =>{console.log(item.comapny)
                  return < CompanyDetailsComponent userId={item.user.id} id={item.company.companyId} key = {item.company.companyId} companyName={item.company.companyName} description={item.company.description} currentStockPrice={item.company.currentStockPrice} 
                  buttonType="danger" buttonText="Remove" usertype='user'/>})}
                </CardDeck>
                    // {console.log(this.state.data[0].company)}
                

                }
            </div>
            )
    }
}