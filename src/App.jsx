import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home, Skills, Projects, About, Contact, Submit, NotFound } from './pages/User'
import { Login } from './pages/Admin'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />}>
          <Route path=":project" element={<Projects />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/admin" element={<Login/>}>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
