import './App.css'
import {
  Footer,
  Header,
  BlocksInformation,
  ContainerInformation,
  ContainerReviews,
  SubscriptionPricing,
  StartUsingAbstract
} from '@components/index';

function App() {

  return (
    <>
      <Header/>
      <main>
        <BlocksInformation/>
        <ContainerInformation/>
        <ContainerReviews/>
        <SubscriptionPricing/>
        <StartUsingAbstract/>
      </main>
      <Footer/>
    </>
  )
}

export default App
