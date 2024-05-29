import { useMovieMap } from './hooks/useMovieMap'
import ShowMovie from './components/ShowMovie'
import './App.css'

const App = () => {
  const {pelicula: mappepMovie} = useMovieMap()

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
        <ShowMovie pelicula={mappepMovie} />
      </main>
    </div>
  )
}

export default App