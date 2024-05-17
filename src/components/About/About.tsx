import Card from '@/components/Card/Card.tsx';
import cardData from '@/components/Card/cardContent.ts';

import './About.scss';

function About() {
  return (
    <div className='about'>
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
}

export default About;
