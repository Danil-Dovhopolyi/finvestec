import { ReactNode } from 'react';

import Arrow from '../../images/icons/Arrow.svg';
import './TabsItem.scss';

export interface TabProps {
  title: string;
  children: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
function Tab({ title, children, isActive, onClick }: TabProps) {
  return (
    <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className={`tab-title ${isActive ? 'active' : ''}`}>
        {title}
        <img src={Arrow} alt='Arrow' className={`arrow ${isActive ? 'active' : ''}`} />
      </div>
      {isActive && <div className={`tab-content ${isActive ? 'active' : ''}`}>{children}</div>}
    </div>
  );
}

export default Tab;
