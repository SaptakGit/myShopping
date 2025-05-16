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
        
        <div className="flex justify-center my-10 ">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 w-96 ">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="btn btn-neutral mt-4" onClick={handelLogin}>Login</button>
            </fieldset>
        </div>

        /*<div className="flex justify-center my-10">
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
        </div> */
    )
}

export default Login