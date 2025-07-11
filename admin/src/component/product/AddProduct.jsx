import api from '../../utlis/api'
import { useEffect, useState } from "react"
import { BEARER_TOKEN } from "../../utlis/consttant";

const AddProduct = ({addgetProductListFnc}) => {
    const [ categoryList, setCategoryList ] = useState([])
    const [ brandList, setBrandList ] = useState([])
    const [ colorList, setColorList ] = useState([])
    const [ occasionList, setOccasionList ] = useState([])
    const [ shapeList, setShapeList ] = useState([])
    const [ typeList, setTypeList ] = useState([])
    const [ caratList, setCaratList ] = useState([])

    const [ productName, setProductName ] = useState('')
    const [ productPhoto, setProductPhoto ] = useState(null)
    const [ categoryId, setCategoryId ] = useState('Category Name')
    const [ shapeId, setShapeId ] = useState('Select Shape')
    const [ brandId, setBrandId ] = useState('Select Brand')
    const [ caratId, setCaratId ] = useState('Select Carat')
    const [ productWeight, setProductWeight ] = useState('0')
    const [ colorId, setColorId ] = useState('Select Color')
    const [ typeId, setTypeId ] = useState('Select Type')
    const [ occasionId, setOccasionId ] = useState('Select Occasion')
    const [ productPrice, setProductPrice ] = useState('')
    const [ offerPrice, setOfferPrice ] = useState('')
    const [ productQuantity, setProductQuantity ] = useState(1)
    const [ productStatus, setProductStatus ] = useState(true) 
    const [showToast, setShowToast] = useState(false);

    const productStatusCheckBox = (e) => {
      setProductStatus(e.target.checked)
    };

    const getCatList = async () => {
      try{
        const resCatList = await api.get(`/admin/api/activecatlist`);
        setCategoryList(resCatList.data);
      }catch(err){
        console.error('Failed to fetch category list:', err);
      }
    }

    const getBrandList = async () => {
      try{
        const resBrandList = await api.get(`/admin/api/activebrandlist`);
        setBrandList(resBrandList.data);
      }catch(err){
        console.error('Failed to fetch brand list:', err);
      }
    }

    const getColorList = async () => {
      try{
        const resColorList = await api.get(`/admin/api/activecolorlist`);
        setColorList(resColorList.data);
      }catch(err){
        console.error('Failed to fetch color list:', err);
      }
    }

    const getOccasionList = async () => {
      try{
        const resOccasionList = await api.get(`/admin/api/activeoccasionlist`);
        setOccasionList(resOccasionList.data);
      }catch(err){
        console.error('Failed to fetch occasion list:', err);
      }
    }

    const getShapeList = async () => {
      try{
        const resShapeList = await api.get(`/admin/api/activeshapelist`);
        setShapeList(resShapeList.data);
      }catch(err){
        console.error('Failed to fetch shape list:', err);
      }
    }

    const getTypeList = async () => {
      try{
        const resTypeList = await api.get(`/admin/api/activetypelist`);
        setTypeList(resTypeList.data);
      }catch(err){
        console.error('Failed to fetch type list:', err);
      }
    }

    const getCaratList = () =>{
      try{
        const caratListArr = [];
        for(let i=1; i<=25; i++){
          caratListArr.push(i);
        }

        setCaratList(caratListArr)

      }catch(err){
        console.error('Failed to fetch carat list:', err);
      }
    }

    useEffect(()=>{
      getCatList()
      getBrandList()
      getColorList()
      getOccasionList()
      getShapeList()
      getTypeList()
      getCaratList()
    },[])


    const addProduct = async (e) => {
      //console.log('456')
      e.preventDefault();

      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('productPhoto', productPhoto);     
      formData.append('categoryId', categoryId);
      formData.append('shapeId', shapeId);
      formData.append('brandId', brandId);
      formData.append('caratSize', caratId);
      formData.append('productWeight', productWeight);
      formData.append('colorId', colorId);
      formData.append('typeId', typeId);
      formData.append('occasionId', occasionId);
      formData.append('productPrice', productPrice);
      formData.append('offerPrice', offerPrice);
      formData.append('productQuantity', productQuantity);
      formData.append('productStatus', productStatus);

      try{
        const res = await api.post(`/admin/api/addproduct`, formData);
        //alert('Product Added');
        setShowToast(true);
        addgetProductListFnc();
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      }catch(err){
        console.error('Failed to add product: ', err)
      }
    }

    return (
        <div className='p-10 px-10 py-5 mx-5 rounded-lg bg-neutral text-neutral-content'>
          <form onSubmit={addProduct} >
            <h2 className='mb-4 text-2xl font-semibold'>Add Product</h2>
            <div className='flex flex-wrap'>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Name</label>
                <input type="text" placeholder="Product Name" className="w-full max-w-xs input" value={productName} onChange={(e) => setProductName(e.target.value)}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Image</label>
                <input type="file" className="w-full max-w-xs file-input" onChange={(e) => setProductPhoto(e.target.files[0])}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Category</label>
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
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Shape</label>
                <select className="mb-5 mr-5 select select-neutral" value={shapeId} onChange={(e) => setShapeId(e.target.value)}>
                  <option disabled={true}>Select Shape</option>
                  {shapeList?.activeShape?.length > 0 ? (
                    shapeList.activeShape.map((shape) => (
                      <option key={shape._id} value={shape._id}>
                        {shape.shapeName}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Shapes Found</option>
                  )}
                </select>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Carat</label>
                <select className="mb-5 mr-5 select select-neutral" value={caratId} onChange={(e) => setCaratId(e.target.value)}>
                  <option disabled={true}>Select Carat</option>
                  {caratList?.length > 0 ? (
                    caratList.map((carat) => (
                      <option key={carat} value={carat}>
                        {carat}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Carat Found</option>
                  )}
                </select>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Weight (Grams)</label>
                <input type="text" placeholder="Product Weight" className="w-full max-w-xs input" value={productWeight} onChange={(e) => setProductWeight(e.target.value)}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Brand</label>
                <select className="mb-5 mr-5 select select-neutral" value={brandId} onChange={(e) => setBrandId(e.target.value)}>
                  <option disabled={true}>Select Brand</option>
                  {brandList?.activeBrand?.length > 0 ? (
                    brandList.activeBrand.map((brand) => (
                      <option key={brand._id} value={brand._id}>
                        {brand.brandName}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Shapes Found</option>
                  )}
                </select>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Color</label>
                <select className="mb-5 mr-5 select select-neutral" value={colorId} onChange={(e) => setColorId(e.target.value)}>
                  <option disabled={true}>Select Color</option>
                  {colorList?.activeColor?.length > 0 ? (
                    colorList.activeColor.map((color) => (
                      <option key={color._id} value={color._id}>
                        {color.colorName}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Color Found</option>
                  )}
                </select>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Type</label>
                <select className="mb-5 mr-5 select select-neutral" value={typeId} onChange={(e) => setTypeId(e.target.value)}>
                  <option disabled={true}>Select Type</option>
                  {typeList?.activeType?.length > 0 ? (
                    typeList.activeType.map((type) => (
                      <option key={type._id} value={type._id}>
                        {type.typeName}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Categories Found</option>
                  )}
                </select>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Occasions</label>
                <select className="mb-5 mr-5 select select-neutral" value={occasionId} onChange={(e) => setOccasionId(e.target.value)}>
                  <option disabled={true}>Select Occasion</option>
                  {occasionList?.activeOccasion?.length > 0 ? (
                    occasionList.activeOccasion.map((occasion) => (
                      <option key={occasion._id} value={occasion._id}>
                        {occasion.occasionName}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading or No Occasion Found</option>
                  )}
                </select>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Price</label>
                <input type="text" placeholder="Product Price" className="w-full max-w-xs input" value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Offer Price</label>
                <input type="text" placeholder="Offer Price" className="w-full max-w-xs input" value={offerPrice} onChange={(e) => setOfferPrice(e.target.value)}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Quantity</label>
                <input type="text" placeholder="Product Quantity" className="w-full max-w-xs input" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label">Product Status</label>
                <input type="checkbox" className="bg-red-500 border-red-600 checkbox checked:border-green-500 checked:bg-green-400 checked:text-green-800" checked={productStatus} onChange={productStatusCheckBox}/>
              </fieldset>
              <fieldset className="fieldset mb-5 mr-5">
                <label className="label"></label>
                <button className="btn btn-primary mt-4" type='submit'>Save Product</button>
              </fieldset>
            </div> 
          </form>
          {showToast && (<div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Product Added Successfully.</span>
                </div>
            </div>)}
        </div>
        
    )
}

export default AddProduct