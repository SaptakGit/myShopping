import React from 'react';
import { DEMO_MEN_IMG,DEMO_WOMEN_IMG } from '../../utlis/constant';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';

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

const CrousalSection = ({headerCaption}) => {
    return(
        <section className="py-10 px-16">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">{headerCaption}</h2>
            </div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={5}
                slidesPerView={1.2}
                breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3.5 },
                1280: { slidesPerView: 4 },
                }}
                className="pb-5"
            >
                {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCard productItem={product}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default CrousalSection
