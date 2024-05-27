import Logo from '../../images/Logo.svg';
import LinkedIn from '../../images/icons/LinkedIn.svg';
import './Footer.scss';

function Footer() {
  return (
    <div className='blur'>
      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <img src={Logo} alt='Finvestec Logo' />
          </div>
          <div className='footer-info'>
            <div className='footer-address'>
              <h4>Address:</h4>
              <p>
                Finvestec GmbH
                <br />
                Kister Str. 61
                <br />
                97204 Höchberg
                <br />
                Germany
              </p>
            </div>
            <div className='footer-contact'>
              <h4>Contact:</h4>
              <p>
                0931/730 442 86
              </p>
              <p>hello@finvestec-gmbh.de</p>
              <div className='footer-social'>
                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                  <img src={LinkedIn} alt='LinkedIn' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div>
            <p>&copy; 2024 Finvestec. All rights reserved.</p>
          </div>
          <div className='footer-link'>
            <a href='https://finvestec-gmbh.de/impressum' target='_blank' rel='noreferrer'>
              Datenschutz und Impressum
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
