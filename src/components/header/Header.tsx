import { ReactElement } from 'react';
import {
  HeaderImage,
  HeaderNavBar,
  HeaderInfo
} from '@components/header';

// import Css
import classNames from './Header.module.css';

export const Header = (): ReactElement => {
  return (
    <header className={classNames.header}>
      <HeaderNavBar/>
      <HeaderInfo/>
      <HeaderImage/>
    </header>
  );
};
