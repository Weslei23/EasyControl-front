import axios from 'axios';
import { markRaw } from 'vue';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/maintenances";

class MaintenanceService {

    getMaintenances() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    addMaintenance(maintenance) {
        return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, maintenance);
    }

    getMaintenanceById(maintenanceId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${maintenanceId}`);
    }

    updateMaintenance(maintenanceId, maintenance) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${maintenanceId}`, maintenance);
    }

    deleteMaintenance(maintenanceId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${maintenanceId}`);
    }
}

export default new MaintenanceService();