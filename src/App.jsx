import { useMovieMap } from './hooks/useMovieMap'
import ShowMovie from './components/ShowMovie'
import './App.css'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'

const App = () => {
  const [sort, setSort] = useState(false)
  const {error, search, setSeacrh} = useSearch()
  const { pelicula, getMovie, loading } = useMovieMap({ search, sort })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie({search})
  }

  const handleChange = (e) => {
    const newConsulta = e.target.value
    if (newConsulta.startsWith(' ')) return
    setSeacrh(e.target.value)
  }

  const handleCheck = () => {
    setSort(!sort)
  }

  return (
    <div className="page">
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} type="text" placeholder="Pelicula"/>
          <input type="checkbox" checked={sort} onChange={handleCheck} />
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