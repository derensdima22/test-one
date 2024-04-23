import { ReactElement } from 'react';

// import Css
import className from './PurchaseSubscriptionBox.module.css';

interface PurchaseSubscriptionBoxType {
  id?: string;
  header: string;
  price: string;
  duration: string;
  description: string;
}

export const PurchaseSubscriptionBox = (props: PurchaseSubscriptionBoxType): ReactElement => {
  const {
    header,
    price,
    duration,
    description
  } = props;
  
  return (
    <div className={className.purchaseSubscriptionBox}>
      <p className={className.purchaseSubscriptionBoxHeader}>
        {header}
      </p>
      <h3>{price}</h3>
      <span>{duration}</span>
      <p className={className.purchaseSubscriptionBoxDescription}>
        {description}
      </p>
      <button className={className.purchaseSubscriptionButton}>
        Start Now
      </button>
    </div>
  );
};
