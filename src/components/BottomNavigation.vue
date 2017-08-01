<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="movie" title="电影" icon="movie" to="/"/>
      <mu-bottom-nav-item value="book" title="书籍" icon="book" to="/book"/>
      <mu-bottom-nav-item value="music" title="音乐" icon="location_on" to="/music"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
    export default {
        data(){
            return {
              bottomNav: 'movie'
          }
        },
        methods:{
            handleChange(val){
                this.bottomNav=val;
            }
        }
    }
</script>
