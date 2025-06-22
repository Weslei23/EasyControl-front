import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/customers";

class CustomerService {

  getCustomers() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  addCustomer(customer) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, customer);
  }

  getCustomerById(customerId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${customerId}`);
  }

  updateCustomer(customerId, customer) {
  return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${customerId}`, customer);
  }

  deleteCustomer(customerId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${customerId}`);
  }
}

export default new CustomerService();