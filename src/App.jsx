import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home, Skills, Projects, About, Contact, Submit, NotFound } from './pages/User'
import { Login, VerifyOtp, Dashboard, Messages } from './pages/Admin'

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
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin">
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="verify-otp" element={<VerifyOtp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
