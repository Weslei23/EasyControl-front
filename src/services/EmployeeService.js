import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
// Buscar todos os funcionários
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  // Criar novo funcionário
  addEmployee(employee) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, employee);
  }

  // Buscar funcionário por ID
  getEmployeeById(employeeId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/${employeeId}`);
  }

  // Atualizar funcionário (com ID e corpo JSON)
  updateEmployee(employeeId, employee) {
  return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${employeeId}`, employee);
  }

  // Excluir funcionário
  deleteEmployee(employeeId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${employeeId}`);
  }
}

export default new EmployeeService();