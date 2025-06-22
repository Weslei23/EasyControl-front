# 🛠️ EasyControl - Frontend

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-brightgreen.svg)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status: Em Desenvolvimento](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()
<!-- [![Deploy](https://img.shields.io/badge/demo-online-green)](https://easycontrol.netlify.app) -->

Frontend desenvolvido em **Vue.js** para o sistema de controle de manutenções da fábrica de esquadrias. Permite o gerenciamento completo de ordens de manutenção, com foco em eficiência e usabilidade para equipes operacionais e administrativas.

---

## 📸 Captura de Tela

![Screenshot da interface](./public/screenshot-home.png)

---

## 📋 Funcionalidades

- ✅ Cadastro de manutenções com dados técnicos
- ✅ Atribuição de profissionais e clientes
- ✅ Filtros por status (Pendente, Em Andamento, Concluído)
- ✅ Modal para adição e edição de dados
- ✅ Responsivo para desktop e mobile
- 🔐 Integração com backend seguro via API REST

---

## 🧰 Tecnologias

- Vue 3
- Vue Router
- Axios
- Bootstrap
- Vite
- Font Awesome / Lucide Icons

---

## 🚀 Como executar

### Pré-requisitos

- Node.js 16+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/seu-usuario/easycontrol-frontend.git
cd easycontrol-frontend
npm install

### Execução em ambiente de desenvolvimento

npm run dev
# ou
yarn dev

### Estrutura do projeto

src/
├── assets/             # Imagens e arquivos estáticos
├── components/         # Componentes reutilizáveis
├── views/              # Páginas principais
├── router/             # Configuração de rotas
├── services/           # Integração com API (Axios)
└── App.vue             # Componente raiz


