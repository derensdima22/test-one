type SubscriptionsType = {
  id: string;
  header: string;
  price: string;
  duration: string;
  description: string;
}

export const subscriptions: SubscriptionsType[] = [
  {
    id: '1',
    header: 'Starter Plan',
    price: 'Free',
    duration: 'Forever',
    description: 'Dictas scaevola democritum cu his magna abhorreant .'
  },
  {
    id: '2',
    header: 'Enterprise Plan',
    price: '$18.00',
    duration: 'Month',
    description: 'Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.'
  },
  {
    id: '3',
    header: 'Unlimited Plan',
    price: '$42.00',
    duration: 'Month',
    description: 'Dictas scaevola democritum cu his magna abhorreant .'
  }
];