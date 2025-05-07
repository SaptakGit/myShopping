import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryListRow from './CategoryListRow';
import CategoryListPagination from './CategoryListPagination';
import CreateCategory from './CreateCategory';
//import { BASE_URL, BEARER_TOKEN } from '../utlis/constants';
//import UserListPagination from './UserListPagination';

const Category = () => {

  const [ allCategoryListData, setAllCategoryListData ] = useState([]);
  const [ totalCategory, setTotalCategory ] = useState(0);
  const [ catListLimit, setCatListLimit ] = useState(0);

  const getAllCategoryList = async (currPage = 1) => {
    try{
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/api/categorylist`,{
        /*headers:{
          Authorization : `Bearer ${BEARER_TOKEN}`
        },*/
        params: {
          limit: 10,
          page: currPage
         },
        withCredentials : true
      })
      //console.log(res.data.categoryList)
      setAllCategoryListData(res);
      setTotalCategory(res.data.totalCategory);
      setCatListLimit(res.data.limit)
    } catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{
    getAllCategoryList()
  },[])
  
  
  return (
    <>
      <div className='mx-20 my-10'>
        <CreateCategory newCategoryListFnc={getAllCategoryList} />
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
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Category Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allCategoryListData.data && allCategoryListData.data.categoryList.map((category, index) => 
                (<CategoryListRow catinfo={category} key={category._id}/>)
              )
            }
            </tbody>
            {/* foot */}
            <tfoot>
              {allCategoryListData.data && <CategoryListPagination allCategoryCount={totalCategory} categoryLimit={catListLimit} getAllCategorListFunc={getAllCategoryList} />
              }
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default Category