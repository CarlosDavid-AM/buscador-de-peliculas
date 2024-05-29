import withResult from './json/with-results.json'
import './App.css'
import ShowMovie from './components/ShowMovie'

const App = () => {
  const pelicula = withResult?.Search

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
        <ShowMovie pelicula={pelicula} />
      </main>
    </div>
  )
}

export default App