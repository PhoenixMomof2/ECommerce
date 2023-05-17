import React from "react"
import { Link } from 'react-router-dom'


const LoggedOutLinks = () => {
    return (
<div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home
            <span class="visually-hidden">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/items">Shop</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Login">Login</Link>
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