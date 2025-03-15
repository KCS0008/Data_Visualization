const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="#documentation">Documentation</a>
            <a href="#api">API</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@emailai.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Email AI Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
