import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Connect With Us</h3>
            <div className={styles.social}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Contact Info</h3>
            <div className={styles.contact}>
              <p>
                <Mail size={16} style={{ marginRight: '0.5rem' }} />
                info@groovesphere.com
              </p>
              <p>
                <Phone size={16} style={{ marginRight: '0.5rem' }} />
                (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} GrooveSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer