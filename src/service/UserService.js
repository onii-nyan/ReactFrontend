import axios from 'axios'

const USER_API_BASEURL = "http://localhost:8090/api/v1/"

class UserService{
    login(){
        return axios.post(USER_API_BASEURL+"login")
    }
    register(user){
        return axios.post(USER_API_BASEURL+"register", user)
    }
}

export default new UserService()