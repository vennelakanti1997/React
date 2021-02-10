import React from 'react';

class FilterPlayers extends React.Component{
    render(){
        
        return(
            this.props.players.filter((item) => item.score<=70).map((filteredItem)=>{
                console.log("in here");
                return(
                    
                    <div className="itemDetails">
                    <li>Mr. {filteredItem.name} <span>{filteredItem.score}</span></li>
                </div>
                    )
            })
        )}
}
export {FilterPlayers};

export function OddPlayers([first, , third, , fifth, , seventh, ninth, elevent]){
    return (
        <div>
            <li>First: {first.name}</li>
            <li>Third: {third.name}</li>
            <li> Fifth: {fifth.name}</li>
            <li> Seventh: {seventh.name}</li>
            <li>Ninth: {ninth.name}</li>
            <li>Eleventh: {elevent.name}</li>

        </div>
    )
}

export function EvenPlayers([, second, , fourth, , sixth, , eigth, , tenth]){
    return(
        <div>
            <li>Second: {second.name}</li>
            <li>Fourth: {fourth.name}</li>
            <li>Sixth: {sixth.name}</li>
            <li>Eigth: {eigth.name}</li>
            <li>Tenth: {tenth.name}</li>
        </div>
    )
}