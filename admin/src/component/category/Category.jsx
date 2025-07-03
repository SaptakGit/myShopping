import axios from 'axios';
import api from '../../utlis/api'
import React, { useEffect, useState } from 'react'
import CategoryListRow from './CategoryListRow';
import CategoryListPagination from './CategoryListPagination';
import CreateCategory from './CreateCategory';
// import { BEARER_TOKEN } from '../../utlis/consttant';
//import UserListPagination from './UserListPagination';

const Category = () => {

  console.log('✅ Category component mounted');

  const [ allCategoryListData, setAllCategoryListData ] = useState([]);
  const [ totalCategory, setTotalCategory ] = useState(0);
  const [ catListLimit, setCatListLimit ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);

  const getAllCategoryList = async (currentPage) => {
    try{
      //const BEARER_TOKEN = localStorage.getItem('token');
      const res = await api.get(`/admin/api/categorylist`,{
        params: {
          limit: 10,
          page: currentPage
         }
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
            <thead className="text-yellow-600 text-base">
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
                (<CategoryListRow catinfo={category} key={category._id} catListFnc={getAllCategoryList} currPage={currentPage}/>)
              )
            }
            </tbody>
            {/* foot */}
            <tfoot>
              {allCategoryListData.data && <CategoryListPagination allCategoryCount={totalCategory} categoryLimit={catListLimit} getAllCategorListFunc={getAllCategoryList} setCurrPage={setCurrentPage} />
              }
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default Category