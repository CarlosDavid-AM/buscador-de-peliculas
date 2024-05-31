import { useMovieMap } from './hooks/useMovieMap'
import ShowMovie from './components/ShowMovie'
import './App.css'
import { useSearch } from './hooks/useSearch'

const App = () => {
  const {pelicula: mappepMovie} = useMovieMap()

  const {error, search, setSeacrh} = useSearch()
  
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (e) => {
    const newConsulta = e.target.value
    if (newConsulta.startsWith(' ')) return
    setSeacrh(e.target.value)
  }

  return (
    <div className="page">
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type="text" placeholder="Pelicula"/>
          <button type='submit'>
            Enviar
          </button>
        </form>
        { error && <p className='error'> {error} </p> }
      </header>

      <main>
        <ShowMovie pelicula={mappepMovie} />
      </main>
    </div>
  )
}

export default App