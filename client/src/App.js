import {Routes, Route} from 'react-router-dom'
import './App.css';
import { useSelector } from 'react-redux'
import Home from './components/auth/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';


function App() {
  const reduxState = useSelector((store) => store.reviewsReducer);

  console.log(reduxState);
  return (
    <div className="App">
      
     
             <Routes>
               <Route path="/" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup />} />  
             </Routes> 

     </div> 
   
    );
  } 

  

export default App;
