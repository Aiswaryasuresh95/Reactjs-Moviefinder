import  React,{useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import { UserContext } from '../UserContext';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';

 
const SearchArea =({searchItem,handleChange, handleSubmit}) =>{


    return(
    
        <section className="searchcontainer">
            <div className="searchformbox">
            <span ><BsSearch className="icon"></BsSearch></span>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleChange}
                value={searchItem}
                className="searchform"
                placeholder="search"></input>
            
                <button  type="submit">Serach</button>
        
            
                
            </form>

            
            </div>
     </section>       
    )
}
export default SearchArea;