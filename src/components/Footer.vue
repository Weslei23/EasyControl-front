<script>

</script>

<template>
<footer class="footer">
    <div class=" container-global">
        <div class="logo-container">
            <svg width="220" height="50" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g transform="translate(10,10)">
                <circle cx="20" cy="20" r="12" stroke="#2D9CDB" stroke-width="4"/>
                <path d="M20 8 V0 M20 32 V40 M32 20 H40 M8 20 H0" stroke="#2D9CDB" stroke-width="2"/>
            </g>
        <text x="60" y="38" font-family="Poppins, sans-serif" font-size="26" fill="#222" font-weight="600">
            Easy<tspan fill="#2D9CDB">Control</tspan>
        </text>
        </svg>
        <p>Controle e manutenção com eficiência.</p>
    </div>
    <div class="links">
        <h4>Links úteis</h4>
        <a class="ancora-links" href="/sobre">Sobre</a>
        <a class="ancora-links" href="/contato">Contato</a>
        <a class="ancora-links" href="/privacidade">Privacidade</a>
    </div>
    <div>
        <h4>Contato</h4>
        <p>Email: contato@easycontrol.com</p>
        <p>Telefone: (11) 99999-9999</p>
    </div>
    <div class="social-midia">
        <h4>Siga-nos</h4>
        <a class="social-midia-links" href="#">Instagram</a>
        <a class="social-midia-links" href="#">LinkedIn</a>
    </div>
  </div>
  <p class="direitos">© 2025 EasyControl. Todos os direitos reservados.</p>
</footer>
</template>

<style>
    .footer{
        background: #f5f5f5;
        padding: 2rem;
    }

    .container-global{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .logo-container{
        margin-left: 20px;
    }
    .footer-ul{
        list-style: none;
        padding: 0px;
        display: inline;
        margin: 0px;
    }

    .links {
        margin-right: 30px;
        display: flex;
        flex-direction: column;
        color: #333333;
    }
    .ancora-links{
        cursor: pointer;
        text-decoration: none;
        color: #333333;
    }

    .ancora-links:hover{
        text-decoration: underline;
    }

    .social-midia{
        margin-right: 30px;
        display: flex;
        flex-direction: column;
        color: #333333;
    }
    .social-midia-links{
        cursor: pointer;
        text-decoration: none;
        color: #333333;
    }
    
    .social-midia-links:hover{
        text-decoration: underline;
    }

    .direitos{
        text-align: center;
        margin-top: 2rem;
        color: #333333;
    }
</style>