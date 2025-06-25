import Banner from './Banner'
import Feature from './Feature'
import Discount from './Discount'
import NewsletterSection from './NewsletterSection'
import ProductCrousalSection from './ProductCrousalSection'
import CategoryCrousalSection from './CategoryCrousalSection'
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [shopByCat, setShopByCat] = useState([]);
  const [newarrive, setNewarrive] = useState([]);

  const getShopByCategory = async () => {
    try{
      const categoryList = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbycategory`);
      setShopByCat(categoryList.data);
    }catch(err){
      console.error('Failed to fetch category list:', err);
    }
  }

  const shopByProduct = async () => {
    try{
      const productList = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/shopbyproduct`);
      setTrending(productList.data.trendingProductList);
      setNewarrive(productList.data.newProductLlist);

    }catch(err){
      console.error('Failed to fetch product list:', err);
    }
  }

  useEffect(()=>{
    getShopByCategory()
    shopByProduct()
  },[])

  return (
    <>
      {/* Block 2: Hero Section (Big Banner) */}
      <Banner />
      {/* Block 3: Features (Shipping, Payment, Return, etc.) */}
      <Feature/>
      {/* Block 4: Trending Now Section (Products on Sale) */}
      <ProductCrousalSection headerCaption={'Trending Now'} products={trending} dataSection=''/> 
      {/* Block 5: Shop By Categories Section */}
      <CategoryCrousalSection headerCaption={'Shop By Categories'} catrgories={shopByCat.categoryList} dataSection=''/>
      {/* Block 6: 50% OFF Promo Banner */}
      <Discount/>
      {/* Block 7: New Arrivals Section */}
      <ProductCrousalSection headerCaption={'New Arrivals'} products={newarrive} dataSection=''/>
      {/* Block 8: Newsletter Subscription Banner */}
      <NewsletterSection/>
      {/* Block 9: Footer */}
    </>
  )
}

export default Home