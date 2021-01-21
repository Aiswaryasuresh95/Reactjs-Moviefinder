import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard=({image,title,overview,key}) =>{
            
    return(

    
        <div className="card">

           <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="img" className="image" ></img>
           <h1>{title}</h1>
        </div>
    
    )
}
export default MovieCard;