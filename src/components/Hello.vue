<template>
  <div class="hello">
    <h1 v-on:click="tabvalue">{{ msg }}</h1>
    <h2>{{ this.$store.state.tabValue }}</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    tabvalue: function () {
        console.log("test")
        this.$store.dispatch("changeTabValue","HelloJack");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
