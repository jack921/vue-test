<template>

<div >
  <p>{{ msg }}</p>
  <button v-on:click="change">改变change值</button>
</div>


</template>
<script>
  export default {
    data(){
       return{
         msg:'Jack'
       }
    },
    methods:{
        change: function () {
          console.log("nihao")
          this.msg='Hello Jack'
        }
    }
  }
</script>
