import axios from 'axios';

const AUTH_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class LoginService {
    
    login(username, password) {
        return axios.post(`${AUTH_API_BASE_URL}/login`, {
            username,
            password
        });
    }
}

export default new LoginService();
