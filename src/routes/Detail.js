import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const { id } = useParams();
  const [movie,setMovie]=useState({
    id:0,
    large_cover_image:"",
    background_image:"",
    description_full:"",
    description_intro:"",
    genres:[],
    summary:"",
    title:""
  });
  console.log(movie);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    
  };
  useEffect(() => {
    getMovie();
  },
  []);

  return (
    <MovieDetail 
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.large_cover_image}
                  backImg={movie.background_image}
                  summary={movie.summary}
                  genres={movie.genres}
                  rating={movie.rating}
                  runtime={movie.runtime}
                  description1={movie.description_intro}
                  description2={movie.description_full}
                />
  )
}

export default Detail;