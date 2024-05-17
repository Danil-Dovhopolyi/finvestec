import Card from '@/components/Card/Card.tsx';
import cardData from '@/components/Card/cardContent.ts';

import { CardContentStyle } from '../../types/types.ts';
import './Contacts.scss';

interface ContactsProps {
  scrollToRef: () => void;
}

function Contacts({ scrollToRef }: ContactsProps) {
  return (
    <div className='contacts'>
      <div className='container'>
        <div className='contacts-title'>Kontakt</div>
        <div className='cards-container-contacts'>
          {cardData.contact.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              title={card.title}
              description={card.description}
              icon={card.icon}
              contentStyle={CardContentStyle.Centered}
              onClick={card.title === 'Kontaktformular' ? scrollToRef : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
