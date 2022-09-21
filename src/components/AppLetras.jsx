import Formulario from './Formulario'
import Alerta from './Alerta'
import Letra from './Letra'
import useLetras from '../hooks/useLetras'
import Spinner from './Spinner'

const AppLetras = () => {

  const { alerta, letra, cargando } = useLetras()

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>
      
      <Formulario />

      <main>
        {cargando ? <Spinner /> :
          alerta ? <Alerta>{alerta}</Alerta> :
          letra ? <Letra /> :
          <p className='text-center'>Busca letras de tus artistas favoritos</p>}
      </main>
    </>
  )
}

export default AppLetras