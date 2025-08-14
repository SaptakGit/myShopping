const UserListPagination = ({allUserCount, userLimit, getAllUserListFunc, setCurrPage}) => {
    //console.log(555)
    const totalPages = Math.ceil(allUserCount/userLimit)
    const totalPagesArray = Array.from({length: totalPages}, (_,i) => i + 1);

    const paginateClick = (page) =>{
        getAllUserListFunc(page)
    }

    return (
        <tr>
            <th className='text-center' colSpan={16}>
                <div className="join">
                  {totalPagesArray.map((page,index) =>{
                      return <input className="join-item btn btn-square" type="radio" name="options" aria-label={page} key={page} onClick={() => {setCurrPage(page); paginateClick(page)}} />
                  })}
                </div>
            </th>
        </tr>
    )
}

export default UserListPagination;