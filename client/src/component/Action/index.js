import axios from 'axios';
import history from '../history';


export const DeleteProduct = (Userid) => dispatch =>{

  axios.delete(`http://localhost:5000/api/delete/${Userid}`)
  .then(res=>{
    dispatch({
      type: 'DELETE_PRODUCT',
      payload:res.data
     
   });
       
   history.push('/');
   });
  }

export const ProductCreated = Formvalue =>async( dispatch)=> {
  

    axios.post("http://localhost:5000/api/new",Formvalue)
     .then(Product=>{
       dispatch({
         type: "ADD_PRODUCT",
         payload:Product.data
     
   });
       
  
   });
   }


   
export const GetProduct = () => dispatch=> {
   
    axios.get("http://localhost:5000/api/produit")
    .then(res=>{
        dispatch({
          type: "ALL_PRODUCT",
          payload:res.data
      
    });
        
    });
    }


    
  export const GetProductt = (UserId) => dispatch =>{

    axios.get(`http://localhost:5000/api/produit/${UserId}`)
    .then(res=>
      dispatch({
        type: 'GET_PRODUCT',
        payload:res.data
    
})).catch(err=>console.log(err))

};
    

    