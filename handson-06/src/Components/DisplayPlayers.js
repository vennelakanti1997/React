
import React from 'react';

class DisplayPlayers extends React.Component{
    render(){
        return(
            this.props.players.map((item)=>
            {
                return(<div className="itemDetails">
                    <li>Mr. {item.name} <span>{item.score}</span></li>
                </div>)
            })
        )}
}

export {DisplayPlayers};