import { useContext } from 'react'
import LetrasContext from '../context/LetrasContext'

const useLetras = () => {
  return useContext(LetrasContext)
}

export default useLetras
