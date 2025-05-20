import axios from "axios";
import { BEARER_TOKEN } from '../../utlis/consttant'

const ProductListRow = ({productinfo, currPage, prodListFnc}) => {

    const { _id, productName, productPhoto, categoryId, productPrice, offerPrice, productQuantity, productNew, productTrending, productStatus } = productinfo;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const changeStatus = async (catId, catStatus) => {
      /*try{
        const resStatus = await axios.patch(`${import.meta.env.VITE_BASE_URL}/admin/api/changestatus`,
          {catId, catStatus}, 
          {
            headers:{
              Authorization : `Bearer ${BEARER_TOKEN}`
            }
          },
          {withCredentials: true}
        )
        if(resStatus){
          catListFnc(currPage)
        }
      }
      catch(err){
        console.error(err)
      }*/
     console.error(123)
    }
    
    return(
        <tr>
          <th>
            <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <img
                          src={`${BASE_URL}/${productPhoto}`}
                          alt={productName} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{productName}</td>
                <td>{categoryId.categoryName}</td>
                <td>{productPrice}</td>
                <td>{offerPrice}</td>
                <td>{productQuantity}</td>
                <td>{productTrending}</td>
                <td>{productNew}</td>
                <td>
                    <button className={`btn ${productStatus ? 'btn-success' : 'btn-error'} p-5`} onClick={() => changeStatus(_id, productStatus)}>{productStatus ? "Active" : "Inactive"}</button>
                </td>
                <td>
                  <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="m-1 btn btn-info">Action</div>
                    <ul tabIndex={0} className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52">
                      <li><a> ✒️ Edit</a></li>
                      <li><a> 🗑️ Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
    )
}

export default ProductListRow