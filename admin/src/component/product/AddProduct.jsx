import axios from "axios";
import { useEffect, useState } from "react"

const AddProduct = () => {
    const [ categoryList, setCategoryList ] = useState([])
    const [ productName, setProductName ] = useState('')
    const [ productPhoto, setProductPhoto ] = useState(null)
    const [ categoryName, setCategoryName ] = useState('')
    const [ productPrice, setProductPrice ] = useState('')
    const [ offerPrice, setOfferPrice ] = useState('')
    const [ productQuantity, setProductQuantity ] = useState('')
    const [ productNew, setProductNew ] = useState('')
    const [ productTrending, setProductTrending ] = useState('')
    const [ productStatus, setProductStatus ] = useState('')

    const getCatList = async () => {
      try{
        const resCatList = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/api/activecatist`,{
          withCredentials:true
        });
        setCategoryList(resCatList.data);
      }catch(err){
        console.error('Failed to fetch category list:', err);
      }
    }

    useEffect(()=>{
      getCatList()
    },[])


    const addProduct = () => {
      console.log('456')
    }

    return (
        <div className='p-10 px-10 py-5 mx-5 rounded-lg bg-neutral text-neutral-content'>
          <form onSubmit={addProduct}>
            <h2 className='mb-4 text-2xl font-semibold'>Add Product</h2>
            <input type="text" placeholder="Product Name" className="w-full max-w-xs mr-5 mb-5 input" value={productName} onChange={(e) => setProductName(e.target.value)}/>
            <input type="file" className="w-full max-w-xs mr-5 mb-5 file-input" onChange={(e) => setProductPhoto(e.target.files[0])}/>
            <select defaultValue="Category Name" className="select select-neutral mr-5 mb-5" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
                <option disabled={true}>Category Name</option>
                {categoryList?.activeCategory?.length > 0 ? (
                  categoryList.activeCategory.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.categoryName}
                    </option>
                  ))
                ) : (
                  <option disabled>Loading or No Categories Found</option>
                )}
            </select>
            <input type="text" placeholder="Product Price" className="w-full max-w-xs mr-5 mb-5 input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
            <input type="text" placeholder="Offer Price" className="w-full max-w-xs mr-5 mb-5 input" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)}/>
            <input type="text" placeholder="Product Quantity" className="w-full max-w-xs mr-5 mb-5 input" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)}/>
            <div className="mr-5 mb-5">
              <label>Is New : </label>
              <input type="checkbox" className="checkbox border-red-600 bg-red-500 checked:border-green-500 checked:bg-green-400 checked:text-green-800" value={productNew} onChange={(e) => setProductNew(e.target.value)}/>
            </div>
            <div className="mr-5 mb-5">
              <label>Is Trending : </label>
              <input type="checkbox" className="checkbox border-red-600 bg-red-500 checked:border-green-500 checked:bg-green-400 checked:text-green-800" value={productTrending} onChange={(e) => setProductTrending(e.target.value)}/>
            </div>
            <div className="mr-5 mb-5">
              <label>Status : </label>
              <input type="checkbox" className="checkbox border-red-600 bg-red-500 checked:border-green-500 checked:bg-green-400 checked:text-green-800" value={productStatus} onChange={(e) => setProductStatus(e.target.value)}/>
            </div>
            <button className="btn btn-primary mr-5 mb-5" type='submit'>Save Product</button>
          </form>
        </div>
    )
}

export default AddProduct