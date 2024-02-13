import { DarkModeProvider } from './context/DarkMode'
import { Header } from './components/header'

function App() {
  return (
    <DarkModeProvider>
      <Header />
    </DarkModeProvider>
  )
}

export default App
