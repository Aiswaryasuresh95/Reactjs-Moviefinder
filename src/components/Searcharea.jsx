import  React,{useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import '../styles/Homepage-styles.scss';


 
const SearchArea =({searchItem,handleChange, handleSubmit}) =>{


    return(
    
        
            <div className="searchform">
               
                   <form onSubmit={handleSubmit}>
                      <input 
                      type="text" 
                      onChange={handleChange}
                      value={searchItem}
                      className="searchform__input"
                      placeholder="search"></input>
            
                <button  type="submit" className="searchform__btn"> 
                <span ><BsSearch className="searchform__icon"></BsSearch></span>
                </button>
        
            
                
            </form>
        </div>
    
    )
}
export default SearchArea;