import { useMovieMap } from './hooks/useMovieMap'
import ShowMovie from './components/ShowMovie'
import './App.css'
import { useSearch } from './hooks/useSearch'

const App = () => {
  const {error, search, setSeacrh} = useSearch()
  const { pelicula, getMovie, loading } = useMovieMap({ search })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie()
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
        {
          loading ? <span>Cargando...</span> : <ShowMovie pelicula={pelicula} />
        }
      </main>
    </div>
  )
}

export default App