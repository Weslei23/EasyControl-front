import axios from 'axios';
import { markRaw } from 'vue';

const MAINTENANCE_API_BASE_URL = "http://localhost:8080/api/v1/maintenances";

class MaintenanceService {

    getMaintenances() {
        return axios.get(MAINTENANCE_API_BASE_URL);
    }

    addMaintenance(maintenance) {
        return axios.post(`${MAINTENANCE_API_BASE_URL}/add`, maintenance);
    }

    getMaintenanceById(maintenanceId) {
        return axios.get(`${MAINTENANCE_API_BASE_URL}/${maintenanceId}`);
    }

    updateMaintenance(maintenanceId, maintenance) {
    return axios.put(`${MAINTENANCE_API_BASE_URL}/update/${maintenanceId}`, maintenance);
    }

    deleteMaintenance(maintenanceId) {
        return axios.delete(`${MAINTENANCE_API_BASE_URL}/delete/${maintenanceId}`);
    }
}

export default new MaintenanceService();