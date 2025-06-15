import Banner from './coponents/home/Banner'
import Navbar from './coponents/common/Navbar'
import Feature from './coponents/home/Feature'
import Discount from './coponents/home/Discount'
import NewsletterSection from './coponents/home/NewsletterSection'
import Footer from './coponents/common/Footer'
import CrousalSection from './coponents/home/CrousalSection'
import { DEMO_MEN_IMG,DEMO_WOMEN_IMG } from './utlis/constant';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react'

function App() {

  const products = [
  {
    id: 1,
    name: 'Grey Plain T-shirt',
    price: '$49',
    originalPrice: '$59',
    image: DEMO_MEN_IMG,
    sale: true,
  },
  {
    id: 2,
    name: 'Black Hoodie',
    price: '$73',
    image: DEMO_WOMEN_IMG,
  },
  {
    id: 3,
    name: 'Blazer Coat',
    price: '$49',
    originalPrice: '$59',
    image: DEMO_MEN_IMG,
    sale: true,
  },
  {
    id: 4,
    name: 'Black Coat',
    price: '$89',
    image: DEMO_WOMEN_IMG,
  },
  {
    id: 5,
    name: 'Blazer Coat',
    price: '$49',
    originalPrice: '$59',
    image: DEMO_MEN_IMG,
    sale: true,
  },
  {
    id: 6,
    name: 'Black Coat',
    price: '$89',
    image: DEMO_WOMEN_IMG,
  },
  {
    id: 7,
    name: 'Blazer Coat',
    price: '$49',
    originalPrice: '$59',
    image: DEMO_MEN_IMG,
    sale: true,
  },
  {
    id: 8,
    name: 'Black Coat',
    price: '$89',
    image: DEMO_WOMEN_IMG,
  },
];

  const [trending, setTrending] = useState(products);
  const [shopcate, setShopcat] = useState([]);
  const [newarrive, setNewarrive] = useState([]);

  return (
    <>
      {/* Block 1: Navbar */}
      <Navbar/>
      {/* Block 2: Hero Section (Big Banner) */}
      <Banner />
      {/* Block 3: Features (Shipping, Payment, Return, etc.) */}
      <Feature/>
      {/* Block 4: Trending Now Section (Products on Sale) */}
      <CrousalSection headerCaption={'Trending Now'} products={trending} dataSection=''/> 
      {/* Block 5: Shop By Categories Section */}
      <CrousalSection headerCaption={'Shop By Categories'} dataSection=''/>
      {/* Block 6: 50% OFF Promo Banner */}
      <Discount/>
      {/* Block 7: New Arrivals Section */}
      <CrousalSection headerCaption={'New Arrivals'} dataSection=''/>
      {/* Block 8: Newsletter Subscription Banner */}
      <NewsletterSection/>
      {/* Block 9: Footer */}
      <Footer/>
    </>
  )
}

export default App
