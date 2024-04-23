import { ReactElement, useState } from 'react';
import { BlockInfo } from '@components/blocksInformation';

// import Css
import classNames from './BlocksInformation.module.css';

// import Image
import pencil from '@assets/svg/pencil.svg';
import hours from '@assets/svg/hours.svg';
import like from '@assets/svg/like.svg';
import shadowRound from '@assets/shadowRound.png';

type InformationType = {
  icon: string;
  title: string;
  description: string;
  id: string;
}

const information: InformationType[] = [
  {
    id: '1',
    icon: pencil,
    title: 'Modern & Trendy Design',
    description:'Dictas scaevola democritum cu his, magna abhorreant dissentias ut'
  },
  {
    id: '2',
    icon: hours,
    title: 'Save your Time',
    description:'oporte petrioque sit et, eum ne prima nemore perfecto. Eu cibo quidam eleifend per.'
  },
  {
    id: '3',
    icon: like,
    title: 'Made with Love',
    description:'Inimicus hendrerit an duo, feugiat adipiscing everti nostrum id.'
  }
]

export const BlocksInformation = (): ReactElement => {
  const [active, setActive] = useState<number>(1);

  const handleChangeActive = (index: number) => {
    setActive(index)
  }

  return (
    <div className={classNames.blocksInformation}>
      <img className={classNames.bgImage} src={shadowRound} alt="shadow round" />
      {information.map((info, index) =>
         <BlockInfo
         key={info.id}
         icon={info.icon}
         title={info.title}
         description={info.description}
         index={index}
         active={active}
         onClick={handleChangeActive}
       />
      )}
    </div>
  );
};
