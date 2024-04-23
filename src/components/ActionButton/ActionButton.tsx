import classNames from 'classnames';
import { ReactElement } from 'react';

// import Css
import className from './ActionButton.module.css';

// import Image
import { ArrowIcon, WhiteArrow } from '@components/Icons';


interface ActionButtonType {
  variant: 'text' | 'contained';
  text: string;
  icon?: boolean;
  newClassName?: string;
}

export const ActionButton = (props: ActionButtonType): ReactElement => {
  const { icon = false, variant, text, newClassName } = props;

  return (
    <button
      className={classNames(
        variant === 'contained' ? className.buttonContained : className.buttonAction,
        newClassName
      )}
    >
      <span
        className={className.buttonText}
      >
        {text}
      </span>
      {icon && variant === 'contained'? <WhiteArrow/> : <ArrowIcon/>}
    </button>
  );
};
