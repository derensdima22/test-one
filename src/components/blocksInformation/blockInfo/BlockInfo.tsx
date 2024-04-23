import { ReactElement } from 'react';
import classNames from 'classnames';

// import Css
import className from './BlockInfo.module.css';

// import Image
import arrow from '@assets/svg/arrow.svg';

interface BlockInfoType {
  icon: string;
  title: string;
  description: string;
  href?: string;
  active: number;
  index: number;
  onClick: (index: number) => void;
}

export const BlockInfo = (props: BlockInfoType): ReactElement => {
  const {
    icon,
    description,
    title,
    index,
    active,
    onClick
  } = props;
  
  return (
    <div
      onClick={() => onClick(index)}
      className={classNames(
        className.blockInfo,
        active === index && className.activeBlock
      )}>
      <div>
        <img src={icon} alt="icon" />
        <h3
          className={classNames(
            className.title,
            active === index && className.activeTitle
          )}
        >
          {title}
        </h3>
        <p>{description}</p>
      </div>
      {active === index && <div>
        <a href='#'>
          <span>Learn More</span>
          <img src={arrow} alt="arrow" />
          </a>
      </div>}
    </div>
  );
};
