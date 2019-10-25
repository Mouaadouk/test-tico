// import RegisterForm from './Auth/RegisterForm';
import Header from './Layout/Header';
import Home from './Home';
import {Router,Link,Route,Switch} from 'react-router-dom';
import history from './history';
import Footer from './Layout/Footer';
import RegisterForm from './RegisterForm';
import Product from './Product';
import React from 'react';

// import Profils from './Profils/Profils';
// import Search from './Layout/Search'
// import SearchNotFound from './SearchNotFound';
// import './app.css';
import './app.css';

const App = ()=>{

  return(
      
  <div className="app">

    <Router history={history}>
   <div className="ui container" >
           <Header/>
           

           <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/Register" exact component={RegisterForm}/>
                  <Route path="/Produit/:UserId" exact component={Product}/>
                  
                  
           </Switch>
          
         
  </div>
  </Router>
  </div>
      );

  };


export default App;
