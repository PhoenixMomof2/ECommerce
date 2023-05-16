import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/users'
// TODO : import { Link } from 'react-scroll'


// TODO : render reviews to the Navbar. 
const Navbar = () => {
  const { loggedIn, currentUser } = useSelector(store => store.usersReducer)
  const dispatch = useDispatch();

  const handleLogout = () => {
  fetch('/logout', {method: "DELETE"});
  dispatch(logoutUser())


}
  const loggedInLinks = () => {
  return (
    <nav>
      <div>
        <li> {currentUser.username} </li>
        <Link to="/">DEMEURE</Link>
        <br></br>
        <Link to="/items">Shop</Link>
        <br></br>
        <Link to="/reviews">Reviews</Link>
        <li><Link to="/login" onClick={ handleLogout }>Logout</Link></li>
        

      
      </div>
    </nav>
  )
  }

  const LoggedOutLinks = () => {
    return (
      <nav>
        <div>
        <Link to="/">DEMEURE</Link>
        <br></br>
          <Link to="/Signup">Signup</Link>
          <br></br>
          <Link to="/Login">Login</Link>
          {/* <li><Link to="#" onClick={ handleLogout }>Logout</Link></li> */}
        </div>
      </nav>
    )
  }

  return (
    <ul>
      {/* <li><Link to="/">Home</Link></li> */}
      { loggedIn ? loggedInLinks() : LoggedOutLinks() }
    </ul>

  )
}

export default Navbar