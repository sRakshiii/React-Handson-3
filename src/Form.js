import './App.css';
import { Component } from "react";
import Form2 from './Form2';
class Form extends Component{
    
    state={
            name:"",
            dpt:"",
            rating:"",
            click:true,
            data:[]
    }

    handlechange = (event)=>{
      this.setState({[event.target.name]:event.target.value})
    }

    togglefunction = () =>{
      this.setState({click: !this.state.click})
    }

    handleClick=()=>{
      const obj={
            name:this.state.name,
            dpt:this.state.dpt,
            rating:this.state.rating
          }
      this.state.data.push(obj);
      this.setState({data:this.state.data,click:false, name: "", dpt: "", rating:""})
    }
    render(){
      return(
        <>
        {this.state.click ?
          <div className="App">
          <h2>EMPLOYEE FEEDBACK FORM</h2>
          <br></br>
          <label>Name :  
          <input type="text" name="name" onChange={this.handlechange}  value={this.state.name} className="inputBox"/>
          </label>
          <br></br>
          <br></br>
          <label>Department :  
          <input type="text" name="dpt" onChange={this.handlechange}  value={this.state.dpt} className="inputBox"/>
          </label>
          <br></br>
          <br></br>
          <label>Rating :  
          <input type="text" name="rating" onChange={this.handlechange}  value={this.state.rating} className="inputBox"/>
          </label>
          <br></br>
          <br></br>
          <button onClick={this.handleClick}>Submit</button>
          </div>
          :
          <Form2 value={this.state.data} tf={this.togglefunction}/>
        }
        </>
      )
    }
}
export default Form;
