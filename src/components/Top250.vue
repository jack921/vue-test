<template>

  <div>
    <p>Top250</p>
    <p>{{ this.$store.state.top250 }}</p>
    <button @click="top">top250</button>
  </div>

</template>
<script>
  export default {
    data(){
        return {
        }
    },
    methods:{
       top: function () {
         this.$store.dispatch("changeTop","HelloJack");
       }
    }
  }
</script>
