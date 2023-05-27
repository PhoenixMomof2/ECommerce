import React from "react";
// import "./../styles/About.css";
// import {LinkX} from "react-scroll";
import About2 from "./images/About2.jpg"

const About = () => {

    return (
        // TODO : build out about component
        
        // <div className="about" data-testid="about">
        //     <h1 className="duck-studio-name">DUCK STUDIO</h1>
        //     <LinkX 
        //         to="section1" 
        //         activeClass="active"
        //         spy={true}
        //         smooth={true}
        //         offset={-100}
        //         duration={1000}>
        //             <button className="shop-button">SHOP NOW</button>
        //     </LinkX>
        // </div>
        <div className="containter-fluid">
        <div className="has-bg-img">
         {/* <h2>Hero Section</h2> */}
          {/* <h4>It's easy to set background image with Torus Kit</h4> */}
          <img style={{height: "100vh"}} className="bg-img mx-auto img-fluid" src={About2}alt={About2}/>
          <h4>About</h4>
          <h6>Demeure is from The Bronx, NY. With a strong focus on simple yet powerful design, we are driven to create timeless work by portraying an aesthetic that is uniquely our own.</h6>
        </div>
  
      </div>
    );

};

export default About;