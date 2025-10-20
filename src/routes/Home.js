import React, { useEffect, useState } from 'react'
import Movie from '../components/Movie';

function Home() {
  const MOVIE__URL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([{
    id: 0,
    coverImg: "",
    title: "",
    genres: []
  }]);
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
    <div style={{ margin: "50px auto", width: "90%" }}>
      {loading ?
        <h1>Loading...</h1> :
        (
          movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
            />
          )
          )
        )

      }
    </div>

  );
}

export default Home;