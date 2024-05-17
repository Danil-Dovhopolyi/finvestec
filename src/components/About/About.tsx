import { forwardRef } from 'react';

import Card from '@/components/Card/Card.tsx';
import cardData from '@/components/Card/cardContent.ts';

import './About.scss';

const About = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div className='about' ref={ref}>
      <div className='about-title'>Über uns</div>

      <div className='cards-container-about'>
        {cardData.aboutUs.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
});

export default About;
