import React from 'react';
import {GetProductt,DeleteProduct} from './Action';
import {connect}  from 'react-redux';
import Button from '@material-ui/core/Button';;

class Product extends React.Component{


    componentDidMount(){
        this.props.GetProductt(this.props.match.params.UserId);
     
        // this.props.ProfilPicture(this.props.match.params.UserId);
    }


render(){
    
onsubmit =(e)=>{
    e.preventDefault();
this.props.DeleteProduct(this.props.match.params.UserId)
}



    const items= this.props.Produit.map(post=>{
        return <div>{post.name}</div>
    })
        
    
    return(
<div>

        <h1>{items}</h1>  
        <form  noValidate autoComplete="off" onSubmit={this.onsubmit}>
     <Button  type="submit" variant="contained" style={{ margin: "20px"}}>
        Delete
      </Button>
      </form>  
        </div>
        
        
    );
}

}



const  mapStateToProps=(state)=>{
    
  return ({
Produit :state.Product.Produit

  });
  
  }
export default connect(mapStateToProps,

{GetProductt,DeleteProduct}

)(Product);
