import { useEffect } from "react";
import AddProduct from "./AddProduct"

const Product = () => {

    const [ productList, setProductList ] = useState([]);

    const getProductList = () => {
      console.log('123');
    }

    useEffect(()=>{
      productList
    },[])

    return(
            <>
              <div className='mx-20 my-10'>
                 <AddProduct/>
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
                      {/*allCategoryListData.data && allCategoryListData.data.categoryList.map((category, index) => 
                        (<CategoryListRow catinfo={category} key={category._id}/>)
                      )
                    */}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                      {/*allCategoryListData.data && <CategoryListPagination allCategoryCount={totalCategory} categoryLimit={catListLimit} getAllCategorListFunc={getAllCategoryList} />
                      */}
                    </tfoot>
                  </table>
                </div>
              </div>
            </>
    )
}

export default Product