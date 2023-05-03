import logo from './logo.svg';
import './App.css';
// import itemsReducer from './components/reducers/itemsReducer';
// import reviewsReducer from './components/reducers/reviewsReducer';
// import usersReducer from './components/reducers/usersReducer';
// import errorsReducer from './components/reducers/errorsReducer';

import { useSelector } from 'react-redux'



function App() {
  const reduxState = useSelector((store) => store.reviewsReducer);

  console.log(reduxState);
  return (
    <div className="App">
        {/* <UserProvider>  
      <MedicationProvider>
        <TrackerProvider>
           <Navbar />
             <Routes>
               <Route path="/" element={<Home />} /> 
               <Route path="/login" element={<Login />} /> 
               <Route path="/signup" element={<Signup />} />  
               <Route path="/users/:id/medications" element={<UserMedication />} />
               <Route path="/users/:id/medications/:id" element={<UserMedDetail />} />
               <Route path="/users/:id/medications/new" element={<MedicationForm />} />
               <Route path="/users/:id/medications/:id/edit" element={<EditMedicationForm />} /> 
               <Route path="/users/:id/trackers" element={<TrackerList />} /> 
               <Route path="/users/:id/trackers/new" element={<TrackerForm />} /> 
             
             </Routes> 
         </TrackerProvider>
       </MedicationProvider>
     </UserProvider>

     </div> 
   
    );
  } */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
   </div> 
   );
} 

export default App;
