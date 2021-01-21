import React ,{useContext, useEffect,useState}from 'react';
import MovieCard from './Movie';
import {UserContext} from '../UserContext';

    
 const MovieList =({Movies})=>{
  // const {searchItem,setSearch}= useContext(UserContext);
    
   
    return(
      <section className="movielist-container">
        <h1 className="result-header">search results</h1>

           <div className="searchresult">
             
           
        {Movies.map((movie,index)=>{
             return(
               
                
                 <MovieCard key={index} image={movie.poster_path} title={movie.original_title} overview={movie.overview}/>
             )
         })}
         </div>
         </section>
  )
}
    
export default MovieList;