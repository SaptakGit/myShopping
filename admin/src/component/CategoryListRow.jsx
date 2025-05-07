const CategoryListRow = ({catinfo}) => {

    const { _id, categoryName, categoryPhoto, isActive } = catinfo;
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    
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
                    <button className={`btn btn-square ${isActive ? 'btn-success' : 'btn-danger'}`}>{isActive ? "Active" : "Inactive"}</button>
                </td>
                <td>
                  <button className='btn btn-info btn-square'>action</button>
                </td>
              </tr>
    )
}

export default CategoryListRow