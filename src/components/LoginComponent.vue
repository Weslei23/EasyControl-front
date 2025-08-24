<script>
import { ref } from 'vue'
import LoginService from '../services/LoginService.js'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const loading = ref(false)

    const login = async () => {
      error.value = ''
      loading.value = true
      try {
        const { data } = await LoginService.login(username.value, password.value)
        localStorage.setItem('access_token', data.token)
        localStorage.setItem('expires_in', data.expiresIn)
        window.location.href = '/' // redireciona para a home
      } catch (e) {
        error.value = e?.response?.data?.message || 'Usuário ou senha inválidos'
      } finally {
        loading.value = false
      }
    }

    return { username, password, error, loading, login }
  }
}
</script>

<template>
  <div id="container-login">
    <h1>Entrar</h1>
    <form @submit.prevent="login">
      <label for="username">Usuário</label>
      <input v-model="username" type="text" name="username" id="username" placeholder="Digite seu usuário" autocomplete="off">

      <label for="password">Senha</label>
      <input v-model="password" type="password" name="password" id="password" placeholder="Digite a sua senha">

      <input type="submit" :value="loading ? 'Entrando...' : 'Login'" :disabled="loading">
      <p v-if="error" style="color: red; margin-top: 10px">{{ error }}</p>
    </form>
  </div>
</template>
