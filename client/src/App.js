import {Routes, Route} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
// import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react';
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Checkout from './components/items/Checkout';
import Errors from './components/errors/Errors';
import Navbar from './components/navigation/Navbar'
import { useDispatch } from 'react-redux';
import { loadLists } from './components/actions/items';
// import ItemList from './components/items/ItemList';
// import DummyNav from './components/navigation/Navbar';
// import { loadFakeItems } from './components/actions/items';
import ItemList from './components/items/ItemList';
import { loadReviews } from './components/actions/reviews';
import ReviewList from './components/reviews/ReviewList'
import { loadCurrentUser, /*loadUsers*/  } from './components/actions/users';
import ItemDetails from './components/items/ItemDetails';

function App() {
  // const reduxState = useSelector((store) => store.reviewsReducer);
  const [loading, setLoading] = useState(true);
  // console.log(reduxState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLists())
    // dispatch(loadUsers(setLoading))
    dispatch(loadCurrentUser(setLoading))
    dispatch(loadReviews())
    // finish building out dispatch reviews

  }, [dispatch])

  return (
    // <Router>
    <div className="container-flex bg-success">
       <Navbar />
          <Errors />
     
             <Routes>
               <Route path="/" element={<Home />} /> 
               {/* <Route path="/dummy" element={<DummyList />} />  */}
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup loading={ loading } /> } />  
               <Route path="/items" element={<ItemList loading={ loading } /> } />  
               <Route path="/reviews" element={<ReviewList loading={ loading } /> } />  
               <Route path="/checkout" element={<Checkout /> } /> 
               <Route path="/item-details" element={<ItemDetails /> } /> 


             </Routes> 

     </div> 
    //  </Router>
   
    );
  } 

  

export default App;
