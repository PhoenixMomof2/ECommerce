import React from "react"
import { Link } from 'react-router-dom'


const LoggedOutLinks = () => {
    return (
<div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/items">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">Login</Link>
        </li>
     </ul>
</div>

)
}

export default LoggedOutLinks

// const LoggedOutLinks = () => {
    //     return (
    //       <nav>
    //         <div>
    //         <li><Link to="/">DEMEURE</Link></li>
    //         <li><Link to="/items">Shop</Link></li>
    //           <li><Link to="/Signup">Signup</Link></li>
    //           <li><Link to="/Login">Login</Link></li>