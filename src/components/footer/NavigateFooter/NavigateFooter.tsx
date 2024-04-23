import { ReactElement } from 'react';
import { ChangeLanguage, ColumnNavigateFooter } from '@components/footer';

// import Css
import className from './NavigateFooter.module.css';

// import data
import { dataLinks } from './data';

export const NavigateFooter = (): ReactElement => {
  return (
    <div className={className.navigateFooter}>
      {dataLinks.map((data) =>
        <ColumnNavigateFooter key={data.title} {...data}/>
      )}
      <ChangeLanguage/>
    </div>
  );
};
