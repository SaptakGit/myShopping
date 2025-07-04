import { Navigate } from 'react-router-dom';

const CheckAuth = (props) => {
    const {children} = props
    //console.log('🛡️ CheckAuth loaded');
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to="/" replace />;
    }
    //console.log('✅ Token found, rendering children');
    return <>
    {children}
    </>
}

export default CheckAuth;