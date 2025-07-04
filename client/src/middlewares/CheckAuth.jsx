import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import axios from 'axios';

const CheckAuth = (props) => {
    const {children} = props
    const dispatch = useDispatch()
    //console.log('🛡️ CheckAuth loaded');
    const token = localStorage.getItem('token');

    const chkAuth = async () => {
        try{
            const res =  await axios.post(
                `${import.meta.env.VITE_BASE_URL}/client/api/chkauth`,
                {
                    token
                },
                {withCredentials:true}
            );

            //console.log(res.data)

            if(res.data.status){
                dispatch(addUser(res.data))
            }

        }catch(err){
            console.log(err)
        }
    }

    if(token){
        //return <Navigate to="/" replace />;
        //console.log('err')
        chkAuth()
    }else{
        dispatch(addUser({status:false}))
    }
    //console.log('✅ Token found, rendering children');
    return <>
    {children}
    </>
}

export default CheckAuth;