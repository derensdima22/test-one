import { ReactElement } from 'react';

// import Css
import classNames from './HeaderImage.module.css';

// import Image
import vectorFive from '@assets/header/vector-5.png';
import vectorSeven from '@assets/header/vector-7.png';
import vectorEight from '@assets/header/vector-8.png';
import vectorNine from '@assets/header/vector-9.png';

export const HeaderImage = (): ReactElement => {
  return (
  <div className={classNames.headerImage}>
    <img
      className={classNames.imgVectorFive}
      src={vectorFive}
    />
    <img
      className={classNames.imgVectorSeven}
      src={vectorSeven}
    />
    <img
      className={classNames.imgVectorEight}
      src={vectorEight}
    />
    <img
      className={classNames.imgVectorNine}
      src={vectorNine}
    />
  </div>
  );
};
