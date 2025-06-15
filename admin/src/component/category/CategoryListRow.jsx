import api from '../../utlis/api';
import { BEARER_TOKEN } from '../../utlis/consttant'

const CategoryListRow = ({catinfo, currPage, catListFnc}) => {

    const { _id, categoryName, categoryPhoto, isActive } = catinfo;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const changeStatus = async (catId, catStatus) => {
      try{
        const resStatus = await api.patch(`/admin/api/changestatus`, {catId, catStatus})
        if(resStatus){
          catListFnc(currPage)
        }
      }
      catch(err){
        console.error(err)
      }
    }

    
    const delCategory = async (catId) => {
      try{
        const resDelete = await api.delete(`/admin/api/deletecategory`,{ data: { id: catId } })

        if(resDelete){
          catListFnc(currPage)
        }
      }catch(err){
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
                          src={`${BASE_URL}/${categoryPhoto}`}
                          alt={categoryName} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{categoryName}</td>
                <td>
                    <button className={`btn ${isActive ? 'btn-success' : 'btn-error'} p-5`} onClick={() => changeStatus(_id, isActive)}>{isActive ? "Active" : "Inactive"}</button>
                </td>
                <td>
                  <div className="dropdown dropdown-right">
                    <div tabIndex={0} role="button" className="m-1 btn btn-info">Action</div>
                    <ul tabIndex={0} className="p-2 shadow-sm dropdown-content menu bg-base-100 rounded-box z-1 w-52">
                      <li><a className="text-orange-500"> ✒️ Edit</a></li>
                      <li><button className="text-red-600" onClick={() => delCategory(_id)}> 🗑️ Delete</button></li>
                    </ul>
                  </div>
                </td>
              </tr>
    )
}

export default CategoryListRow
