
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Stylesheets/mystyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

export const MenuComponent = (props)=>{
      console.log("In MenuComponent" + props.user + " "+ props.userId )
       return <Navbar expand="lg" bg="dark" variant="dark">
       <Navbar.Brand href="!#">mStock App</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
       {props.user === 'anonymous' &&  <Nav className="mr-auto">
          
           <Nav.Link href="/" >Login</Nav.Link>
           {/* <Nav.Link href="/companiesanon" >Companies</Nav.Link> */}
           <Nav.Link>
            <NavLink   className="text-muted" to={{
                    pathname:"/companiesanon",
                    state:{
                      userId:props.userId
                     }
                    }}>Comapnies
              </NavLink>
                    
          </Nav.Link>
         </Nav>}

         {props.user === 'user' && <Nav className="mr-auto">
          
          {/* <Nav.Link href="/companies">Companies</Nav.Link> */}
          <Nav.Link>
            <NavLink   className="text-muted" to={{
                    pathname:'/companies',
                    state:{
                      userId:props.userId
                     }
                    }}>Comapnies
              </NavLink>
                    
          </Nav.Link>
          {/* <Nav.Link href="/watchList">WatchList</Nav.Link> */}
          <Nav.Link><NavLink   className="text-muted" to={{
                    pathname:'/watchList',
                    state:{
                      userId:props.userId,
                     }
                    }}>Watch List</NavLink></Nav.Link>
          {/* <Nav.Link href="/stocks/compare-performance" >Compare Performance</Nav.Link> */}
          {/* <Nav.Link href="/stocks/compare-performance" >Compare Performance</Nav.Link> */}
          <Nav.Link>
            <NavLink   className="text-muted" to={{
                    pathname:'/stocks/compare-performance',
                    state:{
                      userId:props.userId,
                     }
                    }}>Compare Performance
              </NavLink>
                    
          </Nav.Link>
          <Nav.Link  href="/" >Logout </Nav.Link>
        </Nav>}
       </Navbar.Collapse>
     </Navbar>
     }
