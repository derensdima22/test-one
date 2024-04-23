import { ReactElement } from 'react';

// import Css
import className from './CardReviewsPeople.module.css';
import classNames from 'classnames';

// import Image
import { StarIcon } from '@/components/Icons';

interface CardReviewsPeopleType {
  index: number;
  activate: number;
  avatar: string;
  name: string;
  title: string;
  description: string;
  appraisal: number;
}

export const CardReviewsPeople = (props: CardReviewsPeopleType): ReactElement => {
  const {
    index,
    activate,
    avatar,
    description,
    title,
    name,
    appraisal
  } = props;
  
  return (
    <div className={classNames(
      className.cardReviewsPeople,
      index === activate && className.activeCard
    )}>
      <div>
        <img src={`../../../../public/assets/avatar/${avatar}.png`} alt="Avatar" />
      </div>
      <div className={classNames(
        className.cardInfo,
        index === activate && className.activeCardInfo
      )}>
        <div className={className.cardHeader}>
          <div>
            <h5>{name}</h5>
            <span>{title}</span>
          </div>
          <div className={className.starGroup}>
            {new Array(appraisal).fill(1).map((item, index) =>
              <StarIcon key={`${item}_${index}`}/>
            )}
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
