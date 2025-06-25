import { DEMO_WOMEN_IMG } from '../../utlis/constant'

const ProductCard = () => {

    return (
        <div className="card bg-base-200 w-72 h-96 my-3 shadow-sm rounded-lg place-items-center">
                        <figure className='image-full'>
                          <img
                            src={DEMO_WOMEN_IMG}
                            alt="afd" />
                        </figure>
                        <div className="card-body h-20">
                          <h2 className="card-title">ab998</h2>
                          <p>13213</p>
                        </div>
                      </div>
    )

}

export default ProductCard