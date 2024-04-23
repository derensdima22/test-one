
import { ReactElement } from "react";

// import Css
import classNames from './HeaderNavBar.module.css';

// import Image
import logo from '@assets/header/logo.png';

type NavBarType = {
  name: string;
  route: string;
};

const navBar: NavBarType[] = [
  {name: 'About us', route: 'about'},
  {name: 'Features', route: 'features'},
  {name: 'Blog', route: 'blog'},
  {name: 'Contact', route: 'contact'}
];

export const HeaderNavBar = (): ReactElement => {

  return (
    <div className={classNames.headerNavBar}>
      <img src={logo}/>
      <div className={classNames.navBar}>
        <div>
          {navBar.map((nav) =>
            <div key={nav.route}>{nav.name}</div>
          )}
        </div>
        <button className={classNames.navButton}>Download App</button>
      </div>
    </div>
  );
};
