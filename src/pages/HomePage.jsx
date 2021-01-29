import React ,{useState,useEffect} from 'react';
import SearchArea from '../components/Searcharea';
import MovieList from '../components/MovieList';
import MovieCategory from '../components/Moviecategory';





const API_KEY=process.env.REACT_APP_API_KEY;


const HomePage=() =>{

 
  
  const [Movies, setMovies] = useState([]);
  const [loading,setLoading]=useState(true);
  const [trending,setTrending]=useState([]);
  const [upcoming,setUpcoming]=useState([]);
  const [popular,setPopular]=useState([])
  const [searchItem, setSearch] = useState('');
  const [showmovies, setshowmovies] = useState(true)

//  ************Function for getting search value*************//



    

    
const handleChange =(event)=>{    
  setSearch(event.target.value);
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    setshowmovies(false);
    const FetchMovie = async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchItem}`
                );
    const data=await response.json();
    console.log(data);
    const results=data.results;
    setMovies(results);
    console.log(Movies);
    
}
FetchMovie();


};

const backtoHome=()=>{
  setshowmovies(true);
}






  // **********Trending movies**********//

  useEffect(() => {
    const FetchMovie = async()=>{
    
          const response=await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
          const data=await response.json();
          const newTrending=data.results;
          setTrending(newTrending);

   
    }
    FetchMovie();
  }, []);

  useEffect(()=>{
          const fetchMovie=async()=>{
          const response=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
          const data=await response.json();
          const newup=data.results;
          setUpcoming(newup);
          console.log(upcoming);
    }
    fetchMovie();

  },[]);

  useEffect(()=>{
        const FetchMovie= async ()=>{
        const response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data=await response.json();
        const popular=data.results;
        setPopular(popular);
    }
    FetchMovie();
  })

  // useEffect(() => {
  //   const FetchMovie = async()=>{
    
  //         const response=await fetch(`
  //         https://api.themoviedb.org/3/movie/550/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  //         const newMovie=await response.json();
      
   
  //   }
  //   FetchMovie();
  // }, [])


  


  return (

    <section>
    
        <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} searchItem={searchItem}/>
        
         <MovieList Movies={Movies} showmovies={showmovies} backtoHome={backtoHome}/>  
      
        <MovieCategory upcoming={upcoming} trending={trending} popular={popular}/> 
    
    </section>
  )
}

export default HomePage;