<script >
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components:{
      NavBar,
      Footer
    }
  }
</script>

<template>
  <div id="app">
    <NavBar/>
        <div class="container mt-4">
      <router-view />
    </div>
    <Footer/>


  </div>
</template>

<style>

</style>