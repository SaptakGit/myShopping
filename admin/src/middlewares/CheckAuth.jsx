import { Navigate } from 'react-router-dom';

const CheckAuth = ({childern}) => {
    console.log(childern)
    console.log('🛡️ CheckAuth loaded');
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to="/" replace />;
    }
    console.log('✅ Token found, rendering children');
    return childern
}

export default CheckAuth;