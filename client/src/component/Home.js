import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {GetProduct} from './Action';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';



class Home extends React.Component{

    componentDidMount(){
        this.props.GetProduct();
        console.log(this.props)
    }




render(){
   
   
    return(
        <Paper style={{root: {
            width: '100%',
            overflowX: 'auto',
          }}}>
      <Table style={{table: {
    minWidth: 650,
  }}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right" style={{fontFamily:"solid"}}>type</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">rating</TableCell>
            <TableCell align="right">warranty_years</TableCell>
            <TableCell align="right">available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.Produit.map(produit => (
            <TableRow key={produit._id}>
              <TableCell component="th" scope="row">
              <Link to ={`/Produit/${produit._id}`} >{produit.name}</Link> 
              </TableCell>
              <TableCell align="right">{produit.type}</TableCell>
              <TableCell align="right">{produit.price}</TableCell>
              <TableCell align="right">{produit.rating}</TableCell>
              <TableCell align="right">{produit.warranty_years}</TableCell>
              <TableCell align="right">{produit.available}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

}

const mapStateToProps=(state)=>{
    return( {  
        Produit:state.Product.Produit
        });
   };
   
    export default connect(
   mapStateToProps,
   {GetProduct}
    )(Home);
   