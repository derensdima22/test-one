import { ReactElement } from "react";
import {
  ContainerBackgroundImage,
  ContainerDesign,
  IncomeTimeSaver
} from "@components/containerInformation";

// import Css
import className from './ContainerInformation.module.css';

export const ContainerInformation = (): ReactElement => {
  return (
    <div className={className.containerInformation}>
      <ContainerBackgroundImage/>
      <ContainerDesign/>
      <IncomeTimeSaver/>
    </div>
  );
};
