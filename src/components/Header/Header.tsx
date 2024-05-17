import React, { useEffect, useState } from 'react';

import Logo from '../../images/Logo.svg';
import './Header.scss';

interface HeaderProps {
  scrollToContact: () => void;
  scrollToAbout: () => void;
  scrollToWhatWeOffer: () => void;
  scrollToTabs: () => void;
  onMenuToggle: (isMenuOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToContact,
  scrollToAbout,
  scrollToWhatWeOffer,
  scrollToTabs,
  onMenuToggle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<(() => void) | null>(null);

  const toggleMenu = (callback?: () => void) => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle(newMenuState);

    if (callback) {
      callback();
    }
  };

  const closeMenu = (callback?: () => void) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      onMenuToggle(false);
      if (callback) {
        setPendingScroll(() => callback);
      }
    } else if (callback) {
      callback();
    }
  };

  useEffect(() => {
    if (!isMenuOpen && pendingScroll) {
      pendingScroll();
      setPendingScroll(null);
    }
  }, [isMenuOpen, pendingScroll]);

  const handleItemClick = (scrollFunction: () => void) => {
    closeMenu(scrollFunction);
  };

  return (
    <>
      <header className={`header ${isMenuOpen ? 'open' : ''}`}>
        <div className='logo-content'>
          <div className='burger' onClick={() => toggleMenu()}>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
          <div className='logo'>
            <img src={Logo} alt='Logo' />
          </div>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => handleItemClick(scrollToAbout)}>Über uns</li>
            <li onClick={() => handleItemClick(scrollToWhatWeOffer)}>Was wir bieten</li>
            <li onClick={() => handleItemClick(scrollToTabs)}>Aktuelle Stellenangebote</li>
          </ul>
        </nav>
        <div className='kontakt'>
          <button onClick={() => handleItemClick(scrollToContact)}>Kontakt</button>
        </div>
      </header>
      {isMenuOpen && <div className='menu-overlay' onClick={() => toggleMenu()}></div>}
    </>
  );
};

export default Header;
