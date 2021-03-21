import React from 'react';
import {Link} from 'react-router-dom';


  



const MovieCard=({...items}) =>{
            
    return(
        
     <div className="card">
          <Link to={`/movies/${items.id}`} className='link-styles'>
              
                  <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt={items.title} className="image"/>
                  <div className="info">
                  <h1>{items.title}</h1>
                  <button className="btn">Read More</button>
                  </div>
               </Link>
         </div>
         
    )
}
export default MovieCard;