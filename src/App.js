
import { useState, useEffect } from "react";
import Movie from "./Movie";

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
           <Movie 
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              />
          )
        )
      }
    </div>

  );
}

export default App;
