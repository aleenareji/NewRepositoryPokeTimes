import React from 'react'
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import './path/to/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './myStyles.css'


const Navbar = ()  => {
    return(
        // <nav className="nav-wrapper red darken-3">
        <div className="container head-clor">
        <div  className="row  back-clor" >
        <div className="col">
        <h1 className="logo" >Poke' Times</h1>
        </div>
        <div className="col">
        <h1 className="unknown" ></h1>
        </div>
        <div className="col">
        <h1 className="unknown-two" ></h1>
        </div>
        <div className="col">
        <a className="home-icon" href="/home">Home</a>
        </div>
        <div className="col">
        <a className="contact-icon" href="/contact">Contact</a>
        </div>
        <div className="col">
        <a className="about-icon" href="/about">About</a>
        </div>
        </div>
       
        {/* < a className="logo" >Poke' Times</a> */}
        {/* <ul className="right">
        
       
        
        </ul> */}
        </div>
        // </nav>
    )
}
export default Navbar;