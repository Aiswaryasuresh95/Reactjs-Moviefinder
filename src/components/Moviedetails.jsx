import React,{useState,useEffect} from 'react';

const API_KEY=process.env.REACT_APP_API_KEY;


const MovieDetails =({match})=>{

    const [moviedetails, setdetails] = useState({});
    const [castdetails,setCast]=useState([]);
    const [crewdetails,setcrew]=useState([]);

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
            const crew=data2.crew;
            setcrew(crew)
            setCast(cast);
       
        }
        FetchMovie();
      }, []);


    return(
       <div>
           <div className="details-container" >
                    <div className="movie-container">
                      {/* <div className="movie-container" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${moviedetails.backdrop_path})`}}> */}

                          <h1> {moviedetails.title}</h1>
                          <h2> {moviedetails.tagline}</h2>
                          {/* <img src={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`} alt={moviedetails.title}></img> */}
                     </div>
            </div>
            
            
          {/* {castdetails.map((cast)=>{
              return(
                  <h1 key={cast.id}>{cast.name}</h1>
              )
          })} */}
       </div>

    )
}

export default MovieDetails;
