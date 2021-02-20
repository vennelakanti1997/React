import React from 'react';
import './Stylesheets/mystyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
// import {MenuComponent} from './menucomponent';
import {MenuComponent} from './menucomponentNav';
const handleSubmit=(e, userId) =>{
  
  console.log("Handle Submit: "+e.target.id)
  let requestBody={"userId":userId, "companyId": parseInt(e.target.id)}
  let url = "http://localhost:8080/watchList"
  
  try{
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }).then((response) => {response.status===200?alert("Successfully added to the watch list. UserId: " + userId + " ItemId: " + e.target.id):alert("Failed")})
    .catch((error)=>alert("Cannot add to watch list." + error))
  } catch(e){
    console.log(e.message)
  }

  }
  
  // const handleSubmit=(e, userId) =>{console.log("UserId: " + userId + " ItemId: " + e.target.id);alert("Successfully added to the watch list.")}
export function CompanyDetailsComponent(props){
    // console.log("In card.Itemid is: " + props.userId)

    return   <Col lg={4}>
    <Card className="text-left mt-3">

        <Card.Header>{props.companyName}</Card.Header>
        <Card.Body>
           
            <Card.Text>
                 {props.description}
            </Card.Text>
            
        </Card.Body>
         <Card.Footer className="text-muted"><span className="ml-1">Today's Price: ${props.currentStockPrice}</span>
         {props.usertype==='user' && <Button id={props.id} className="ml-1" onClick={(e)=>handleSubmit(e,props.userId)} variant={props.buttonType} type = "submit" >{props.buttonText}</Button>}
         </Card.Footer>
    </Card>
    </Col>;

}
export class CompaniesListComponent extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          data: [],
          isLoading: true
        };
      }
    
      componentDidMount() {
        fetch('http://localhost:8080/companies')
          .then((response) => response.json())
          .then((json) => {
              console.log(json)
            this.setState({ data: json});
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });}

    render(){
      console.log("Usertype is: " + this.props.user)
        return(
            <div>
            <MenuComponent user={this.props.user} userId={this.props.location.state.userId}/>
            <div>
                
                <h1 className="text-left pl-5 ml-3">CompaniesList</h1>
                <CardDeck className="pl-5 mr-5">
                {this.state.isLoading? <li>"Data is Loading"</li>: this.state.data.map((item) => { console.log("userid: "+ this.props.location.state.userId)
                  return  <CompanyDetailsComponent userId={this.props.location.state.userId} id={item.companyId} key = {item.companyId} companyName={item.companyName} description={item.description} currentStockPrice={item.currentStockPrice} usertype={this.props.user}
                  buttonType="primary" buttonText="Watch"/>})}
                </CardDeck>
            </div>
            </div>
            )
    }
}