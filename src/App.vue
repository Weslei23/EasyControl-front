<script >
  import NavBar from './components/NavBar.vue';
  // import EmployeeComponent from './components/EmployeeComponent.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components:{
      // EmployeeComponent,
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