import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/api/v1/users";

class LoginService {

    getUsers() {
        return axios.get(LOGIN_API_BASE_URL);
    }

    getUserByUsername(userName) {
        return axios.get(`${LOGIN_API_BASE_URL}/findByName`, {
            params: { userName }
        });
    }

    getUserByName(name) {
        return axios.get(`${LOGIN_API_BASE_URL}/findByName`, {
            params: { name }
        });
    }

    getUserByEmail(userEmail) {
        return axios.get(`${LOGIN_API_BASE_URL}/findByEmail`, {
            params: { userEmail }
        });
    }

    addUser(user) {
        return axios.post(`${LOGIN_API_BASE_URL}/add`, user);
    }

    getUserById(userId) {
        return axios.get(`${LOGIN_API_BASE_URL}/${userId}`);
    }


    updateUser(userId, user) {
        return axios.put(`${LOGIN_API_BASE_URL}/update/${userId}`, user);
    }

    deleteUserById(userId) {
        return axios.delete(`${LOGIN_API_BASE_URL}/delete/${userId}`);
    }
}

export default new LoginService();