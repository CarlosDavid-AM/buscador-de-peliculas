import peliResult from './json/with-results.json'
import noPelis from './json/not-results.json'
import './App.css'

const App = () => {
  const pelicula = peliResult?.Search
  const hasPelicula = pelicula?.length > 0

  return (
    <div className="page">
      <header>
        <form>
          <input type="text" placeholder="Pelicula"/>
          <button type='submit'>
            Enviar
          </button>
        </form>
      </header>

      <main>
        {
          hasPelicula ? (
            <ul>
              {pelicula.map((peli) => (
                <li key={peli.imdbID}>
                  <h2> {peli.Title} </h2>
                  <p> {peli.Year} </p>
                  <img src={peli.Poster} alt={peli.Title} />
                </li>
              ))}
            </ul>
          ) : (
            <span> {JSON.stringify(noPelis)} </span>
          )
        }
      </main>
    </div>
  )
}

export default App