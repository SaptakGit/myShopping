import { useState } from "react";
import axios from "axios";
//import { BASE_URL } from "../utlis/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    const handelLogin = async () => {
        try{
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/admin/api/login`,{email, password},{withCredentials:true});
            if(res.data.token){
                localStorage.setItem('token',res.data.token);
                return navigate("/dashboard");
            }else{
                setErrMsg(res.data.message);
            }
        }catch(err){
            setErrMsg(err?.response?.data?.message || 'Something went wrong')
        }
    } 

    return(
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl">Login</h2>
                    <div>
                        <input type="text" name="uname" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full max-w-xs mb-5" />
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <p>{errMsg}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handelLogin}>Submit</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Login