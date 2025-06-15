import api from '../../utlis/api'
import { useEffect, useState } from "react"
import { BEARER_TOKEN } from "../../utlis/consttant";

const AddProduct = ({addgetProductListFnc}) => {
    const [ categoryList, setCategoryList ] = useState([])
    const [ productName, setProductName ] = useState('')
    const [ productPhoto, setProductPhoto ] = useState(null)
    const [ categoryId, setCategoryId ] = useState('Category Name')
    const [ productPrice, setProductPrice ] = useState('')
    const [ offerPrice, setOfferPrice ] = useState('')
    const [ productQuantity, setProductQuantity ] = useState(1)
    const [ productNew, setProductNew ] = useState(false)
    const [ productTrending, setProductTrending ] = useState(false)
    const [ productStatus, setProductStatus ] = useState(true) 

    const productNewCheckBox = (e) => {
        setProductNew(e.target.checked);
      };

      const productTrendingCheckBox = (e) => {
        setProductTrending(e.target.checked)
      };

      const productStatusCheckBox = (e) => {
        setProductStatus(e.target.checked)
      };

    const getCatList = async () => {
      try{
        const resCatList = await api.get(`/admin/api/activecatist`);
        setCategoryList(resCatList.data);
      }catch(err){
        console.error('Failed to fetch category list:', err);
      }
    }

    useEffect(()=>{
      getCatList()
    },[])


    const addProduct = async (e) => {
      //console.log('456')
      e.preventDefault();

      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('productPhoto', productPhoto);
      formData.append('categoryId', categoryId);
      formData.append('productPrice', productPrice);
      formData.append('offerPrice', offerPrice);
      formData.append('productQuantity', productQuantity);
      formData.append('productNew', productNew);
      formData.append('productTrending', productTrending);
      formData.append('productStatus', productStatus);

      try{
        const res = await api.post(`/admin/api/addproduct`, formData);
        alert('Product Added');
        addgetProductListFnc()
      }catch(err){
        console.error('Failed to add product: ', err)
      }
    }

    return (
        <div className='p-10 px-10 py-5 mx-5 rounded-lg bg-neutral text-neutral-content'>
          <form onSubmit={addProduct}>
            <h2 className='mb-4 text-2xl font-semibold'>Add Product</h2>
            <input type="text" placeholder="Product Name" className="w-full max-w-xs mb-5 mr-5 input" value={productName} onChange={(e) => setProductName(e.target.value)}/>
            <input type="file" className="w-full max-w-xs mb-5 mr-5 file-input" onChange={(e) => setProductPhoto(e.target.files[0])}/>
            <select className="mb-5 mr-5 select select-neutral" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
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
            <input type="text" placeholder="Product Price" className="w-full max-w-xs mb-5 mr-5 input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
            <input type="text" placeholder="Offer Price" className="w-full max-w-xs mb-5 mr-5 input" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)}/>
            <input type="text" placeholder="Product Quantity" className="w-full max-w-xs mb-5 mr-5 input" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)}/>
            <div className="mb-5 mr-5">
              <label>Is New : </label>
              <input type="checkbox" className="bg-red-500 border-red-600 checkbox checked:border-green-500 checked:bg-green-400 checked:text-green-800" checked={productNew} onChange={productNewCheckBox}/>
            </div>
            <div className="mb-5 mr-5">
              <label>Is Trending : </label>
              <input type="checkbox" className="bg-red-500 border-red-600 checkbox checked:border-green-500 checked:bg-green-400 checked:text-green-800" checked={productTrending} onChange={productTrendingCheckBox}/>
            </div>
            <div className="mb-5 mr-5">
              <label>Status : </label>
              <input type="checkbox" className="bg-red-500 border-red-600 checkbox checked:border-green-500 checked:bg-green-400 checked:text-green-800" checked={productStatus} onChange={productStatusCheckBox}/>
            </div>
            <button className="mb-5 mr-5 btn btn-primary" type='submit'>Save Product</button>
          </form>
        </div>
    )
}

export default AddProduct