
import { useState, useEffect } from "react";

function App() {
  const MOVIE__URL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(MOVIE__URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
        console.log(json.data.movies);
      });
  }, []);
  return (
    <div >
      {loading ?
        <h1>Loading...</h1> :

        movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image}/>
              <a href={movie.url}><h2>{movie.title}</h2></a>
              <p>{movie.summary}</p>
              <ul>
                 {movie.genres.map((g)=>(
                    <li key={g}>{g}</li>
                 ))} 
              </ul>
            </div>
          )
        )
      }
    </div>

  );
}

export default App;
