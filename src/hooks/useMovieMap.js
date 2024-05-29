import withResult from '../json/with-results.json'

export function useMovieMap () {
  const pelicula = withResult.Search

  const mappepMovie = pelicula?.map((movie) => ({
    id: movie.imdbID,
    titulo: movie.Title,
    año: movie.Year,
    poster: movie.Poster
  }))

  return {pelicula: mappepMovie}
}