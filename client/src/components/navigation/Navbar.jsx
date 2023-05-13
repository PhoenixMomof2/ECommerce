import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/users'
// TODO : import { Link } from 'react-scroll'



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
        <Link to="/shop-all">Shop</Link>
        <li><Link to="/login" onClick={ handleLogout }>Logout</Link></li>
        

      
      </div>
    </nav>
  )
  }

  const LoggedOutLinks = () => {
    return (
      <nav>
        <div>
          <Link to="/Signup">Signup</Link>
          <Link to="/Login">Login</Link>
          {/* <li><Link to="#" onClick={ handleLogout }>Logout</Link></li> */}
        </div>
      </nav>
    )
  }

  return (
    <ul>
      {/* <li><Link to="/">Home</Link></li> */}
      { loggedIn ? loggedInLinks() : LoggedOutLinks }
    </ul>

  )
}

export default Navbar