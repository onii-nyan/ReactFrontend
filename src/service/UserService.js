import axios from 'axios'

const USER_API_BASEURL = "http://localhost:8080/api/v1/"

class UserService{
    login(){
        return axios.get(USER_API_BASEURL)
    }
    register(user){
        return axios.post(USER_API_BASEURL, user)
    }
}

export default new UserService