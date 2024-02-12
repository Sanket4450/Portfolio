import { DarkModeProvider } from './context/DarkMode'
import { DarkModeSwitch } from './components/ui/DarkModeSwitch'
import { NavButton } from './components/ui/NavButton'

function App() {
  return (
    <DarkModeProvider>
      <DarkModeSwitch />
      <NavButton text="Home" />
    </DarkModeProvider>
  )
}

export default App
