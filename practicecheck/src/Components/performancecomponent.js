import React from 'react';
import './Stylesheets/mystyle.css';
// import {MenuComponent} from './menucomponent';
import {MenuComponent} from './menucomponentNav';
export class PerformanceComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {comapny1:0, comapny2:0, fromdate:'', todate:'', isClicked:false, data: [],isLoading: true, tabularData:[], gotTaularData:false}
    }
    componentDidMount() {
        fetch('http://localhost:8080/companies')
          .then((response) => response.json())
          .then((json) => {
              console.log(json)
            this.setState({ data: json});
            json.map((item)=>console.log(item.companyId))
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });}

    handleSubmit=(event)=>{
        event.preventDefault();
        let url = "http://localhost:8080/stocks/compare-performance?companyCode1="+this.state.comapny1+"&companyCode2="+this.state.comapny2+"&from="+this.state.fromdate+"&to="+this.state.todate
        console.log(url)
        fetch(url).then((response)=>response.json()).then((json)=>{console.log(json);this.setState({tabularData:json}, console.log("Data is: " + this.state.tabularData))})
        .then(this.setState({gotTaularData:true}))
        // .then(console.log(this.state.tabularData))
        console.log("Tabular Data: ")
        this.state.tabularData.map((item)=>console.log(item.company))
       }
    handleOnChange = (event)=>{this.setState({[event.target.name]:event.target.value})
     console.log([event.target.name] + ' :' + event.target.value)}
    
    render(){
        return ( <div>
            <MenuComponent user="user" userId={this.props.location.state.userId}/>
        <div className="container pt-5">
  <form className="pl-1" onSubmit={this.handleSubmit}>
      <div className="form-row text-left">
      <h1 className="col-8" >Compare potential companies</h1>
        <h2 className="col-8 text-muted">Make smart investment decision</h2>
      </div>
      <div className="form-row text-left">
          <div className="form-group col-4">
             <label htmlFor="company1">Select company 1</label>
             {/* <input type="text" name = "comapny1" className="form-control" id="company1" value={this.state.comapny1} onChange={this.handleOnChange} placeholder="Choose..."/> */}
             <select className="form-control" value={this.state.comapny1} onChange={this.handleOnChange} name="comapny1">
                 <option value="0">Choose..</option>
                 {this.state.data.map((item)=><option value={item.companyId}>{item.companyName}</option>)}
             </select>

           </div>  
        <div className="form-group col-4">
            <label htmlFor="company2">Select company 2</label>
            {/* <input type="text" name = "comapny2" className="form-control" id="company2" value={this.state.comapny2comapny2} onChange={this.handleOnChange} placeholder="Choose..."/> */}
            <select className="form-control" value={this.state.comapny2} onChange={this.handleOnChange} name = "comapny2">
                 <option value="0">Choose..</option>
                 {this.state.data.map((item)=><option value={item.companyId}>{item.companyName}</option>)}
             </select>
        </div>    
      </div>

      <div className="form-row text-left"> 
      <div className="form-group col-4">
        <label htmlFor="fromdate">From Date</label>
        <input type="text" name = "fromdate" className="form-control" id="fromdate" value={this.state.fromdate} onChange={this.handleOnChange}/>
       
    </div>
    <div className="form-group col-4">
        <label htmlFor="todate">To Date</label>
        <input type="text" name = "todate" className="form-control" id="todate" value={this.state.todate} onChange={this.handleOnChange}/>
       
    </div>
      </div>
    <div className="form-group text-left col-4">
        
        <button type="submit" className="btn btn-primary">Fetch Details</button> 
    </div>
  
 </form>

 {this.state.gotTaularData===true && <div className="col-8">
     <table className="table">
         
             <thead className="text-left">
                 <th scope="col">Date</th>
                 <th scope="col">Company</th>
                 <th scope="col"> Stock Price</th>
             </thead>
             <tbody className="text-left">
             {this.state.tabularData.map((item)=>
             <tr>
                 <th>{this.state.comapny2 == item.company.companyId ? '': item.date}</th>
                 <td >{item.company.companyName}</td>
                 <td>${item.stockPrice}</td>
             </tr>)}

         </tbody>
     </table>
 </div>}
 </div>
 </div>
        )}
}