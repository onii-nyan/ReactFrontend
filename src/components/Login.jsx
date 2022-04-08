import {useState, useRef, useContext} from'react'
import UserService from '../service/UserService';
import AuthContext from "../context/AuthProvaider"

const Login =()=>{
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef()

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [success, setSuccess]= useState(false)

    const save = async(e) =>{
        e.preventDefault();
        try{
            const res = await UserService.login(JSON.stringify({email,password}))
            const accessToken = res?.data?.accessToken;
            const roles = res?.data?.roles;
            setAuth({ email, password, accessToken });
            setSuccess(true)
            setEmail('')
            setPassword('')
        }catch(e){
            console.log(e)
        }
    }
    const logout=()=>{
        localStorage.clear();
        window.location.href = '/';
    }
        return(
            <>
            {success ? (
                <div>
                    <h1>Success</h1>
                    <button type="button" onClick={logout} class="btn btn-primary">Log out</button>
                </div>
            ):(
            <div>
                <header>Login</header>
                <div className='container'>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Email &amp; Password</span>
                        <input type="email" class="form-control" placeholder="your email.." 
                            id='email' ref={userRef} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" class="form-control" placeholder="your password.." 
                            id='password' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={save}>Submit</button>
                </div>
                <p>Need Account ?</p>
                <span className='line'>
                    <a href="#">Register</a>
                </span>
            </div>
            )}
        </>
    ) 
}

export default Login