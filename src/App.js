
import { useState, useEffect } from "react";

function App() {
  const MOVIE__URL = "https://yts.mx/api/v2/list_movies.json";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(MOVIE__URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  return (
    <div >
      {loading ? 
        <h1>Loading...</h1> :
        movies.map((movie)=><div key={movie.id}>{movie.title}</div>)
      }
    </div>

  );
}

export default App;
