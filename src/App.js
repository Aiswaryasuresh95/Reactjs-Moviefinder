import React,{useState,useEffect} from 'react';
import './App.css';
import Nav from './components/nav';
import HomePage from './pages/HomePage';

function App() {
  return (
    
         <section>
            <Nav  /> 
            <HomePage />
         </section>
      
     )
}

export default App;


  {/* <UserContext.Provider value={{searchItem,setSearch}}>
        <Switch>
        <Route exact path='/' component={HomePage}/>
         <Route  path='/movies'  component={MovieList}/> 
         <Route path='./shop' component ={Shop}/>
    
         </Switch> 
         </UserContext.Provider>
        </section>
        </Router> */}
