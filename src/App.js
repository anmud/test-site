import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
 
    return (

      <Router>
  <Fragment>
    
    <Navbar/>
    <Switch>
    <Route exact path="/" render={() => <Home/>}  />
    <Route path="/about" render={() => <About/>} />
    <Route path="/contact" render={() => <Contact/>} />

    </Switch>
     

    <Footer />
  </Fragment>
      </Router>
      
      
    );
  
}

export default App;