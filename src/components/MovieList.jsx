import React ,{useContext, useEffect,useState}from 'react';
import MovieCard from './Movie';
import {TiDelete} from 'react-icons/ti';
import {UserContext} from '../UserContext';

    
 const MovieList =({Movies,showmovies,backtoHome})=>{
  // const {searchItem,setSearch}= useContext(UserContext);

    
   
    return(
      
      <section >
      <div className={`${showmovies ?"movielist-container":"movielist-container showmain"}`}>
        <span><TiDelete  onClick={backtoHome}/></span> 
        <h1 className="result-header">search results</h1>

           <div className="searchresult">
             
           
        {Movies.map((movie,index)=>{
             return(
               
                
                 <MovieCard key={index} {...movie}/>
             )
         })}
         </div>
         </div>
         </section>
  )
}
    
export default MovieList;