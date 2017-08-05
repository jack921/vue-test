<template>
  <div>
      <mu-list style="padding: 0">
          <mu-list-item>
              <router-link :to="{name:'MovieDetails'}">
                <div >
                  <img src="https://img3.doubanio.com/view/movie_poster_cover/spst/public/p480747492.webp"
                       align="left" style="width:180px;height:270px;margin-left: 25px;margin-top: 10px;margin-bottom: 30px" >
                    <p align="left" style="margin-left: 280px;padding-top: 5px;font-size:25px">Hello Jack</p>
                    <div style="display: flex">
                      <p style="font-size: 20px;float: left;margin-left: 70px;text-align: center;margin-top: -10px">导演:</p>
                      <p style="text-align: center;font-size: 20px;margin-top: -10px;margin-left: 10px">评分</p>
                      <p style="text-align: center;font-size: 20px;margin-top: -10px;margin-left: 10px">星级</p>
                    </div>
                  <p style="font-size: 20px;text-align: left;margin-left: 275px;margin-top: -10px">类型</p>
                  <p style="font-size: 20px;text-align: left;margin-left: 275px">主演如下:</p>
                  <div style="display: flex;margin-left: 250px">
                    <div style="display: flex;margin-left: 15px;margin-right: 15px">
                      <mu-avatar slot="left" src="https://img3.doubanio.com/img/celebrity/small/17525.jpg" style="width: 40px;height:40px"/>
                      <p style="margin-left: 8px;font-size: 15px;text-align: center">蒂姆·罗宾斯</p>
                    </div>
                    <div style="display: flex;margin-left: 15px;margin-right: 15px">
                      <mu-avatar slot="left" src="https://img3.doubanio.com/img/celebrity/small/17525.jpg" style="width: 40px;height:40px"/>
                      <p style="margin-left: 8px;font-size: 15px;text-align: center">蒂姆·罗宾斯</p>
                    </div>
                    <div style="display: flex;margin-left: 15px;margin-right: 15px">
                      <mu-avatar slot="left" src="https://img3.doubanio.com/img/celebrity/small/17525.jpg" style="width: 40px;height:40px"/>
                      <p style="margin-left: 8px;font-size: 15px;text-align: center">蒂姆·罗宾斯</p>
                    </div>
                  </div>
                </div>
              </router-link>
          </mu-list-item>
      </mu-list>
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
