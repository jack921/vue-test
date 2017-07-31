<template>
  <div id="app">
    <AppBar class="header"></AppBar>
    <router-view class="content"></router-view>
    <BottomNavigation></BottomNavigation>
  </div>
</template>

<script>
import AppBar from './components/Header.vue'
import BottomNavigation from './components/BottomNavigation.vue'

export default {
  name: 'app',
  components: {
    AppBar,
    BottomNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index:2;
}
.content{
  margin-top: 60px;
}

</style>
