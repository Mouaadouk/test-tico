import _ from 'lodash';


const Initialize={
    Produit: []
    
 
}


export default (state=Initialize,action)=>{

    switch(action.type){
         case 'ADD_PRODUCT': 
                           return {
                            ...state.Produit,
                           Produit:action.payload
                           }
         case 'ALL_PRODUCT':
                            return{
                                ...state,
                              
                                Produit:action.payload
                            }
        case 'GET_PRODUCT': return{
            ...state,
            Produit:action.payload
        }

        case 'DELETE_PRODUCT': 
        return  _.omit(state,action.payload);
        
    




         default:
             return state;                       
    }};