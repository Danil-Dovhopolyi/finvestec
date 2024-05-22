import React, { useEffect, useRef, useState } from 'react';

import About from '@/components/About/About.tsx';
import ContactForm from '@/components/ContactForm/ContactForm.tsx';
import Contacts from '@/components/Contacts/Contacts.tsx';
import CookiesPopup from '@/components/CookiesModal/CookiesPopup.tsx';
import Footer from '@/components/Footer/Footer.tsx';
import Header from '@/components/Header/Header.tsx';
import WhatWeOffer from '@/components/Offer/WhatWeOffer.tsx';
import tabData from '@/components/Tabs/TabMockData.ts';
import { TabContent } from '@/components/Tabs/TabMockData.ts';
import Tabs from '@/components/Tabs/Tabs.tsx';
import Tab from '@/components/Tabs/TabsItem.tsx';

import './App.scss';

export const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      setIsPopupVisible(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsPopupVisible(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsPopupVisible(false);
  };

  const contactFormRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whatWeOfferRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <>
      <div className={`app ${isMenuOpen ? 'menu-open' : ''}`}>
        <Header
          scrollToContact={() => scrollToRef(contactFormRef)}
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToWhatWeOffer={() => scrollToRef(whatWeOfferRef)}
          scrollToTabs={() => scrollToRef(tabsRef)}
          onMenuToggle={handleMenuToggle}
        />
        <div className='dots dots-title'></div>
        <div className='title'>
          <h1 className='title-content'>Cutting Edge SEO</h1>
        </div>
        <div className='introduction'>
          <div className='introduction-content'>
            <div className='introduction-title'>
              <span>
                Wir betreiben qualitativ hochwertige Lead Generation Webseiten in den Bereichen
                Finanzen, Kryptowährungen und Technologie im europäischen Raum.
              </span>
            </div>
            <div>
              <p>Unser Netzwerk zählt über 5 Millionen Besucher pro Monat.</p>
            </div>
          </div>
        </div>
        <About ref={aboutRef} />
        <div className='dots'></div>
        <WhatWeOffer ref={whatWeOfferRef} />
        <div className='dots contacts-dots'></div>
        <Contacts scrollToRef={() => scrollToRef(contactFormRef)} />
        <Tabs ref={tabsRef}>
          {tabData.map((tab: TabContent, index: number) => (
            <Tab title={tab.title} key={index}>
              <div className='content-wrap'>
                <p className='tab-description'>{tab.description}</p>
                {tab.paragraphs.map((paragraph, pIndex) => (
                  <div key={pIndex} className='paragraph'>
                    {paragraph.title && <h3 className='paragraph-title'>{paragraph.title}</h3>}
                    {paragraph.content.map((content, cIndex) => (
                      <li key={cIndex} className='paragraph-point'>
                        {content}
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
        <ContactForm ref={contactFormRef} />
      </div>
      <CookiesPopup
        isVisible={isPopupVisible}
        onAccept={handleAcceptCookies}
        onDecline={handleDeclineCookies}
      />
      <Footer />
    </>
  );
};
