<template>

 <div>
   <p>Music</p>
   <button v-on:click="test">{{ this.$store.state.tabValue }}</button>
 </div>

</template>
<script>
  export default {
    methods:{
      test: function () {
        this.$store.dispatch("changeValue", '谢汉杰');
      }
    }
  }
</script>
