import { ReactElement } from 'react';
import { PurchaseSubscriptionBox } from '@components/SubscriptionPricing';

// import Css
import className from './SubscriptionPricing.module.css';

//import data
import { subscriptions } from './data';

export const SubscriptionPricing = (): ReactElement => {
  return (
    <div className={className.subscriptionPricing}>
      <div className={className.subscriptionPricingHeader}>
        <h1>Pricing</h1>
        <p>Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.</p>
      </div>
      <div className={className.purchaseSubscriptionGroup}>
        {subscriptions.map((subscription) =>
          <PurchaseSubscriptionBox
            key={subscription.id}
            description={subscription.description}
            duration={subscription.duration}
            header={subscription.header}
            price={subscription.price}
          />
        )}
      </div>
    </div>
  );
};
