import AppLetras from './components/AppLetras'
import LetrasProvider from './provider/LetrasProvider'

function App() {

  return (
    <LetrasProvider>
      <AppLetras />
    </LetrasProvider>
  )
}

export default App
