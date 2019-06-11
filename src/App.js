
import React, { Component } from 'react';
import Navbar from './components/Navbar';
// import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';

//  import  from '../public/index.html';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="App">
      
      <Navbar />
      <Route exact path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
   

      </div>
      </BrowserRouter>
    );
  }
}
export default App;