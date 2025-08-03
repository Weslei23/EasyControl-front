<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: {
    RouterLink
  }
}
</script>

<template>
    <nav>
        <div class="logo">
            <svg width="220" height="50" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g transform="translate(10,10)">
                <circle cx="20" cy="20" r="12" stroke="#2D9CDB" stroke-width="4"/>
                <path d="M20 8 V0 M20 32 V40 M32 20 H40 M8 20 H0" stroke="#2D9CDB" stroke-width="2"/>
            </g>
            <text x="60" y="38" font-family="Poppins, sans-serif" font-size="26" fill="#222" font-weight="600">
                Easy<tspan fill="#2D9CDB">Control</tspan>
            </text>
            </svg>
        </div>

        <div class="lista">
            <ul class="nav-ul">
                <li class="nav-li"><RouterLink class="ancora-nav" to="/">Home</RouterLink></li>
                <li class="nav-li"><RouterLink class="ancora-nav" to="/customer">Clientes</RouterLink></li>
                <li class="nav-li"><RouterLink class="ancora-nav" to="/maintenance">Manutenções</RouterLink></li>
                <li class="nav-li"><RouterLink class="ancora-nav" to="/employee">Funcionarios</RouterLink></li>
                <li class="nav-li"><RouterLink class="ancora-nav" to="/login">Entrar</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    nav{
        padding: 25px;
        background-color: #f5f5f5;
        color: #333333;
        display: flex;
        justify-content: space-between;
    }
 
    .lista{
        display: flex;
    }

    .nav-ul {
    list-style: none;
    padding: 0 40px;
    gap: 20px;
    display: flex;
    margin: 0;
    }

    .nav-li {
        align-items: center;
        text-align: center;
        padding: 10px;
        margin-bottom: 5px;
        border: 1px solid #333333;
        border-radius: 5px;
        cursor: pointer;
    }

    li:hover{
    background-color: #666666;
    color: #F8FAFC;
    }
    
    .ancora-nav
    {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: #333333;
    }
    .ancora-nav:hover{
        color: #F8FAFC;
    }

</style>