import {Routes, Route} from 'react-router-dom'
import './App.css';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { useDispatch } from 'react-redux';
import { loadLists } from './components/actions/items';
import ItemList from "./components/items/ItemList"

function App() {
  // const reduxState = useSelector((store) => store.reviewsReducer);

  // console.log(reduxState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLists)
  }, [dispatch])

  return (
    <div className="App">
      
     
             <Routes>
               <Route path="/" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup />} />  
               <Route path="/items" element={<ItemList />} />  
             </Routes> 

     </div> 
   
    );
  } 

  

export default App;
