import React ,{useState} from 'react';


const MovieCategory =({...items})=>{
   
    return(
        

        <div className="card">
              <div className="imagecard">
                <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} alt={items.title} className="image"/>
             </div>
                <h4>{items.title}</h4>
               <p>{items.release_date}</p>
        </div>
     
    )
}
export default MovieCategory;