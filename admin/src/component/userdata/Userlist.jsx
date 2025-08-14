import React, { useEffect, useState } from 'react'
import UserListRow from './UserListRow';
import api from '../../utlis/api';
import UserListPagination from './UserListPagination';

const Userlist = () => {

    const [ userList, setUserList ] = useState([]);
    const [ totalUser, setTotalUser ] = useState(0);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ userListLimit, setUserListLimit ] = useState(0);

     const getUserList = async (currentPage) => {

      try{
        const res = await api.get(`/admin/api/userlist`,
          {
            params:{
              limit : 10,
              page: currentPage
            }
          }
        );

        setUserList(res);
        setTotalUser(res.data.totalUserData);
        setUserListLimit(res.data.offset);

      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      getUserList();
    },[])
    
  return (
    <>
              <div className='mx-20 my-10'>
              <div className="divider"></div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className="text-yellow-600 text-base">
                      <tr>
                        <th>Sl. No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1*/} 
                      {userList.data && userList.data.userListData.map((user, index) => 
                        (<UserListRow userinfo={user} key={user.id} indexPoint={index} userListFnc={getUserList} currPage={currentPage}/>)
                      )
                    } 
                    </tbody>
                    <tfoot>
                      { userList.data && <UserListPagination allUserCount={totalUser} userLimit={userListLimit} getAllUserListFunc={getUserList} setCurrPage={setCurrentPage} /> }
                    </tfoot>
                  </table>
                </div>
              </div>
            </>
  )
}

export default Userlist