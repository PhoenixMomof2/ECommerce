import React from 'react'
import subway from '../images/subway.jpg'

const Home = () => {
  return (
    <div className="containter-fluid">
    <div className="has-bg-img">
    <h2>Hero Section</h2>
    <h4>It's easy to set background image with Torus Kit</h4>
    <img style={{height: "100vh"}} className="bg-img mx-auto img-fluid" src={subway}alt={subway}/>
  </div>

    </div>
  )
}

export default Home;