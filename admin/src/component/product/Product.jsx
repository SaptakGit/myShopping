import { useEffect } from "react";
import AddProduct from "./AddProduct"
import { BEARER_TOKEN } from "../../utlis/consttant";
import { useState } from "react";
import axios from 'axios'
import ProductListRow from "./ProductListRow";
import ProductListPagination from "./ProductListPagination";
import api from '../../utlis/api'

const Product = () => {

    const [ productList, setProductList ] = useState([]);
    const [ totalProduct, setTotalProduct ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ prodListLimit, setProdListLimit ] = useState(0);

    const getProductList = async (currentPage) => {

      try{
        const res = await api.get(`/admin/api/productlist`,
          {
            params:{
              limit : 10,
              page: currentPage
            }
          }
        );

        setProductList(res);
        setTotalProduct(res.data.totalProductList);
        setProdListLimit(res.data.offset);

      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      getProductList()
    },[])

    return(
            <>
              <div className='mx-20 my-10'>
                 <AddProduct addgetProductListFnc={getProductList}/>
              <div className="divider"></div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>Category Name</th>
                        <th>Product Price</th>
                        <th>Offer Price</th>
                        <th>Product Quantity</th>
                        <th>Product New</th>
                        <th>Product Trending</th>
                        <th>Product Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {productList.data && productList.data.productList.map((product, index) => 
                        (<ProductListRow productinfo={product} key={product._id} prodListFnc={getProductList} currPage={currentPage}/>)
                      )
                    }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                      {productList.data && <ProductListPagination allProductCount={totalProduct} productLimit={prodListLimit} getAllProductListFunc={getProductList} setCurrPage={setCurrentPage} />
                      }
                    </tfoot>
                  </table>
                </div>
              </div>
            </>
    )
}

export default Product 