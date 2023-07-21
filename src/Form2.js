import { Component } from 'react';
import './App.css';

class Form2 extends Component {
    
  render() {
    return (
        <>
        <h2 className="headtwo">EMPLOYEE FEEDBACK DATA</h2>
        <div className="mainBox">
        {this.props.value.map((item)=>{
          return(
            <h4 className="box">Name : {item.name} | Department : {item.dpt} | Rating : {item.rating}</h4>
          )
        })}
        <button onClick={this.props.tf} className="backBtn" >Go Back</button>
        </div>
        </>
    )
  }
}

export default Form2;