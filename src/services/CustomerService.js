import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:8080/api/v1/customers";

class CustomerService {

  getCustomers() {
    return axios.get(CUSTOMER_API_BASE_URL);
  }

  getCustomerByName(name) {
    return axios.get(`${CUSTOMER_API_BASE_URL}/findByName`, {
        params: { name }
    });
  }

  getUserByEmail(customerEmail) {
    return axios.get(`${CUSTOMER_API_BASE_URL}/findByEmail`, {
        params: { customerEmail }
    });
  }

  addCustomer(customer) {
    return axios.post(`${CUSTOMER_API_BASE_URL}/add`, customer);
  }

  getCustomerById(customerId) {
    return axios.get(`${CUSTOMER_API_BASE_URL}/${customerId}`);
  }

  updateCustomer(customerId, customer) {
  return axios.put(`${CUSTOMER_API_BASE_URL}/update/${customerId}`, customer);
  }

  deleteCustomer(customerId) {
    return axios.delete(`${CUSTOMER_API_BASE_URL}/delete/${customerId}`);
  }
}

export default new CustomerService();