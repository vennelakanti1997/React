import React from 'react';

import './Stylesheets/mystyle.css'
class Cart extends React.Component {
    render() {
      return(
        <div>
            <table className='table'>

        { this.props.item.map((item)=>
            {
             return(
                 <tr>
                     <td>{item.itemname}</td>
                     <td>{item.price}</td>
                 </tr>
                 )
            }
            )
        }
        </table>
        </div>

      )
    }
}

export default Cart;