import {Routes, Route} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Errors from './components/errors/Errors';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
// import { loadLists } from './components/actions/items';
import { loadFakeItems } from './components/actions/items';
import ItemList from './components/items/ItemList';
import { loadCurrentUser, loadUsers,  } from './components/actions/users';

function App() {
  // const reduxState = useSelector((store) => store.reviewsReducer);
  const [loading, setLoading] = useState(true);
  // console.log(reduxState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFakeItems())
    dispatch(loadUsers(setLoading))
    dispatch(loadCurrentUser(setLoading))
  }, [dispatch])

  return (
    // <Router>
    <div className="App">
       <Navbar />
          <Errors />
     
             <Routes>
               <Route path="/" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup />} />  
               <Route path="/items" element={<ItemList />} />  
             </Routes> 

     </div> 
    //  </Router>
   
    );
  } 

  

export default App;
