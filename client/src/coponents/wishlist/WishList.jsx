import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import WishListRow from './WishListRow';

const WishList = () => {
  const [ userWishList, setUserWishList ] = useState([]);
  const user = useSelector((state) => state.user);

  const myWishlist = async (user) => {
    const params = {}
    params.userId = user?.user?.id;
    try{
      const getWishList = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/mywishlist`,
        { 
          params
        }
      );
      //console.log(getWishList.data.myWishlist)
      setUserWishList(getWishList.data);
    }catch(err){
      setUserWishList([]);
    }
  };

  useEffect(() => {
    myWishlist(user);
  },[user])

  return (
    <div className='min-h-96 place-items-center'>
      <ul className="list bg-base-200 rounded-box shadow-md my-20 mx-20 w-2/3">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">My Wishlist</li>
        {userWishList?.myWishlist?.map((wList) => <WishListRow key={wList._id} myWish={wList}/>) }
      </ul>
    </div>
  )
}

export default WishList