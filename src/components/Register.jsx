import {useState, useRef} from'react'
import UserService from '../service/UserService';

const Register =()=>{
    const userRef = useRef()

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [success, setSuccess]= useState(false)

    const save = async(e) =>{
        e.preventDefault();
        try{
            const res = await UserService.register(JSON.stringify({name, email,password}))
            setSuccess(true)
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
                <header>Register</header>
                <div className='container'>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Name</span>
                        <input type="text" class="form-control" placeholder="your name.." 
                           id='name' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Email &amp; Password</span>
                        <input type="email" class="form-control" placeholder="your email.." 
                            id='email' ref={userRef} onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" class="form-control" placeholder="your password.." 
                            id='password' onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={save}>Submit</button>
                </div>
                <p>Have Account ?</p>
                <span className='line'>
                    <a href="#">login</a>
                </span>
            </div>
            )}
        </>
    ) 
}

export default Register