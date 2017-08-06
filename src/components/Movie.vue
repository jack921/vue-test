<template>
  <div >
    <mu-row class="mu_row">
      <mu-col width="30" desktop="20" table="25" v-for="movie in movies"  >
        <router-link :to="{name:'MovieDetails'}">
        <mu-card class="card">
          <img class="card_img" v-bind:src='movie.images.large'>
          <div class="card_txt">
            <p style="float: left;margin-left: 10px">{{ movie.title }}</p>
            <p style="color:#ff9955;float: left;margin-left: 10px"><span>评分:{{ movie.rating.average }}</span></p>
            <p style="float: right;margin-right: 15px">类型:{{ movie.genres[0]}}</p>
          </div>
        </mu-card>
        </router-link>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
export default {
  name: 'movie',
  data(){
    return {
      movies:null
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const HOST = '/api/';
      const self=this;
      this.movies=this.$store.state.movie;
      if(this.movies==null){
        this.axios.get(HOST+'/movie/in_theaters')
          .then(function (res) {
            if(res.status==200){
              self.movies = [];
              self.movies=res.data.subjects;
              self.$store.dispatch("movie",res.data.subjects);
            }
          })
      }
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
    height: 500px;
    margin: 8px;
  }
  .card_img{
    width: 100%;
    height:450px;
  }
  .card_txt{
    width: 100%;
    height: 50px;
  }
</style>
