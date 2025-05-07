const CategoryListPagination = ({allCategoryCount, categoryLimit, getAllCategorListFunc}) => {

  const totalPages = Math.ceil(allCategoryCount/categoryLimit)
  const totalPagesArray = Array.from({length: totalPages}, (_,i) => i + 1);

  const paginateClick = (page) =>{
    getAllCategorListFunc(page)
  }

    return(
        <tr>
              <th className='text-center' colSpan={5}>
                <div className="join">
                  {totalPagesArray.map((page,index) =>{
                      return <input className="join-item btn btn-square" type="radio" name="options" aria-label={page} key={page} onClick={() => paginateClick(page)} />
                  })}
                </div>
              </th>
            </tr>
    )
}

export default CategoryListPagination