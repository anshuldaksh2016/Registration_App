import React from 'react';
import './App.css';
import  Registerform  from './Registerform';
// import SetPassword from './SetPassword';
// import {Route} from 'react-router-dom';
// import { Router } from 'express';


const  App = () => {

  return(
    <div className="App">
    {/* <Router>
      <Route exact path="/register"><Registerform /> </Route>
      <Route exact path="/reset"><SetPassword /></Route>
      </Router> */}
      <Registerform />
    </div>
   
  );

}

export default App;
