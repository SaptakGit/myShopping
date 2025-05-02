const ProductCard = ({productItem}) => {
    return (
        <div className="bg-base-100 rounded-xl shadow-md overflow-hidden w-full max-w-xs mx-auto">
            <div className="relative">
                <img src={productItem.image} alt={productItem.name} className="w-full h-80 object-cover"/>
                {productItem.sale && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                        Sale
                    </span>
                )}
            </div>
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <p className="font-semibold text-sm">{productItem.name}</p>
                    <p className="text-sm">
                        {productItem.price}{' '}
                        {productItem.originalPrice && (
                        <span className="line-through text-gray-400 ml-2 text-xs">
                            {productItem.originalPrice}
                        </span>
                        )}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
