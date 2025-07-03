import { useEffect, useState } from "react"
import ProductBanner from "./ProductBanner"
import ProductCard from "./ProductCard"
import axios from "axios"
import { useSearchParams, Link } from 'react-router-dom'
import ProductFilter from "./ProductFilter"

const ProductList = () => {

  const [ productList, setProductList ] = useState([])

  const [ searchParams ] = useSearchParams()

  const categoryId = searchParams.get('category')

  const getProductList = async (categoryId) => {
    try{
      const params = {}

      if(categoryId){
        params.category = categoryId
      }

      const prodList = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/productlist`,
        { params }
      );
      
      setProductList(prodList.data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getProductList(categoryId)
    
  },[categoryId])

  return (
    <div className="m-5">
      <ProductBanner/>
      <div className="flex my-5">
        <ProductFilter />
        <div className="divider divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid grow place-items-center justify-center w-full">
          <div className=''>
            <div className="flex flex-wrap gap-6 justify-start px-5">
              {productList && productList?.productList?.map((product) => <Link to='/productdetails' key={product._id}><ProductCard product={product} /></Link>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList