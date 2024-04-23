import { ReactElement } from 'react';
import { ActionButton } from '@/components/ActionButton';

// import Css
import className from './CardWithLearnMore.module.css';
import classNames from 'classnames';

interface CardWithLearnMoreType {
  title: string;
  description: string;
  variant: 'text' | 'contained',
  newClassName?: string;
  text: string
}

export const CardWithLearnMore = (props: CardWithLearnMoreType): ReactElement => {
  const {
    title,
    description,
    variant,
    newClassName,
    text
  } = props;

  return (
    <div className={classNames(
      className.cardWithLearnMore,
      newClassName
    )}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ActionButton icon variant={variant} text={text} />
    </div>
  );
};
