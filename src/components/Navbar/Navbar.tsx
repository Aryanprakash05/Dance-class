import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music2 } from 'lucide-react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = false; // TODO: Replace with actual auth state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logo}>
          <Music2 size={24} />
          GrooveSphere
        </Link>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          
          <Link 
            to="/pricing" 
            className={`${styles.link} ${location.pathname === '/pricing' ? styles.active : ''}`}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;