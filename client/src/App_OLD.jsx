import Banner from './coponents/home/Banner'
import Navbar from './coponents/common/Navbar'
import Feature from './coponents/home/Feature'
import Discount from './coponents/home/Discount'
import NewsletterSection from './coponents/home/NewsletterSection'
import Footer from './coponents/common/Footer'
import CrousalSection from './coponents/home/CrousalSection'

import 'swiper/css';
import 'swiper/css/navigation';



function App() {

  return (
    <>
      {/* Block 1: Navbar */}
      <Navbar/>

      {/* Block 2: Hero Section (Big Banner) */}
      <Banner />

      {/* Block 3: Features (Shipping, Payment, Return, etc.) */}
      <Feature/>

      {/* Block 4: Trending Now Section (Products on Sale) */}
      <CrousalSection headerCaption={'Trending Now'}/>

      {/* Block 5: Shop By Categories Section */}
      <CrousalSection headerCaption={'Shop By Categories'}/>

      {/* Block 6: 50% OFF Promo Banner */}
      <Discount/>

      {/* Block 7: New Arrivals Section */}
      <CrousalSection headerCaption={'New Arrivals'}/>

      {/* Block 8: Newsletter Subscription Banner */}
      <NewsletterSection/>

      {/* Block 9: Footer */}
      <Footer/>

    </>
  )
}

export default App
