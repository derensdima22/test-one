import { ReactElement } from 'react';

//import Css
import className from './ColumnNavigateFooter.module.css';

type AnnexReferences = {
  link: string;
  name: string;
}

interface ColumnNavigateFooterType {
  title: string;
  links: AnnexReferences[];
}

export const ColumnNavigateFooter = (props: ColumnNavigateFooterType): ReactElement => {
  const { title, links} = props;
  
  return (
    <div className={className.columnNavigateFooter}>
      <h6>{title}</h6>
      <div className={className.columnNavigateFooterLinks}>
        {links.map(({ link, name}, index) =>
          <a key={index} href={link}>{name}</a>
        )}
      </div>
    </div>
  );
};
