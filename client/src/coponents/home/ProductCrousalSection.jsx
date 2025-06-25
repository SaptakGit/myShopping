import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'

const ProductCrousalSection = ({headerCaption, products = []}) => {
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
                    <Link to='/products'><ProductCard productItem={product}/></Link>
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default ProductCrousalSection
