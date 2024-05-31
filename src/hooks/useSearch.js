import { useEffect, useRef, useState } from "react"

export function useSearch () {
  const [search, setSeacrh] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('La pelicula no puede estar vacio')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('La pelicula no puede tener números')
      return
    }

    if (search.length < 3) {
      setError('La pelicula debe tener al menos 3 caracteres.')
      return
    }

    setError(null)
  }, [search])

  return { search, error, setSeacrh, isFirstInput }

}