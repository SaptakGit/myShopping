import { DEMO_WOMEN_IMG } from '../../utlis/constant'
const BASE_URL = import.meta.env.VITE_IMG_URL;

const ProductCard = ({product}) => {

  const { _id, productName, productPhoto, categoryId, productPrice, offerPrice, productQuantity, productStatus } = product;

    return (
        <div className="card bg-base-200 w-72 h-96 my-3 shadow-sm rounded-lg place-items-center">
                        <figure className='image-full'>
                          <img src={`${BASE_URL}/${productPhoto}`} alt={productName} />
                          { offerPrice != productPrice ? 
                              <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                                  Sale
                              </span> : ''
                          }
                        </figure>
                        <div className="card-body h-20">
                          <h2 className="card-title">{productName}</h2>
                          <p>
                            {offerPrice != productPrice ? offerPrice : productPrice}{' '}
                            {offerPrice && offerPrice != productPrice ? (
                            <span className="line-through text-gray-400 ml-2 text-xs">
                                {productPrice}
                            </span>
                            ) : ''}
                          </p>
                        </div>
                      </div>
    )

}

export default ProductCard