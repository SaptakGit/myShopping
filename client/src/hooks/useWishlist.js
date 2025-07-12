import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice';
import axios from 'axios';

const useWishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist);
    const user = useSelector((state) => state.user);

    const inWishlist = (productId) => {
        //console.log('p-',productId)
        return wishlist.some((item) => item.productId === productId);
        //wishlist.some((item) => console.log(item._id));
    };

    /*const fetchWishlist = async () => {
        try{
            const userId = user.id;

            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/client/api/mywishlist`,
                { userId: userId }
            );
            dispatch(setWishlist(res.data.wishlist));
        }catch(err){
            console.err('Failed to load wishlist', err);
        }
    };*/

    const toggleWishlist = async (product, setToastMsg, setShowToast) => {
        try{
            if(inWishlist(product._id)){
                await axios.post(`${import.meta.env.VITE_BASE_URL}/client/api/removefromwishlist`, {productId: product._id, userId: user.user.id});
                dispatch(removeFromWishlist(product._id));
                if(setToastMsg && setShowToast ){
                    setToastMsg("Item removed from wishlist");
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3000);
                }
            } else {
                const addCartData = await axios.post(`${import.meta.env.VITE_BASE_URL}/client/api/addtowishlist`, {productId: product._id, userId: user.user.id});
                // need to change
                console.log(addCartData.data.saveData);
                dispatch(addToWishlist(addCartData.data.saveData));
                if(setToastMsg && setShowToast ){
                    setToastMsg("Item added to wishlist");
                    setShowToast(true);
                    setTimeout(() => {
                        setShowToast(false);
                    }, 3000);
                }
            }
        }catch(err){
            console.error("Wishlist update failed:", err);
        }
    }

    return {
        wishlist,
        inWishlist,
        toggleWishlist,
        //fetchWishlist
    }

};

export default useWishlist;