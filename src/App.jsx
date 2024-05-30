import { useState, useEffect } from 'react'
import { useMovieMap } from './hooks/useMovieMap'
import ShowMovie from './components/ShowMovie'
import './App.css'

const App = () => {
  const {pelicula: mappepMovie} = useMovieMap()
  const [consulta, setConsulta] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({consulta})
  }

  const handleChange = (e) => {
    const newConsulta = e.target.value
    if (newConsulta.startsWith(' ')) return
    setConsulta(e.target.value)
  }

  useEffect(() => {
    if (consulta === '') {
      setError('La pelicula no puede estar vacio')
      return
    }

    if (consulta.match(/^\d+$/)) {
      setError('La pelicula no puede tener números')
      return
    }

    if (consulta.length < 3) {
      setError('La pelicula debe tener al menos 3 caracteres.')
      return
    }

    setError(null)
  }, [consulta])

  return (
    <div className="page">
      <header>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={consulta} type="text" placeholder="Pelicula"/>
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