import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DarkModeProvider } from './context/DarkMode'
import { Header } from './components/header'
import { Home } from './pages'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Services } from './pages/Services'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  )
}

export default App
