import { ReactElement } from 'react';
import { ActionButton } from '../ActionButton';

// import Css
import className from './StartUsingAbstract.module.css';

export const StartUsingAbstract = (): ReactElement => {
  return (
    <div className={className.startUsingAbstract}>
      <div className={className.startUsingAbstractContainer}>
        <h2>Start using Abstract app now!</h2>
        <p>Dictas scaevola democritum cu his, magna abhorreant dissentias .</p>
        <ActionButton
          newClassName={className.startUsingAbstractButton}
          variant='contained'
          text='Download App'
        />
      </div>
    </div>
  );
};
