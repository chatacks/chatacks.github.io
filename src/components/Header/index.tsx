import { useState } from 'react';
import chatackLogo from '../../assets/logo_chatack_black.png';
import NavItem from '../Navitem';
import './Header.css';

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="header">

      <nav className="nav container">
        <div className="logo">
          <img src={ chatackLogo } alt="Chatacks Logo" />
          <a href="index.html" className="nav-logo">chatacks.dev</a>
        </div>

        <div className={ toggle ? 'nav-menu show-menu' : 'nav-menu' }>
          <ul className="nav-list grid">
            <NavItem href="#home" iconClass="uil uil-estate nav-icon">Home</NavItem>
            <NavItem href="#about" iconClass="uil uil-user nav-icon">About</NavItem>
            <NavItem href="#skills" iconClass="uil uil-file-alt nav-icon">Skills</NavItem>
            <NavItem href="#portfolio" iconClass="uil uil-scenery nav-icon">
              Portfolio
            </NavItem>
            <NavItem href="#contact" iconClass="uil uil-message nav-icon">
              Contact
            </NavItem>
          </ul>
          <button onClick={ handleToggle } aria-label="Fechar menu">
            <i className="uil uil-times nav-close" />
          </button>
        </div>

        <button className="nav-toggle" onClick={ handleToggle } aria-label="Abrir menu">
          <i className="uil uil-apps" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
