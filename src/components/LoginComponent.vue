<script>
import { Modal } from 'bootstrap';
import LoginService from '../services/LoginService.js';
export default {}

</script>

<template>
    <div id="container-login">
        <h1>Entrar</h1>
        <form action="">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" placeholder="Digite seu e-mail" autocomplete="off">

            <label for="password">Senha</label>
            <input type="password" name="password" id="password" placeholder="Digite a sua senha">

            <a href="#" id="forgot-pass">Esqueceu a senha?</a>

            <input type="submit" value="Login">
        </form>
        <!-- <div id="container-social">
            <p>Ou entre pelas suas redes sociais</p>
            <i class="fa fa-facebook-f">f</i>
            <i class="fa fa-linkedin">in</i>
        </div> -->
        <!-- <div id="container-register">
            <p>Ainda não tem uma conta?</p>
            <a href="#">Registrar</a>
        </div> -->
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica;
        color: #323232;
        border: none;
    }

    textarea:focus, input:focus {
        outline: none;
    }

    a {
        font-size: .8rem;
    }

    a:hover {
        color: #08558B; /* HOVER -> efeito para quando passar o mouse em cima de links e botões mudarem para outra cor */
    }

    /* container login */

    #container-login {
        /* background-color: #b0b0b0; */
        width: 400px;
        margin-right: auto;
        margin-left: auto;
        padding: 20px 30px;
        margin-top: 10vh;
        border-radius: 10px;
        border: solid 2px;
        text-align: center;
        margin-bottom: 10vh;
    }

    /* formulario */

    form {
        margin-top: 30px;
        margin-bottom: 40px;
    }

    label, input{
        display: block;
        width: 100%;
        text-align: left;
    }

    label {
        font-weight: bold;
        font-size: .8rem;
    }

    input {
        border-bottom: 2px solid #323232;
        padding: 10px;
        font-size: 1rem;
        margin-bottom: 20px;
    }

    input:focus {
        border-bottom: 2px solid #08558B;
    }

    #forgot-pass {
        text-align: right;
        display: block;
    }

    input[type="submit"] {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        border:none;
        height: 40px;
        border-radius: 20px;
        margin-top: 30px;
        color: #fff;
        background-color: #08558B;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #1B223C;
        transition: .5s;
    }

    /* redes sociais */

    #container-social, #container-social p {
        margin-bottom: 20px;
    }

    #container-social i {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        line-height: 40px;
        color: #fff;
        margin: 0 5px;
        cursor: pointer;
    }

    .fa-facebook-f {
        background-color: #3B5998;
    }

    .fa-linkedin {
        background-color: #0077B5;
    }

    /* container registrar*/

    #container-register {
        margin-bottom: 10px;
    }
</style>