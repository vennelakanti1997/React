import React from 'react';
import {FilterPlayers} from './FilterPlayers';
import {DisplayPlayers} from './DisplayPlayers';
import { OddPlayers} from './FilterPlayers';
import{EvenPlayers} from './FilterPlayers';
import {MergedPlayers} from './MergerdPlayers';
import './Stylesheets/mystyle.css';
export class ListofPlayers extends React.Component{
    render(){
        const playersInfo=[{name:"Jack",score:50},
        {name:"Michael",score:70},
        {name:"John",score:40},
        {name:"Ann",score:61},
        {name:"Elisabeth",score:61},
        {name:"Sachin",score:95},
        {name:"Dhoni",score:100},
        {name:"Virat",score:84},
        {name:"Jadeja",score:64},
        {name:"Raina",score:75},
        {name:"Rohit",score:80}];
        let flag = false;
        
    
        return(
            <div className="mydiv">
                {flag===true && <div>
                <h1>Players in team :</h1>
                <DisplayPlayers players={playersInfo}/>
               <hr/>
              

              
               <h1>List of Players having scores less than 70 </h1>
               <FilterPlayers players={playersInfo}/>
               
               </div>}
               
               {flag===false && <div>
               <h1>Odd Players</h1>
               {OddPlayers(playersInfo)}
               <hr/>
               
               <h1>Even Players</h1>
              {EvenPlayers(playersInfo)}
              <hr/>
              
               <h1>Merged Players</h1>
               {MergedPlayers.map((item)=>{
                   return <li>Mr. {item}</li>
               })}
               </div>}

            </div>

        )

    }

  }