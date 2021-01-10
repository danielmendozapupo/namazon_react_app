import logo from './logo.svg';
import Header from'./Header'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import NavLinks from "./NavLinks";
import Register from './Register';
import axios from "axios";
import {useStateValue} from "./StateProvider";
import {Component, useEffect, useState} from "react";
import './services/auth-header'
import authHeader from "./services/auth-header";
import userService from "./services/user.service";
import ItemList from "./Component/ItemList/ItemList";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders'
const promise = loadStripe(
    'pk_test_51I7OJQCESVgeCc3GMTuRvZrxAOBZ6QLjJl6bHO88Bqlcbsv1J2f3mPjEDkO74KpEdjP84H7cih2sASc5uyHcsQzd00kPIH0GYF')

function App() {
    const [{loggedInUser}, dispatch] = useStateValue()
    const myUser = userService().User;



    console.log('login username: ', myUser)
   useEffect(()=>{
        const userauth = authHeader();
        console.log('user data: ', userauth)
        if(userauth){
            dispatch({
                type:'SET_LOGIN',
                user: myUser
            })
        }else{
            dispatch({
                type: 'SET_LOGIN',
                user: null
            })
        }

    },[])
    console.log('user >> ', loggedInUser)
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path='/checkout'>
                      <Header/>
                      <Checkout/>
                  </Route>
                  <Route path='/payment'>
                      <Header/>
                      <Elements stripe={promise}>
                          <Payment/>
                      </Elements>
                  </Route>
                  <Route path='/login'>
                      <Login/>
                  </Route>

                  <Route path='/orders'>
                      <Header/>
                      <Orders/>
                  </Route>

                  <Route path='/register'>
                      <Register/>
                  </Route>
                  <Route path='/'>
                      <Header/>
                      <NavLinks/>
                      <Home/>

                      <Footer/>
                  </Route>
              </Switch>


          </div>
      </Router>
  );
}

export default App;
