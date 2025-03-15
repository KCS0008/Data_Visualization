import { useState } from 'react'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      id: 1,
      title: 'Multiple Tones',
      description: 'Choose from various writing styles to match your needs',
      details: 'Select from professional, friendly, formal, or layman tones to perfectly match your communication style and audience.',
      icon: '📝'
    },
    {
      id: 2,
      title: 'Quick Generation',
      description: 'Get your email drafted in seconds',
      details: 'Our AI-powered system generates high-quality emails instantly, saving you valuable time and effort.',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'Professional Output',
      description: 'AI-powered writing that maintains professionalism',
      details: 'Every generated email maintains a consistent level of professionalism while adapting to your chosen tone.',
      icon: '👔'
    },
    {
      id: 4,
      title: 'Easy to Use',
      description: 'Simple interface for the best user experience',
      details: 'Our intuitive interface makes it simple to generate, edit, and copy your emails with just a few clicks.',
      icon: '✨'
    }
  ]

  const handleFeatureClick = (id) => {
    setActiveFeature(activeFeature === id ? null : id)
  }

  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`feature-card ${activeFeature === feature.id ? 'active' : ''}`}
            onClick={() => handleFeatureClick(feature.id)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            {activeFeature === feature.id && (
              <div className="feature-details">
                <p>{feature.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
