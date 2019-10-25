import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {ProductCreated} from './Action'
import {connect} from 'react-redux';


class RegisterForm extends React.Component {


constructor(props){
  super(props)
 
  this.state ={
    name:'',
    type:'',
    price:'',
    rating:'',
    warranty_years:'',
    available:''
  };
 
}
Onsubmit =(e)=>{
  e.preventDefault();
  const info = {
    name:this.state.name,
    type:this.state.type,
    price:this.state.price,
    rating:this.state.rating,
    warranty_years:this.state.warranty_years,
    available:this.state.available
  }
  this.props.ProductCreated(info);
  this.setState({
    name:'',
    type:'',
    price:'',
    rating:'',
    warranty_years:'',
    available:''
  })
}
render(){

  return (
    <form 
     style={{ display: 'flex', flexWrap: 'wrap'}} 
     noValidate autoComplete="off" 
      onSubmit={this.Onsubmit} >
      <TextField
      required
        id="standard-name"
        style={{ 
          marginLeft: '10',
          marginRight: '10px',
          width: 200,
        }}
        label="name"
        onChange= {e=>this.setState({name:e.target.value})} value={this.state.name}
        margin="normal"
        type="text"
      />
      <TextField
      required
        id="standard-uncontrolled"
        label="type"
        style={{ 
          marginLeft: '10px',
          marginRight: '10px',
          width: 200,
        }}
        defaultValue="foo"
        onChange= {e=>this.setState({type:e.target.value})} value={this.state.type}
        margin="normal"
        type="text"
      />
      <TextField
        required
        style={{ 
          marginLeft: '10px',
          marginRight: '10px',
          width: 200,
        }}
        id="standard-required"
        label="price"
        defaultValue="Hello World"
        onChange= {e=>this.setState({price:e.target.value})} value={this.state.price}
        margin="normal"
        type="text"
      />
      <TextField
        required
        style={{ 
          marginLeft: '10px',
          marginRight: '10px',
          width: 200,
        }}
        id="standard-error"
        label="rating"
        defaultValue="Hello World"
        onChange= {e=>this.setState({rating:e.target.value})} value={this.state.rating}
        margin="normal"
        type="text"
      />
      <TextField
        required
        id="standard-disabled"
        style={{ 
          marginLeft: '10px',
          marginRight: '10px',
          width: 200,
        }}
        label="warranty_years_years"
        defaultValue="Hello World"
        onChange= {e=>this.setState({warranty_years:e.target.value})} value={this.state.warranty_years}
        margin="normal"
        type="text"
      />
      <TextField
      required
        id="standard-password-input"
        style={{ 
          marginLeft: '10px',
          marginRight: '10px',
          width: 200,
        }}
        label="available"
    
        type="password"
        onChange= {e=>this.setState({available:e.target.value})} value={this.state.available}
        autoComplete="current-password"
        margin="normal"
        type="text"
      />
      <Button  type="submit" style={{
        button: {
          margin: '10px',
          textAlign: 'center'
        }}} variant="contained" >
        Default
      </Button>
      
    </form>
  );
}
}





export default connect(null,

{ProductCreated}

)(RegisterForm);
