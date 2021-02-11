import React from 'react';
import './StyleSheets/mystyles.css';
const element = "Office Space"
const sr="https://content.instantoffices.com/Prod/images/centres/original/23673/23673-186397.jpg";
const jsxatt=<img src={sr} width="25%" height="25%" alt="Office Space"/>
const ItemName={Name:"DBS", Rent:50000, Address:"Chennai"}

class Main extends React.Component{
    render(){
        let colors = []
        if (ItemName.Rent <= 60000) {
            colors.push("textRed");
        } else {
            colors.push("textGreen");
        }
        return(
            <div>
            <h1>{element}, at Affordable Range</h1>
             {jsxatt}
             <h1>Name: {ItemName.name}</h1>
            
             <h3 className={colors}>Rent: Rs. {ItemName.Rent}</h3>
             <h3>Address: {ItemName.Address}</h3>
            </div>
        )
    }
}

export default Main;