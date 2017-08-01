<template>
  <div >
    <mu-row class="mu_row">
      <mu-col width="50" desktop="25" table="25" v-for="key in data">
        <mu-card class="card">
          <img class="card_img" v-on:click="fetchData" src="../assets/logo.png">
          <p class="card_txt">权利的游戏:{{key.name}}</p>
        </mu-card>
      </mu-col>
    </mu-row>
    <mu-toast v-if="toast" message="一段简单的文本" />
  </div>
</template>

<script>
export default {
  name: 'movie',
  data(){
    return {
      data:[
        {name:'jack1'},
        {name:'jack2'},
        {name:'jack3'},
        {name:'jack4'},
        {name:'jack5'},
        {name:'jack6'},
        {name:'jack7'}
      ],
      toast: false
    }
  },
  mounted() {
    this.fetchData();
  },
  beforeUpdate() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url='https://api.douban.com/v2/movie/in_theaters';
//    http://api.douban.com/v2
      const HOST = '/api/';

      this.axios.get(HOST+'/movie/in_theaters')
        .then(function (res) {
          console.log(res)
          if(res.status==200){
            console.log(res.data.data)
          }else{
            console.log("console")
         }
      })
      this.toast=true
    },
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="css" scoped>
  .mu_row{
    justify-content: flex-start;
    flex-flow: row wrap;
    padding: 15px;
  }
  .card{
    height: 300px;
    margin: 10px;
  }
  .card_img{
    width: 100%;
    height:250px;
  }
  .card_txt{
    width: 100%;
    height: 50px;
    text-align: center;
  }
</style>
