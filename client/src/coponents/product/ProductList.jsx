import ProductBanner from "./ProductBanner"
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className="m-5">
      <ProductBanner/>
      
      
      <div className="flex my-5">
        <div className="card bg-base-300 rounded-box grid grow place-items-start ">
          <ul className="menu rounded-box w-56">
            <li><a>Item 1</a></li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                  <li>
                    <details open>
                      <summary>Parent</summary>
                      <ul>
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid grow place-items-center justify-center w-full">

          <div className=''>
            <div className="flex flex-wrap gap-6 justify-start px-5">

              <ProductCard />
              

              
            </div>
          </div>
        </div>
      </div>



    </div>

    
  )
}

export default ProductList