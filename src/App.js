import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Checkout from './Checkout.js';
import Login from './Login.js';
import Payment from './Payment.js';
import {auth} from './firebase';
import {useStateValue} from './StateProvider.js';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Footer from './Footer.js';
import BacktoTop from './BacktoTop.js';
import HeaderTwo from './HeaderTwo.js';
import CreateAccount from './CreateAccount.js';
import Orders from './Orders.js';

const promise=loadStripe("pk_test_51IBJZXExtmWk6lbzhZVAuDtd4YskEjgVG4ytLqG5ch4ZarulO1FzO27YnnZ2vSodTv52nNRi08PJB49v1p45uMdR00culymHcF");

function App() {

  const [{},dispatch]= useStateValue();

  useEffect(()=>{
    
    //only run once when app component loads...
   
   auth.onAuthStateChanged((authUser)=>{
    console.log('USER IS>>>>>',authUser);

    if(authUser){
      // User just logged in / or was logged in

      dispatch({
        type: 'SET_USER',
        user:authUser
      });
    }
    else{

      //user is logged out
       dispatch({
        type: 'SET_USER',
        user:null,
      });
    }

   });

  },[]);

  return (
    <Router>
    <div className="app" id="app">
    
     <Switch>

     <Route path="/login">
     <Login />
     </Route>

     <Route path="/createAccount">
            <CreateAccount />
          </Route>


     <Route path="/checkout">
      <Header />
      <Checkout />
      <BacktoTop />
      <Footer />
      </Route>

        <Route path="/orders">
      <Header />
      <Orders />
      
      </Route>

       

       <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      <BacktoTop />
      <Footer />
      </Route>


     <Route path="/">
      <Header />
      <HeaderTwo />
      <Home />
     <BacktoTop />
      <Footer />
      </Route>

      

      </Switch>
    </div>
    </Router>
  );

}

export default App;
