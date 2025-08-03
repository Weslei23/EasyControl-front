<script>
import { Modal } from 'bootstrap';
import MaintenanceService from '../services/MaintenanceService.js';
import CustomerService from '../services/CustomerService.js';
import EmployeeService from '../services/EmployeeService.js';


export default 
{
  data() {
    return {
      maintenances: [],
      customers: [],
      employees: [],
      maintenanceForm: {
        scheduledDate: '',
        statusModel: 'ABERTO',
        typeMaterialModel: 'ALUMINIO',
        descriptionService: '',
        customerId: '',
        employeeId: ''
      },
      editing: false,
      modalinstance: null
    };
  },
  computed: {
    modalTitle() {
      return this.editing ? 'Editar Manutenção' : 'Nova Manutenção';
    },
    buttonLabel() {
      return this.editing ? 'Atualizar' : 'Criar';
    }
  },
  methods: {
    showModal(maintenance) {
      if (maintenance) {
        this.maintenanceForm = {
          scheduledDate: maintenance.scheduledDate,
          statusModel: maintenance.status,
          typeMaterialModel: maintenance.typeMaterial,
          descriptionService: maintenance.descriptionService,
          customerId: maintenance.customerId,
          employeeId: maintenance.employeeId,
          id: maintenance.id
        };
        this.editing = true;
      } else {
        this.resetForm();
      }

      if (!this.modalinstance) {
        this.modalinstance = new Modal(document.getElementById('maintenanceModal'));
      }
      this.modalinstance.show();
    },
    addOrUpdateMaintenance() {
      const payload = { ...this.maintenanceForm };
      const action = this.editing
        ? MaintenanceService.updateMaintenance(payload.id, payload)
        : MaintenanceService.addMaintenance(payload);

      action.then(() => {
        this.loadMaintenances();
        this.modalinstance.hide();
      }).catch(err => {
        console.error('Erro:', err.response?.data || err.message);
      });
    },
    deleteMaintenance(id) {
      MaintenanceService.deleteMaintenance(id).then(this.loadMaintenances);
    },
    resetForm() {
      this.maintenanceForm = {
        scheduledDate: '',
        statusModel: 'ABERTO',
        typeMaterialModel: 'ALUMINIO',
        descriptionService: '',
        customerId: '',
        employeeId: ''
      };
      this.editing = false;
    },
    loadMaintenances() {
      MaintenanceService.getMaintenances().then(res => {
        this.maintenances = res.data;
      });
    },
    loadCustomers() {
      CustomerService.getCustomers().then(res => {
        this.customers = res.data;
      });
    },
    loadEmployees() {
      EmployeeService.getEmployees().then(res => {
        this.employees = res.data;
      });
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString('pt-BR');
    }
  },
  mounted() {
    this.loadMaintenances();
    this.loadCustomers();
    this.loadEmployees();
  }
};
</script>

<template>
  <main>
    <div class="container mt-3">
      <button class="btn btn-primary mb-3 float-end" @click="showModal(null)">Cadastrar Manutenção</button>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Data de Cadastro</th>
            <th>Status</th>
            <th>Tipo</th>
            <th>Descrição</th>
            <th>Cliente</th>
            <th>Responsável</th>
            <th>Agendado para</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in maintenances" :key="m.id">
            <td>{{ formatDate(m.scheduledDate) }}</td>
            <td>{{ m.status }}</td>
            <td>{{ m.typeMaterial }}</td>
            <td>{{ m.descriptionService }}</td>
            <td>{{ m.customerName }}</td>
            <td>{{ m.employeeName }}</td>
            <td>{{ formatDate(m.createdAt) }}</td>
            <td>
              <div class="btn-container">
                <button class="btn btn-warning btn-sm" @click="showModal(m)">Editar</button>
                <button class="btn btn-danger btn-sm" @click="deleteMaintenance(m.id)">Excluir</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="maintenanceModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ modalTitle }}</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addOrUpdateMaintenance">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label>Data Agendada</label>
                    <input type="date" class="form-control" v-model="maintenanceForm.scheduledDate" required />
                  </div>
                  <div class="col-md-6">
                    <label>Status</label>
                    <select class="form-control" v-model="maintenanceForm.statusModel" required>
                      <option value="ABERTO">ABERTO</option>
                      <option value="EM_ANDAMENTO">EM ANDAMENTO</option>
                      <option value="PENDENCIAS">PENDENCIAS</option>
                      <option value="ENCERRADO">ENCERRADO</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label>Tipo de Material</label>
                    <select class="form-control" v-model="maintenanceForm.typeMaterialModel" required>
                      <option value="ALUMINIO">ALUMÍNIO</option>
                      <option value="PVC">PVC</option>
                      <option value="MADEIRA">MADEIRA</option>
                    </select>
                  </div>
                  <div class="col-md-12">
                    <label>Descrição do Serviço</label>
                    <textarea class="form-control" v-model="maintenanceForm.descriptionService" required></textarea>
                  </div>
                  <div class="col-md-6">
                    <label>Cliente</label>
                    <select class="form-control" v-model="maintenanceForm.customerId" required>
                      <option disabled value="">Selecione um cliente</option>
                      <option v-for="c in customers" :key="c.id" :value="c.id">{{ c.name }}</option>
                    </select>
                    <!-- <label>ID do Cliente</label>
                    <input type="text" class="form-control" v-model="maintenanceForm.customerId" required /> -->
                  </div>
                  <div class="col-md-6">
                    <label>Funcionário</label>
                    <select class="form-control" v-model="maintenanceForm.employeeId" required>
                      <option disabled value="">Selecione um funcionário</option>
                      <option v-for="e in employees" :key="e.id" :value="e.id">{{ e.name }}</option>
                    </select>
                    <!-- <label>ID do Funcionário</label>
                    <input type="text" class="form-control" v-model="maintenanceForm.employeeId" required /> -->
                  </div>
                </div>
                <button class="btn btn-primary mt-3" type="submit">{{ buttonLabel }}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>

</style>