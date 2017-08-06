<template>
<div class="div_view">
  <mu-paper :zDepth="2" class="book_header">
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="Top250" icon="phone" title="Top250" />
    <mu-tab value="ComingSoon" icon="person_pin" title="口碑榜" />
  </mu-tabs>
  </mu-paper>

  <mu-list style="padding: 0">
    <mu-list-item v-for="movie in movies">
      <router-link :to="{name:'MovieDetails'}">
        <div >
          <img v-bind:src='movie.images.large'
               align="left" style="width:180px;height:270px;margin-left: 25px;margin-top: 10px;margin-bottom: 30px" >
          <p align="left" style="margin-left: 280px;padding-top: 5px;font-size:25px">{{movie.title}}</p>
          <div style="display: flex">
            <p style="font-size: 20px;float: left;margin-left: 70px;text-align: center;margin-top: -10px">导演:{{ movie.directors[0].name }}</p>
            <p style="text-align: center;font-size: 20px;margin-top: -10px;margin-left: 10px">评分:{{ movie.rating.average }}</p>
            <p style="text-align: center;font-size: 20px;margin-top: -10px;margin-left: 10px">星级:{{ movie.rating.stars/10 }}</p>
          </div>
          <p style="font-size: 20px;text-align: left;margin-left: 275px;margin-top: -10px">类型:{{ movie.genres }}</p>
          <p style="font-size: 20px;text-align: left;margin-left: 275px">主演如下:</p>
          <div style="display: flex;margin-left: 250px">
            <div style="display: flex;flex-wrap: wrap;margin-left: 15px;margin-right: 15px" v-for="cast in movie.casts">
              <mu-avatar slot="left" v-bind:src='cast.avatars.large'/>
              <p style="margin-left: 8px;font-size: 15px;text-align: center">{{ cast.name }}</p>
            </div>
          </div>
          <mu-divider inset/>
        </div>
      </router-link>
    </mu-list-item>
  </mu-list>
</div>
</template>
<script>
  export default {
    data(){
       return{
         activeTab:'Top250',
         movies:null
       }
    },
    mounted(){
      this.handleTabChange('Top250');
    },
    methods:{
      handleTabChange(val) {
        this.activeTab=val;
        const HOST = '/api/';
        const self=this;
        var url=null;
        var state=0;
        if(val==null){
          state=0;
          if(this.$store.state.top250!=null){
            this.movies=this.$store.state.top250;
          }else{
            url='/movie/top250';
          }
        }else if(val=='Top250'){
          state=0;
          if(this.$store.state.top250!=null){
            this.movies=this.$store.state.top250;
          }else{
            url='/movie/top250';
          }
        }else if(val=='ComingSoon'){
          state=1;
          if(this.$store.state.weekly!=null){
            this.movies=this.$store.state.comingsoon;
          }else{
            url='/movie/coming_soon';
          }
        }
        if(url!=null){
          this.axios.get(HOST+url)
            .then(function (res) {
              if(res.status==200){
                self.movies = [];
                self.movies=res.data.subjects;
                if(state==0){
                  self.$store.dispatch("changeTop",res.data.subjects);
                }else if(state==1){
                  self.$store.dispatch("comingSoon",res.data.subjects);
                }
              }
            })
        }

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
