import React, {Component} from'react'

class Success extends Component{
    logout(){
        localStorage.clear();
        window.location.href = '/';
    }
    render(){
        return(
            <div>
                <header>Success</header>
                <button type="button" onClick={this.logout} class="btn btn-primary">Log out</button>
            </div>
        )
    }
}

export default Success