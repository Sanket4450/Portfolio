import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { getItem } from './utils/localStorage'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Home, Skills, Projects, About, Contact, Submit, NotFound } from './pages/User'
import { VerifySecret, VerifyOtp, Dashboard, Messages, Message, Replies } from './pages/Admin'

function App() {
  const [isSecretVerified, setIsSecretVerified] = useState(false)
  const [isOtpVerified, setIsOtpVerified] = useState(false)

  useEffect(() => {
    getItem('isSecretVerified') === 'true' && setIsSecretVerified(true)
    getItem('isOtpVerified') === 'true' && setIsOtpVerified(true)
  }, [])

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
        <Route path="/admin">
          <Route index element={<Dashboard />} />
          <Route path="verify-secret" element={<VerifySecret setIsSecretVerified={setIsSecretVerified} />} />
          <Route
            path="verify-otp"
            element={
              <VerifyOtp
                isSecretVerified={isSecretVerified}
                isOtpVerified={isOtpVerified}
                setIsOtpVerified={setIsOtpVerified}
              />
            }
          />
          <Route path="messages">
            <Route index element={<Messages />} />
            <Route path=":messageId" element={<Message />} />
          </Route>
          <Route path="replies" element={<Replies />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
