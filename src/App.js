import React,{useState,useEffect} from 'react';
import './App.css';
import Nav from './components/nav';
import HomePage from './pages/HomePage';
import MovieDetails from './components/Moviedetails';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

function App() {
  return (
       <Router>
         <section>
             <Nav  /> 
      
         </section>
         <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route  path='/movies/:id' component={MovieDetails}/>

  </Switch>
         </Router>
     )
}

export default App;


  //  <UserContext.Provider value={{searchItem,setSearch}}>
  //       <Switch>
  //       <Route exact path='/' component={HomePage}/>
  //        <Route  path='/movies'  component={MovieList}/> 
  //        <Route path='./shop' component ={Shop}/>
    
  //        </Switch> 
  //        </UserContext.Provider>
  //       </section>
  //       </Router> 
