import {Routes, Route} from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Checkout from './components/items/Checkout';
import Errors from './components/errors/Errors';
import Navbar from './components/navigation/Navbar'
import LoggedInLinks from './components/navigation/LoggedInLinks';
import { useSelector, useDispatch } from 'react-redux';
import About from './components/About';
import { loadItems } from './components/actions/items';
import ItemList from './components/items/ItemList';
import { loadReviews } from './components/actions/reviews';
import ReviewList from './components/reviews/ReviewList'
import { loadCurrentUser } from './components/actions/users';
import ItemDetails from './components/items/ItemDetails';

function App() {
  // const reduxState = useSelector((store) => store.reviewsReducer);
 
  const { currentUser } = useSelector(store => store.usersReducer)
  const [cartCount, setCartCount] = useState(0)
  const [loading, setLoading] = useState(true);
  // console.log(reduxState);
  const dispatch = useDispatch();
  // const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    dispatch(loadItems())
    dispatch(loadCurrentUser(setLoading))
    dispatch(loadReviews())
    // TODO : finish building out dispatch reviews

  }, [dispatch])

  useEffect(() => {
    let count = 0;
    if (currentUser?.user_items) {
    currentUser.user_items.forEach((item) => {
      count += item.quantity;
    });
  }
    setCartCount(count);
 }, [currentUser?.user_items, cartCount])


  return (
    // <Router>
    <div className="container-flex bg-success">
       <Navbar cartCount={cartCount} />
          <Errors />
     
             <Routes>
               <Route path="/" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup loading={ loading } /> } />  
               <Route path="/items" element={<ItemList loading={ loading } /> } />  
               <Route path="/reviews" element={<ReviewList loading={ loading } /> } />  
               <Route path="/about" element={<About /> } /> 
               <Route path="/checkout" element={<Checkout cartCount={cartCount} /> } /> 
               <Route path="/items/:id" element={<ItemDetails /> } /> 


             </Routes> 

     </div> 
    //  </Router>
   
    );
  } 

  

export default App;
