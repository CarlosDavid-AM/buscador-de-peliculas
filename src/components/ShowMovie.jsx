import notResult from '../json/not-results.json'

const RenderMovie = ({movie}) => {
  return(
    <ul>
      {movie.map((peli) => (
        <li key={peli.id}>
          <h2> {peli.titulo} </h2>
          <p> {peli.año} </p>
          <img src={peli.poster} alt={peli.titulo} />
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