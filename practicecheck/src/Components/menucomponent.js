import { LoginComponent} from './logincomponent';
import NavLink from 'react-bootstrap/NavLink';
import './Stylesheets/mystyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CompaniesListComponent } from './companydetailscomponent';

export const MenuComponent = (props)=>{
      console.log("In MenuComponent", props.user)
       return <div>
       <nav className="navbar navbar-dark navbar-expand-lg bg-dark navbar-custom">
       <a className="navbar-brand" href="!#">mStock App</a>
       {/* <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#handson22">
         <span className="navbar-toggler-icon"></span>
       </button> */}
       <div id="handson22">
       {props.user === 'anonymous' && 
       
       <ul className="navbar-nav mr-auto">
           <li className="nav-item">
             <a className="nav-link" href="/" >Login <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/companiesanon" >Companies <span className="sr-only">(current)</span></a>
           </li>
         </ul>
         
        
         }
        
       
       
       {props.user === 'user' &&
       
        <ul className="navbar-nav mr-auto">

           <li className="nav-item">
             <a className="nav-link" href="/companies">Companies <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/watchList" >WatchList <span className="sr-only">(current)</span></a>
                      
           
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/stocks/compare-performance" >Compare Performance <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/" >Logout <span className="sr-only">(current)</span></a>
           </li>
         </ul>
         
         }
        
       </div>
     </nav>
     
     </div>
     }
