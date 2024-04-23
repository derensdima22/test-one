import { ReactElement } from 'react';
import { OutcomeStats, Citigroup } from '@components/containerInformation';

// import Css
import className from './OutcomeStatsCitigroup.module.css';

//import Image
import circle from '@assets/circle.png';

export const OutcomeStatsCitigroup = (): ReactElement => {
  return (
    <div className={className.outcomeStatsCitigroup}>
      <img
        src={circle}
        alt="circle"
        className={className.circle}
      />
      <div className={className.statsCitigroup}>
        <Citigroup/>
        <OutcomeStats/>
      </div>
    </div>
  );
};
