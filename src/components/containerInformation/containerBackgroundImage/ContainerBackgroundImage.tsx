import { ReactElement } from "react";

// import Css
import className from './ContainerBackgroundImage.module.css';

// import Image
import vectorDesign from '@assets/vectorDesign.png';
import vectorDesignTwo from '@assets/vectorDesignTwo.png';

export const ContainerBackgroundImage = (): ReactElement => {
  return (
    <div className={className.containerBackgroundImage}>
      <img src={vectorDesign} alt="Vector Design" />
      <img className={className.imageTwo} src={vectorDesignTwo} alt="Vector Design" />
    </div>
  );
};
