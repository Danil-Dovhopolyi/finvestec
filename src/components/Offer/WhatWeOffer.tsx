import Card from '@/components/Card/Card.tsx';
import cardData from '@/components/Card/cardContent.ts';

import { CardContentStyle } from '../../types/types.ts';
import './WhatWeOffer.scss';

function WhatWeOffer() {
  return (
    <div className='offer'>
      <div className='offer-title'>Was wir bieten</div>

      <div className='cards-container-offer'>
        {cardData.whatWeOffer.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            title={card.title}
            description={card.description}
            icon={card.icon}
            contentStyle={CardContentStyle.Centered}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatWeOffer;
