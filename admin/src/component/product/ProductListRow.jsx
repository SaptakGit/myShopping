import api from '../../utlis/api';
import { BEARER_TOKEN } from '../../utlis/consttant'

const ProductListRow = ({productinfo, currPage, prodListFnc}) => {

    const { _id, productName, productPhoto, categoryId, productPrice, offerPrice, productQuantity, productNew, productTrending, productStatus } = productinfo;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const changeStatus = async (prodId, prodStatus) => {
      try{
        const resStatus = await api.patch(`/admin/api/changeprodstatus`, {prodId, prodStatus})
        if(resStatus){
          prodListFnc(currPage)
        }
      }
      catch(err){ 
        console.error(err)
      }
    }

    const deleteProduct = async (prodId) => {
      //console.log(123)
      try{
        const delProduct = await api.delete(`/admin/api/deleteproduct`, { data : { id : prodId }})

        if(delProduct){
          prodListFnc(currPage)
        }
      }
      catch(err){
        console.log(err)
      }
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
                  <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="m-1 btn btn-info">Action</div>
                    <ul tabIndex={0} className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52">
                      <li><a className="text-orange-500"> ✒️ Edit</a></li>
                      <li><button className="text-red-600" onClick={() => deleteProduct(_id)}> 🗑️ Delete</button></li>
                    </ul>
                  </div>
                </td>
              </tr>
    )
}

export default ProductListRow