import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/users'



const LoggedInLinks = () => {
  const { currentUser } = useSelector(store => store.usersReducer)
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(0)

  const handleLogout = () => {
    fetch('/logout', {method: "DELETE"});
    dispatch(logoutUser())
  }        
 useEffect(() => {
    let count = 0
    currentUser.user_items.forEach((item) => {
      count += item.quantity
    })
    setCartCount(count)
 }, [currentUser.user_items, cartCount])

return (
  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
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
        <Link className="nav-link me-3" to="/checkout">
        <i className="bi bi-cart"></i>           
          <span className="badge rounded-pill badge-notification bg-danger">{cartCount}</span>
        </Link>
    </ul>
    <span className="text-light">Welcome {currentUser.username}</span>
  </div>
  )
}

export default LoggedInLinks
