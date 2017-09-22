<template>
  <div id="app">
   <router-view style="min-height:670px"></router-view>
   <nl-footer></nl-footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: 'app',
  data() {
    return {
      
    };
  },
  methods: {

  },
  components: {
    'nl-footer':Footer
  },

}
</script>
<style>
body{margin:0;padding:0;}
*{margin:0;padding:0;}
a{color:#fff;text-decoration: none;}
</style>


