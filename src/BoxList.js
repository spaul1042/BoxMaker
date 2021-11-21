import React, { Component } from 'react';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from '../node_modules/uuid/dist/v4';


// BpxList, NewBoxForm , Box  
class BoxList extends Component {
  constructor(props){
    super(props);
    this.state={
      BoxArray:[]
    };
    this.addbox = this.addbox.bind(this);
    this.removebox = this.removebox.bind(this);
    
  }

  addbox(param1, param2, param3){
    // let new_box = <Box id ={uuid()} height={param1} width= {param2} color={param3} />
    let new_box = { id:uuid(), height:param1, width:param2, color:param3 }
    let new_BoxArray = this.state.BoxArray;
    new_BoxArray.push(new_box);
    this.setState({BoxArray:new_BoxArray});
  }

  removebox(id){
    let boxlist =  this.state.BoxArray;
    let new_BoxArray = boxlist.filter( (box) => {return (box.id !== id)}  );
    this.setState({BoxArray:new_BoxArray});

  }

  render(){
  let Random1 = this.state.BoxArray.map(
    (box)=> { return (<Box box_func = {this.removebox} id ={box.id} height={box.height} width= {box.width} color={box.color}/>); }
  );
  return (
   <div> 
      
      <h3> Your Listed Boxes are as follows- </h3>
      {Random1}
      <NewBoxForm form_func={this.addbox}/>

   </div>
   
  );
  }
}

export default BoxList;