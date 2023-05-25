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
import About from './components/About';
import { loadItems } from './components/actions/items';
// import Cart from './components/Cart';
// import ItemList from './components/items/ItemList';
// import DummyNav from './components/navigation/Navbar';
// import { loadFakeItems } from './components/actions/items';
import ItemList from './components/items/ItemList';
import { loadReviews } from './components/actions/reviews';
import ReviewList from './components/reviews/ReviewList'
import { loadCurrentUser } from './components/actions/users';
import ItemDetails from './components/items/ItemDetails';

function App() {
  // const reduxState = useSelector((store) => store.reviewsReducer);
  const [loading, setLoading] = useState(true);
  // console.log(reduxState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadCurrentUser(setLoading))
    dispatch(loadReviews())
    // TODO : finish building out dispatch reviews

  }, [dispatch])

  return (
    // <Router>
    <div className="container-flex bg-success">
       <Navbar />
          <Errors />
     
             <Routes>
               <Route path="/" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup loading={ loading } /> } />  
               <Route path="/items" element={<ItemList loading={ loading } /> } />  
               <Route path="/reviews" element={<ReviewList loading={ loading } /> } />  
               <Route path="/about" element={<About /> } />  
               {/* <Route path="/cart" element={<Cart /> } />   */}
               <Route path="/checkout" element={<Checkout /> } /> 
               <Route path="/items/:id" element={<ItemDetails /> } /> 


             </Routes> 

     </div> 
    //  </Router>
   
    );
  } 

  

export default App;
