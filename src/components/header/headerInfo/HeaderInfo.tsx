import { ReactElement } from 'react';

// import css
import classNames from './HeaderInfo.module.css';

// import Image
import phoneImage from '@assets/header/phone.png';

export const HeaderInfo = (): ReactElement => {
  return (
    <div className={classNames.headerInfo}>
      <div className={classNames.headerInfoText}>
        <h3>Introducing Abstract App landing page.</h3>
        <p>A perfect landing page to showcase your new App.</p>
      </div>
        <img className={classNames.headerInfoImage} src={phoneImage} alt="phone" />
    </div>
  );
};
