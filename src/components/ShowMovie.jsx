import notResult from '../json/not-results.json'

const RenderMovie = ({movie}) => {
  return(
    <ul>
      {movie.map((peli) => (
        <li key={peli.imdbID}>
          <h2> {peli.Title} </h2>
          <p> {peli.Year} </p>
          <img src={peli.Poster} alt={peli.Title} />
        </li>
      ))}
    </ul>
  )
}

const NotRenderMovie = () => {
  return(
    <span> {JSON.stringify(notResult)} </span>
  )
}

const ShowMovie = ({pelicula}) => {
  const hasPelicula = pelicula?.length > 0

  return (
    <div>
      {
        hasPelicula ? (
          <RenderMovie movie={pelicula} />
        ) : (
          <NotRenderMovie />
        )
      }
    </div>
  )
}

export default ShowMovie