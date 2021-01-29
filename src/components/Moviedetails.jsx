import React,{useState,useEffect} from 'react';

const API_KEY=process.env.REACT_APP_API_KEY;


const MovieDetails =({match})=>{

    const [moviedetails, setdetails] = useState({});
    const [castdetails,setCast]=useState([]);
    console.log(match.params.id);

    useEffect(() => {
        const FetchMovie = async()=>{
        // fetch details of a movie //
              const response1=await 
              fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`);
              const data1=await response1.json();
              setdetails(data1);
        // fetch cast of the movie//

            const response2= await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${API_KEY}&language=en-US`);
            const data2=await response2.json();
            const cast=data2.cast;
            setCast(cast);
            console.log(castdetails);
              
              
    
       
        }
        FetchMovie();
      }, []);


    return(
       <div>
          {moviedetails.title}
          {moviedetails.tagline}

          {castdetails.map((cast)=>{
              return(
                  <h1 key={cast.id}>{cast.name}</h1>
              )
          })}
       </div>

    )
}

export default MovieDetails;
