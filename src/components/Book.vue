<template>
<div class="div_view">
  <mu-paper :zDepth="2" class="book_header">
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="Top250" icon="phone" title="Top250" />
    <mu-tab value="USMovie" icon="favorite" title="北美票房榜" />
    <mu-tab value="Weekly" icon="person_pin" title="口碑榜" />
  </mu-tabs>
  </mu-paper>
  <router-view class="book_view"></router-view>
</div>
</template>
<script>
  export default {
    data(){
       return{
         activeTab:'Top250'
       }
    },
    mounted(){
      this.$router.push({ name : 'Top250' })
    },
    methods:{
      handleTabChange(val) {
        console.log(val)
        this.activeTab=val;
        this.$router.push({ name : val })
      },
      fetchData(val){
      }
    }
  }
</script>

<style>
  .div_view {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .book_header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:2;
  }
  .book_view{
      width: 100%;
      margin-top: 80px;
  }
</style>
