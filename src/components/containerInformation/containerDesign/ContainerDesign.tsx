import { ReactElement } from 'react';
import { CardWithLearnMore, OutcomeStatsCitigroup } from '@components/containerInformation';

// import Css
import className from './ContainerDesign.module.css';

export const ContainerDesign = (): ReactElement => {
  return (
    <div className={className.containerDesign}>
      <CardWithLearnMore
        newClassName={className.cardWithLearnMore}
        title='Modern & Trendy Design'
        description='Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.'
        variant='text'
        text='Learn More'
      />
      <OutcomeStatsCitigroup/>
    </div>
  );
};
