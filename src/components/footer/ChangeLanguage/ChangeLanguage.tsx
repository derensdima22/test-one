import { ReactElement } from 'react';

// import Css
import className from './ChangeLanguage.module.css';

// import Image
import mdiInternet from '@assets/mdiInternet.png';
import arrowDown from '@assets/arrowDown.png';

export const ChangeLanguage = (): ReactElement => {
  return (
    <div>
      <div className={className.changeLanguage}>
      <img src={mdiInternet} alt="Internet" />
      <p>English</p>
      <button>
        <img src={arrowDown} alt="Arrow Down" />
      </button>
      </div>
    </div>
  );
};
