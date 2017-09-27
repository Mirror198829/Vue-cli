<template>
   <div>{{centerName}}应用信息页面</div>

</template>

<script>
export default {
  data() {
    return {
      centerName:''
    };
  },
  created(){
  	this.getRouteParams()
  }, 
  methods: {
    getRouteParams(){
    	this.centerName=this.$route.params.centerName;
    }
  }
}
</script>

<style scoped>

</style>
