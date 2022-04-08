import React, {Component} from'react'
import UserService from '../services/UserService';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
        }
        this.register= this.register.bind(this)
    }
    componentDidMount(){
        
    }
    save(){
        this.props.history.push('/success');
    }
    render(){
        return(
            <div>
                <header>Register</header>
                <div className='container'>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Name</span>
                        <input type="text" class="form-control" placeholder="your name.." 
                            value={this.state.name} onChange={this.changeNameHandler}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Email &amp; Password</span>
                        <input type="email" class="form-control" placeholder="your email.." 
                            value={this.state.email} onChange={this.changeEmailHandler}/>
                        <input type="password" class="form-control" placeholder="your password.." 
                            value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.save}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Register