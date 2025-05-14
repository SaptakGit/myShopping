import axios from "axios";

const CategoryListRow = ({catinfo, currPage, catListFnc}) => {

    const { _id, categoryName, categoryPhoto, isActive } = catinfo;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const changeStatus = async (catId, catStatus) => {
      try{
        const resStatus = await axios.patch(`${import.meta.env.VITE_BASE_URL}/admin/api/changestatus`,{catId, catStatus},{withCredentials: true})
        if(resStatus){
          catListFnc(currPage)
        }
      }
      catch(err){
        console.error(err)
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
                    <div tabIndex={0} role="button" className="btn btn-info m-1">Action</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                      <li><a> ✒️ Edit</a></li>
                      <li><a> 🗑️ Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
    )
}

export default CategoryListRow