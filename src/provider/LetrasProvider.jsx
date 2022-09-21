import { useState } from 'react'
import LetrasContext from '../context/LetrasContext'
import axios from 'axios'

const LetrasProvider = ({children}) => {

  const [alerta, setAlerta] = useState('')
  const [letra, setLetra] = useState('')
  const [cargando, setCargando] = useState(false)

  const busquedaLetra = async (busqueda) => {
    setCargando(true)
    try {
      const { artista, cancion } = busqueda
      const api_url = import.meta.env.VITE_LYRICS_API_URL
      const api_key = import.meta.env.VITE_LYRICS_API_KEY
      const url = `${api_url}/${artista}/${cancion}`
      const { data: { lyrics } } = await axios.get(url, { headers: { 'key': api_key } })

      setLetra(lyrics)
      setAlerta('')

    } catch(error) {
      setAlerta('Canción No Encontrada')
    }
    setCargando(false)
  }

  return (
    <LetrasContext.Provider
      value = {{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
        cargando
      }}
    >
     {children}
    </LetrasContext.Provider>
  )
}

export default LetrasProvider
