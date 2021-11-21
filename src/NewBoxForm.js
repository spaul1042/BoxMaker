import React, { Component } from 'react';


// BpxList, NewBoxForm , Box  
class NewBoxForm extends Component {
  constructor(props){
    super(props);
    this.state={
      ht:0,
      width:0,
      color:""
    };
    this.handlechange = this.handlechange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlechange(evt){
      this.setState({[evt.target.name]: evt.target.value });
  }
  handlesubmit(evt){
    evt.preventDefault();
    this.props.form_func(this.state.ht, this.state.width,this.state.color);
  }

  render(){
  
  return (
   <div>
    
      <form onSubmit={this.handlesubmit}>
        <div>
            Height <input name="ht"  onChange={this.handlechange} type = "number" value={this.state.ht}></input>
        </div>
        <div>
            Width <input name="width" onChange={this.handlechange} type = "number" value={this.state.width}></input>
        </div>
        <div>
            Color <input name="color" onChange={this.handlechange} type = "text" value={this.state.color}></input>
        </div>
        <button>Submit</button>
      </form>

   </div>
   
  );
  }
}

export default NewBoxForm;