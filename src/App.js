
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
        console.log(json.data.movies);
        setLoading(false);
      });
  }, []);
  return (
    <div >
      <h1>The Coins!{loading ? "" : `(${movies.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
       
       movies.map()
       
       }
    </div>

  );
}

export default App;
