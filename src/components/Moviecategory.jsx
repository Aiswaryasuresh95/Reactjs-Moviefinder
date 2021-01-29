import React from 'react';
import MovieCategorylist from './MovieCategorylist';
import MovieCard from './Movie';


const MovieCategory = ({upcoming,trending,popular}) =>{
    return(
      <section>
        <div>
           <h1>Trending Movies</h1>
               <div className="trendingcontainer">
            
                  {trending.map((trend,index)=>{
                      return(
                          <div>
                       
                            <MovieCard key={index} {...trend}/>
                          </div>)})}
                </div>
           </div>
               <div>
                 <h1>Upcoming Movies</h1>
                   <div className="upcomingcontainer">
               
                       {upcoming.map((upcoming,index)=>{
                            return(
                               <div>
                                 <MovieCard key={index} {...upcoming} />
                                 </div>)})}
                     </div>
                </div>
             <div>
               <h1>Popular Movies</h1>
                  <div className="popularcontainer">
                     {popular.map((popular,index)=>{
                         return(
                          <div>
                            <MovieCard key={index} {...popular} />
                       </div>)})}
                 </div>
            </div>
        </section>)}
export default MovieCategory;





  