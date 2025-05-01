import React from 'react';
import { DEMO_MEN_IMG,DEMO_WOMEN_IMG } from '../../utlis/constant';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
                    <div className="bg-base-100 rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto">
                    <div className="relative">
                        <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover"
                        />
                        {product.sale && (
                        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                            Sale
                        </span>
                        )}
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                        <div>
                        <p className="font-semibold text-sm">{product.name}</p>
                        <p className="text-sm">
                            {product.price}{' '}
                            {product.originalPrice && (
                            <span className="line-through text-gray-400 ml-2 text-xs">
                                {product.originalPrice}
                            </span>
                            )}
                        </p>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default CrousalSection
