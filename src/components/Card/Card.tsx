import { ICard } from '@/components/Card/cardContent.ts';

import { CardContentStyle } from '../../types/types.ts';
import './Card.scss';

interface CardProps extends ICard {
  contentStyle?: CardContentStyle;
  onClick?: () => void;
}
function Card({
  title,
  description,
  icon,
  contentStyle = CardContentStyle.Default,
  onClick,
}: CardProps) {
  return (
    <div className='blur' onClick={onClick}>
      <div className={`card ${contentStyle}`}>
        <div className={`card-content ${contentStyle}`}>
          <div className='card-icon'>
            <img src={icon} alt='icon' />
          </div>
          <h3 className='card-title'>{title}</h3>
        </div>

        <div className={`card-description ${contentStyle}`}>{description}</div>
      </div>
    </div>
  );
}

export default Card;
