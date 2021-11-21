import React, { Component } from 'react';
import './Box.css';

// BpxList, NewBoxForm , Box  
class Box extends Component {
  constructor(props){
    super(props);
    this.remove =this.remove.bind(this);
  }
  remove(evt){
    this.props.box_func(this.props.id);
  }
  render(){
  let ht  =  this.props.height + "px";
  let wt =  this.props.width + "px";
  let col = this.props.color;
  let mystyle ={
    height: ht,
    width: wt,
    border:"2px",
    backgroundColor: col
  }

  return (
   <div>
      
      <div style ={mystyle}></div>
      <button onClick={this.remove}>Remove me</button>
      

   </div>
   
  );
  }
}

export default Box;