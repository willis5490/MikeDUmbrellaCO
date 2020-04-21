import React from 'react';
import { Route, Router, Switch } from "react-router-dom";

import History from './Pages/History/History.js'
import NotFound from './Pages/NotFound.js'
import Home from './Pages/Home.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer/Footer'

function App() {
  return (
   
   <div>
       <Router  history={History}>
         <div className="App">
        <Header></Header>
          
            <Switch>
              <Route exact path="/" render={props =><Home/>} />
              <Route render={props =><NotFound/>}/>
              
            </Switch>

            <Footer></Footer>
        </div>
      </Router>
   </div>
  
  );
}

export default App;
