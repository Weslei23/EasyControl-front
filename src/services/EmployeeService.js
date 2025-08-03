import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  getEmployeeByName(name) {
      return axios.get(`${EMPLOYEE_API_BASE_URL}/findByName`, {
          params: { name }
      });
  }

  addEmployee(employee) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  }

  updateEmployee(employeeId, employee) {
  return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${employeeId}`, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${employeeId}`);
  }
}

export default new EmployeeService();