import React from 'react';

import './CookiesPopup.scss';

interface CookiesPopupProps {
  isVisible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const CookiesPopup: React.FC<CookiesPopupProps> = ({ isVisible, onAccept, onDecline }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className='popup'>
      <div className='popup-content'>
        <p>
          We use cookies to ensure you get the best experience on our website. Do you accept
          cookies?
        </p>
        <div className='popup-buttons'>
          <button className='accept-button' onClick={onAccept}>
            Accept
          </button>
          <button className='decline-button' onClick={onDecline}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopup;
