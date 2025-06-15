import React, { useState } from 'react'
import api from '../../utlis/api'
import { BEARER_TOKEN } from '../../utlis/consttant'

const CreateCategory = ({newCategoryListFnc}) => {

    const [categoryName, setCategoryName] = useState("");
    const [categoryPhoto, setCategoryPhoto] = useState(null);

    const saveCategory = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('categoryName', categoryName);
        formData.append('categoryPhoto',categoryPhoto);
        
        try{
          const res = await api.post(`/admin/api/category`, formData);
    
          //console.log(res);
          setCategoryName("");
          setCategoryPhoto(null);
          alert('Category Created');
          newCategoryListFnc()
        }
        catch(err){
          console.error(err);
          alert('Error creating category');
        }
      }

    return (
        <div className='p-10 px-10 py-5 mx-5 rounded-lg bg-neutral text-neutral-content'>
          <form onSubmit={saveCategory}>
            <h2 className='mb-4 text-2xl font-semibold'>Create Category</h2>
            <input type="text" placeholder="Category Name" className="w-full max-w-xs mr-5 input" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/>
            <input type="file" className="w-full max-w-xs mr-5 file-input" onChange={(e) => setCategoryPhoto(e.target.files[0])}/>
            <button className="btn btn-primary" type='submit'>Save</button>
          </form>
        </div>
    )
}

export default CreateCategory