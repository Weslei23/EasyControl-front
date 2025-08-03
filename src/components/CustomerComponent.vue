<script>
import { Modal } from 'bootstrap';
import CustomerService from '../services/CustomerService.js';

export default {
  data() {
    return {
      customers: [],
      customerForm: {
        id: null,
        name: '',
        telephone: '',
        email: '',
        address: {
          street: '',
          number: '',
          city: '',
          state: '',
          complement: '',
          neighborhood: '',
          postalCode: ''
        }
      },
      editing: false,
      modalinstance: null
    };
  },
  computed: {
    modalTitle() {
      return this.editing ? 'Editar Cliente' : 'Adicionar Cliente';
    },
    buttonLabel() {
      return this.editing ? 'Alterar' : 'Salvar';
    }
  },
  methods: {
    showModal(customer) {
      if (customer) {
        this.customerForm = {
          ...customer,
          address: { ...customer.address } // evitar referência direta
        };
        this.editing = true;
      } else {
        this.resetForm();
      }
      if (!this.modalinstance) {
        this.modalinstance = new Modal(document.getElementById('customerModal'));
      }
      this.modalinstance.show();
    },
    addCustomer() {
      if (this.editing) {
        CustomerService.updateCustomer(this.customerForm.id, this.customerForm)
          .then(() => {
            this.loadCustomers();
            this.modalinstance.hide();
          })
          .catch(error => {
            console.error('Erro ao atualizar:', error.response?.data || error.message);
          });
      } else {
        CustomerService.addCustomer(this.customerForm)
          .then(() => {
            this.loadCustomers();
            this.modalinstance.hide();
          })
          .catch(error => {
            console.error('Erro ao adicionar:', error.response?.data || error.message);
          });
      }
    },
    loadCustomers() {
      CustomerService.getCustomers().then(response => {
        this.customers = response.data;
      });
    },
    deleteCustomer(id) {
      CustomerService.deleteCustomer(id).then(this.loadCustomers);
    },
    resetForm() {
      this.customerForm = {
        id: null,
        name: '',
        telephone: '',
        email: '',
        address: {
          street: '',
          number: '',
          city: '',
          state: '',
          complement: '',
          neighborhood: '',
          postalCode: ''
        }
      };
      this.editing = false;
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString('pt-BR');
    }
  },
  mounted() {
    this.loadCustomers();
  }
};
</script>

<template>
  <main>
    <div class="container mt-3">
      <button @click="showModal(null)" class="btn btn-primary" style="float: right;">Cadastrar Cliente</button>
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Cidade</th>
            <th>Manutenções</th>
            <th>Cadastrado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.name }}</td>
            <td>{{ customer.telephone }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.address?.city }}</td>
            <td>{{ customer.maintenances?.length || 0 }}</td>
            <td>{{ formatDate(customer.createdAt) }}</td>
            <td>
              <button class="btn btn-warning" @click="showModal(customer)">Editar</button>
              <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Deletar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="customerModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ modalTitle }}</h5>
              <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addCustomer">
                <div class="mb-3">
                  <label class="form-label">Nome</label>
                  <input type="text" class="form-control" v-model="customerForm.name" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Telefone</label>
                  <input type="text" class="form-control" v-model="customerForm.telephone" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" v-model="customerForm.email">
                </div>
                <hr />
                <h6>Endereço</h6>
                <div class="mb-3">
                  <label class="form-label">Rua</label>
                  <input type="text" class="form-control" v-model="customerForm.address.street" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Número</label>
                  <input type="text" class="form-control" v-model="customerForm.address.number" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Cidade</label>
                  <input type="text" class="form-control" v-model="customerForm.address.city" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Estado</label>
                  <input type="text" class="form-control" v-model="customerForm.address.state" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Bairro</label>
                  <input type="text" class="form-control" v-model="customerForm.address.neighborhood" required>
                </div>
                <div class="mb-3">
                  <label class="form-label">Complemento</label>
                  <input type="text" class="form-control" v-model="customerForm.address.complement">
                </div>
                <div class="mb-3">
                  <label class="form-label">CEP</label>
                  <input type="text" class="form-control" v-model="customerForm.address.postalCode" required>
                </div>
                <button type="submit" class="btn btn-primary">{{ buttonLabel }}</button>
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