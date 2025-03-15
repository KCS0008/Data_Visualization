import { useState } from 'react'

const EmailGenerator = () => {
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
    <div className="email-generator">
      <div className="input-section">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>What would you like to write about?</label>
            <textarea
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Enter your email content..."
              required
            />
          </div>

          <div className="form-group">
            <label>Select Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="layman">Layman</option>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
              <option value="formal">Formal</option>
            </select>
          </div>

          <button
            type="submit"
            className={`submit-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="loading-spinner"></span>
            ) : (
              'Generate Email'
            )}
          </button>
        </form>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {generatedEmail && (
        <div className="output-section">
          <h2>Generated Email</h2>
          <div className="email-output">
            <div className="email-content">
              {generatedEmail}
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(generatedEmail)}
              className="copy-button"
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmailGenerator
