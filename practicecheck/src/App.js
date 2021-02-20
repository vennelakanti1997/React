
import {LoginComponent} from './Components/logincomponent';
import {CompaniesListComponent} from './Components/companydetailscomponent';
import {WatchList} from './Components/watchlistcomponent';
import {PerformanceComponent} from './Components/performancecomponent';
import {Route,Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
       <Switch>
       <Route exact path="/companies" render={(props) => (
    <CompaniesListComponent {...props} user ='user' />
  )}/>
   <Route exact path="/companiesanon" render={(props) => (
    <CompaniesListComponent {...props} user ='anonymous' />
  )}/>
          {/* <Route exact path="/companies" component={CompaniesListComponent}/> */}
          <Route exact path="/" component={LoginComponent}/>
          <Route exact path="/watchList" component={WatchList}/>
         
          <Route exact path="/stocks/compare-performance" component={PerformanceComponent}/>
      
      </Switch>
    </div>
  );
}

export default App;
