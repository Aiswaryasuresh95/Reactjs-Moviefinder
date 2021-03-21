import React from 'react';
import MovieCategorylist from './MovieCategorylist';
import MovieCard from '../Moviecard';
import Carousel from 'react-elastic-carousel';



const breakPoints = [
         { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
  
];




const MovieCategory = ({upcoming,trending,popular}) =>{
    return(
      <section>
        <div>
           <h1>Trending Movies</h1>
          
               <div className="trendingcontainer">
               <Carousel breakPoints={breakPoints}
               itemPadding={[10]}
               outerSpacing={0}
               showEmptySlots
               showArrows={true}
               disableArrowsOnEnd={true}
                       
                >
            
                  {trending.map((trend,index)=>{
                      return(
                       
                            <MovieCard key={index} {...trend}/>
                           
                          )})}
                           </Carousel>
                   
                </div>
               
           </div>
               <div>
                 <h1>Upcoming Movies</h1>
                   <div className="upcomingcontainer">
                   <Carousel breakPoints={breakPoints}
                      itemPadding={[10]}
                      outerSpacing={0}
                      showEmptySlots
                      showArrows={true}
                      disableArrowsOnEnd={true}
                       
                     >
               
                       {upcoming.map((upcoming,index)=>{
                            return(
                               
                                 <MovieCard key={index} {...upcoming} />
                                 )})}
                                 </Carousel>
                     </div>
                </div>
             <div>
               <h1>Popular Movies</h1>
                  <div className="popularcontainer">
                  <Carousel breakPoints={breakPoints}
                       itemPadding={[10]}
                       outerSpacing={0}
                       showEmptySlots
                       showArrows={true}
                      disableArrowsOnEnd={true}
                       
                     >
                     {popular.map((popular,index)=>{
                         return(
                          
                            <MovieCard key={index} {...popular} />
                       )})}
                       </Carousel>
                 </div>
            </div>
        </section>)}
export default MovieCategory;





  