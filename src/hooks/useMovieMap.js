import { useRef, useState } from 'react'
import notResult from '../json/not-results.json'

export function useMovieMap ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const pelicula = responseMovies.Search
  const previuSearch = useRef(null)

  const mappepMovie = pelicula?.map((movie) => ({
    id: movie.imdbID,
    titulo: movie.Title,
    año: movie.Year,
    poster: movie.Poster
  }))

  const getMovie = async () => {
    if (search === previuSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previuSearch.current = search
      if (search) {
        await fetch(`https://www.omdbapi.com/?apikey=8116e3e&s=${search}`)
          .then(response => response.json())
          .then(data => setResponseMovies(data))
      } else {
        setResponseMovies(notResult)
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {pelicula: mappepMovie, getMovie, loading, error, previuSearch}
}