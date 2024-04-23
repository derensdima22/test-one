import { ReactElement } from 'react';

// import Css
import className from './DownloadAppWithLog.module.css';

// import Image
import logo from '@assets/logoFooter.png';
import google from '@assets/google.png';
import apple from '@assets/apple.png';

export const DownloadAppWithLog = (): ReactElement => {
  return (
    <div className={className.downloadAppWithLog}>
      <img src={logo} alt="Logo"/>
      <div className={className.buttonGroup}>
        <button>
          <img src={google} alt="Google App" />
        </button>
        <button>
          <img src={apple} alt="App Store" />
        </button>
      </div>
      <p>2018 Copyrights, All rights reserved.</p>
    </div>
  );
};
