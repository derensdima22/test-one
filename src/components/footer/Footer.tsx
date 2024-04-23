import {
  DownloadAppWithLog,
  NavigateFooter,
} from "@components/footer";

// import Css
import className from './Footer.module.css';

// import Image
import footerBg from '@assets/footerBg.png';

export const Footer = () => {
  return (
    <footer className={className.footer}>
      <div className={className.footerBorder}/>
      <div className={className.footerInfo}>
        <DownloadAppWithLog/>
        <NavigateFooter/>
      </div>
      <img className={className.footerBg} src={footerBg} alt="Footer Bg"/>
    </footer>
  );
};
