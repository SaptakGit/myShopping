import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginModal = ({ onClose }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const navigate = useNavigate()
    const [ userName, setUserName ] = useState('')
    const [ userPhone, setUserPhone ] = useState('')
    const [ userAddress, setUserAddress ] = useState('')
    const [ userEmail, setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')
    const [ error, setError ] = useState('')

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown); 
    }, [onClose]);

    const handleLogin = async () => {
    
        try{
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/client/api/login`, {
                emailId,
                password
            }, {withCredentials:true});
            //console.log(res.data);
            //dispatch(addUser(res.data));
            //return navigate("/");
        } catch(err){
            setError(err.message);
        }
    }

    const handleSignup = async () => {
        try{
            const res =  await axios.post(
                `${import.meta.env.VITE_BASE_URL}/client/api/register`,
                {
                    userName, 
                    userPhone,
                    userAddress,
                    userEmail,
                    userPassword
                },
                {withCredentials:true}
            );
            //dispatch(addUser(res.data.data));

            //console.log(res)
            if(res.data.status){
                alert(res.data.message)
                //console.log(res.data.token)
                onClose()
            }else{
                alert(res.data.message);
                return false
            }

            
        } catch(err){
            setError(err.message);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-base-100 text-base-content rounded-lg shadow-xl w-full max-w-sm p-6 relative">
            <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2" onClick={onClose}>✕</button>

            <h3 className="text-lg font-bold mb-4 text-center">{isLoginForm ? "Login to Your Account" : "Create Your Account"}</h3>

            <form className="space-y-4">
            {!isLoginForm && <><input type="text" placeholder="Name" className="input input-bordered w-full" value={userName} onChange={(e)=> setUserName(e.target.value)} required />
            <input type="text" placeholder="Phone" className="input input-bordered w-full" value={userPhone} onChange={(e)=> setUserPhone(e.target.value) } required />
            <textarea placeholder="Address" className="input input-bordered w-full" value={userAddress} onChange={(e)=> setUserAddress(e.target.value)} required ></textarea></>}
            <input type="email" placeholder="Email" className="input input-bordered w-full" value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="input input-bordered w-full" value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} required />
            <button type="button" className="btn btn-primary w-full" onClick={isLoginForm ?  handleLogin : handleSignup}> {isLoginForm ? "Login" : "Sign up"}</button>
            </form>
            <p className='text-red-500'>{error}</p>
            <p className="text-center text-sm mt-4" onClick={() => setIsLoginForm((value) => !value)}>
                
            {isLoginForm ? (<span className='cursor-pointer'>New User? <span className='text-orange-600'>Register here</span></span>) : (<span className='cursor-pointer'>Existing User? <span className='text-yellow-600'>Login here</span></span>) }
            </p>
        </div>
        </div>
    );
};

export default LoginModal;
