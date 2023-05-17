import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/users'



const LoggedInLinks = () => {
    const { currentUser } = useSelector(store => store.usersReducer)
     const dispatch = useDispatch();

     const handleLogout = () => {
          fetch('/logout', {method: "DELETE"});
          dispatch(logoutUser())
     }        

return (
 <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/items">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="reviews">Reviews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={handleLogout}>Logout</Link>
        </li>
     </ul>
     <span className="text-light">Welcome: {currentUser.username}</span>
</div>
  )
}

export default LoggedInLinks

