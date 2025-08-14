import { useState } from 'react';
import api from '../../utlis/api';
import { BEARER_TOKEN, CLIENT_AVATAR, CLIENT_AVATAR_FEMALE, CLIENT_AVATAR_MALE} from '../../utlis/consttant'

const UserListRow = ({userinfo, currPage, userListFnc, indexPoint}) => {

    const [showToast, setShowToast] = useState(false);

    //console.log(userinfo);

    const { id, name, phone, address, email, photo, age, gender, status } = userinfo;
    const IMG_URL = import.meta.env.VITE_CLIENT_END_IMG_URL;
    let userPhoto = '';
    let slNo = 0;

    if(photo){
      userPhoto = `${IMG_URL}/${photo}`;
    } else{
      if(gender == 'Male'){
        userPhoto = CLIENT_AVATAR_MALE;
      } else if(gender == 'Female'){
        userPhoto = CLIENT_AVATAR_FEMALE;
      } else{
        userPhoto = CLIENT_AVATAR;
      }
    }

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
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          prodListFnc(currPage);
        }
      }
      catch(err){
        console.log(err)
      }
    } 
    
    return(
        <tr>
          <td>
            {indexPoint+1}
          </td>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-12 h-12 mask mask-squircle">
                  <img
                      src={userPhoto}
                      alt={name} />
                </div>
              </div>
            </div>
          </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{age}</td>
          <td>{gender}</td>
          <td>{address}</td>
          <td>
              <button className={`btn ${status ? 'btn-success' : 'btn-error'} p-5`} onClick={() => changeStatus(id, status)}>{status ? "Active" : "Inactive"}</button>
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
                {showToast && (<div className="toast toast-top toast-center">
                  <div className="alert alert-success">
                      <span>Product Deleted Successfully.</span>
                  </div>
                </div>)}
              </tr>
    )
}

export default UserListRow