import { ReactElement } from 'react';
import { CardWithLearnMore } from '@/components/containerInformation';

// import Css
import className from './IncomeTimeSaver.module.css';

// import Image
import phone from '@assets/phoneTwo.png';

export const IncomeTimeSaver = (): ReactElement => {
  return (
    <div className={className.incomeTimeSaver}>
      <img src={phone} alt="Phone" />
      <CardWithLearnMore
        title='Save your time'
        description='Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.'
        variant='contained'
        text='Download App'
      />
    </div>
  );
};
