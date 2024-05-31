import { useState } from 'react'
import withResult from '../json/with-results.json'
import notResult from '../json/not-results.json'

export function useMovieMap ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const pelicula = responseMovies.Search

  const mappepMovie = pelicula?.map((movie) => ({
    id: movie.imdbID,
    titulo: movie.Title,
    año: movie.Year,
    poster: movie.Poster
  }))

  const getMovie = () => {
    if (search) {
      setResponseMovies(withResult)
    } else {
      setResponseMovies(notResult)
    }
  }

  return {pelicula: mappepMovie, getMovie}
}