import React, {Component} from'react'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
        this.register= this.register.bind(this)
    }
    render(){
        return(
            <div>
                <header>Login</header>
                <div className='container'>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Email &amp; Password</span>
                        <input type="email" class="form-control" placeholder="your email.." aria-label="email" aria-describedby="basic-addon2"/>
                        <input type="password" class="form-control" placeholder="your password.." aria-label="password" aria-describedby="basic-addon2"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        )
    }
}

export default Login