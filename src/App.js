import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Fragment, useEffect } from 'react';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders';

const promise = loadStripe('pk_test_51LU185SIasEeVWQCvfzgxrPYnkasymgQH8kjBXkKw2wVhCOK7Hfh4dsudUt9qfCyxgMvfQGtfkS2gGBJcXgpniKK00dg5RoXzd');

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("the user is: ",authUser);
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/login' element={<><Login /></>} /> 
        <Route path='/checkout' element={
          <>
            <Header />
            <Checkout />
          </>}>
        </Route>
        <Route path='/payment' element={
        <>
          <Header />
          <Payment />
        </>}>
        </Route>
        <Route path='/orders' element={
        <>
          <Header />
          <Orders />
        </>}>
        </Route>
        <Route path='/' element={
        <>
          <Header />
          <Home />
        </>} >
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
