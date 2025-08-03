<script>
import { Modal } from 'bootstrap';
import EmployeeService from '../services/EmployeeService.js';

export default {
  data() {
    return {
      employees: [],
      employeeForm: {
        id: null,
        name: '',
        telephone: '',
        specialty: ''
        // maintenances:''
      },
      editing: false,
      modalinstance: null
    };
  },
  computed: {
    modalTitle() {
      return this.editing ? 'Editar Funcionário' : 'Adicionar Funcionário';
    },
    buttonLabel() {
      return this.editing ? 'Alterar' : 'Salvar';
    }
  },
  methods: {
    showModal(employee) {
      if (employee) {
        this.employeeForm = { ...employee };
        this.editing = true;
      } else {
        this.restForm();
      }
      if (!this.modalinstance) {
        this.modalinstance = new Modal(document.getElementById('employeeModal'));
      }
      this.modalinstance.show();
    },
    addEmployee() {
      if (this.editing) {
        // Atualiza funcionário passando ID e dados
        EmployeeService.updateEmployee(this.employeeForm.id, this.employeeForm)
          .then(() => {
            this.loadEmployees();
            this.modalinstance.hide();
          })
          .catch(error => {
            console.error('Erro ao atualizar:', error.response?.data || error.message);
          });
      } else {
        // Cria novo funcionário
        EmployeeService.addEmployee(this.employeeForm)
          .then(() => {
            this.loadEmployees();
            this.modalinstance.hide();
          })
          .catch(error => {
            console.error('Erro ao adicionar:', error.response?.data || error.message);
          });
      }
    },
    loadEmployees() {
      EmployeeService.getEmployees().then(response => {
        this.employees = response.data;
      });
    },
    deleteEmployee(id) {
      EmployeeService.deleteEmployee(id).then(this.loadEmployees);
    },
    restForm() {
      this.employeeForm = {
        id: null,
        name: '',
        telephone: '',
        specialty: ''
        // maintenances:''
      };
      this.editing = false;
    }
  },
  mounted() {
    this.loadEmployees();
  }
};
</script>

<template>
  <main>
    <div class="container mt-3">
        <button @click="showModal(null)" class="btn btn-primary" style="float: right;">Cadastrar Funcionário</button>
        <table class="table table-stripped mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Especialidade</th>
                    <!-- <th>Manutenções</th> -->
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.telephone }}</td>
                    <td>{{ employee.specialty }}</td>
                    <!-- <td>{{ employee.maintenances }}</td> -->
                    <td> <button class="btn btn-warning" @click="showModal(employee)" >Editar</button> <span></span>
                        <button class="btn btn-danger" @click="deleteEmployee(employee.id)">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="modal fade" id="employeeModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ modalTitle }}</h5>
                        <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addEmployee" >
                            <div class="mb-3">
                                <label class="form-label">Nome</label>
                                <input type="text" class="form-control" v-model="employeeForm.name" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Telefone</label>
                                <input type="text" class="form-control"  v-model="employeeForm.telephone" required>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Especialidade</label>
                                <input type="text" class="form-control"  v-model="employeeForm.specialty" required>
                            </div>
                            <!-- <div class="mb-3"> -->
                                <!-- <label class="form-label">Manutenções</label> -->
                                <!-- <input type="text" class="form-control"  v-model="employeeForm.maintenances"> -->
                            <!-- </div> -->
                            <button type="submit" class="btn btn-primary">{{ buttonLabel }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>