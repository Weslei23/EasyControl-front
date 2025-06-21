<script>
import EmployeeComponent from '../components/EmployeeComponent.vue';
// import Footer from '../components/Footer.vue';

export default {
  name: 'EmployeeView',
  components: {
    EmployeeComponent
    // Footer
  }
}
</script>

<template>
  <div>
    <EmployeeComponent />
    <!-- <Footer /> -->
  </div>
</template>

<style scoped>
</style>
<!-- <script >
  import NavBar from './components/NavBar.vue';
  import EmployeeComponent from './components/EmployeeComponent.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'EmployeeView',
    components:{
      EmployeeComponent,
      NavBar,
      Footer
    }
  }
</script>

<template>
  <div id="app">
    <NavBar/>
    <EmployeeComponent/>
    <Footer/>
  </div>
</template>

<style>

</style> -->