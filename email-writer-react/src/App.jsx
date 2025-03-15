import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EmailGenerator from './components/EmailGenerator'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [emailContent, setEmailContent] = useState('')
  const [tone, setTone] = useState('layman')
  const [generatedEmail, setGeneratedEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch('http://localhost:8080/api/email/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailContent, tone }),
      })
      const data = await response.text()
      setGeneratedEmail(data)
    } catch (error) {
      console.error('Error generating email:', error)
      setError('Failed to generate email. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main className="main-content">
        <EmailGenerator 
          emailContent={emailContent}
          setEmailContent={setEmailContent}
          tone={tone}
          setTone={setTone}
          generatedEmail={generatedEmail}
          setGeneratedEmail={setGeneratedEmail}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
          handleSubmit={handleSubmit}
        />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
