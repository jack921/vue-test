<template>
    <div style="position:relative">

      <div :style="'background-image: url('+'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.webp'+');width: 100%;height: 500px;margin-top=-15px'">
         <mu-icon-button style="float: left;margin-top: 20px;margin-right: 20px;margin-left: 15px" icon='arrow_back' slot="left" @click='goBack()' />

         <p style="font-size: 35px;margin-left: 70px;color: cyan;position:absolute;margin-top: 430px">Hello Jack</p>
      </div>

       <div style="margin-top: 0px">
            <div style="width:60%;float: left">
                <div style="display: flex">
                  <p style="margin-left: 30px;font-size: 20px">pingfen</p>
                  <p style="margin-left: 20px;font-size: 20px">217254pingjia</p>
                </div>
              <mu-card style="text-align: left;font-size: 24px;margin-left: 20px;margin-right: 20px;margin-bottom: 20px;margin-top: -3px">
                <p style="padding: 10px">
                  机器人9号（伊利亚•伍德 Elijah Wood 饰）突然醒来，发现身边的世界充满危机，四处残败，
                  一片末世景象。9号带着一个画有三个奇怪符号的圆形物体逃到街上，幸遇发明家机器人2号（马丁•兰道 Martin Landau 饰）
                  给自己装上了声音，但2号却不幸被机器怪兽抓走。9号找到了老兵1号（克里斯托弗•普卢默 Christopher Plummer 饰）、
                  机械工5号（约翰•雷利 John C. Reilly 饰）、疯癫画家6号（克里斯品•格拉夫 Crispin Glover 饰）和大力士8号（弗雷德•塔塔绍尔 Fred Tatasciore 饰）。
                  9号与5号擅自出行援救2号，危急时被女武士7号（詹妮佛•康纳利 Jennifer Connelly 饰）救下，但无意中9号却令终极机器兽复活。
                  带着自己从哪里来以及生存使命的问题，9号决定想尽办法制服机器兽，拯救全世界……©豆瓣

                </p>
              </mu-card>
            </div>
            <div style="width: 40%;float: left;margin-top: -70px">
                  <img src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.webp" style="width: 340px;height:500px"/>
            </div>
        </div>

        <p style="font-size: 20px;text-align: left;margin-top: 80px;margin-left: 30px">HelloJackjianjie</p>

      <mu-card style="text-align: left;font-size: 20px;margin-left: 20px;margin-right: 20px;margin-bottom: 20px;margin-top: -3px">
        <p style="padding: 10px;margin-bottom: 30px">
          机器人9号（伊利亚•伍德 Elijah Wood 饰）突然醒来，发现身边的世界充满危机，四处残败，
          一片末世景象。9号带着一个画有三个奇怪符号的圆形物体逃到街上，幸遇发明家机器人2号（马丁•兰道 Martin Landau 饰）
          给自己装上了声音，但2号却不幸被机器怪兽抓走。9号找到了老兵1号（克里斯托弗•普卢默 Christopher Plummer 饰）、
          机械工5号（约翰•雷利 John C. Reilly 饰）、疯癫画家6号（克里斯品•格拉夫 Crispin Glover 饰）和大力士8号（弗雷德•塔塔绍尔 Fred Tatasciore 饰）。
          9号与5号擅自出行援救2号，危急时被女武士7号（詹妮佛•康纳利 Jennifer Connelly 饰）救下，但无意中9号却令终极机器兽复活。
          带着自己从哪里来以及生存使命的问题，9号决定想尽办法制服机器兽，拯救全世界……©豆瓣
        </p>
      </mu-card>

      <div>
        <mu-card style="width: 500px;margin-left: 25px;display: flex">
          <img style="width: 349px" src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.webp">
          <div style="float:left">
            <p style="font-size: 25px">导演</p>
            <p style="font-size: 18px;margin-left: 17px;margin-top: -20px">HelloJack</p>
          </div>
        </mu-card>
      </div>

      <p style="font-size: 18px;display: flex;margin-left: 25px;margin-top: 30px;margin-bottom: -10px">演员</p>

      <mu-row class="mu_row">
        <mu-col width="30" desktop="20" table="25" v-for="movie in movies"  >
          <router-link :to="{name:'MovieDetails'}">
            <mu-card class="card">
              <img class="card_img" src="https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p494268647.webp">
              <div class="card_txt">
                <p style="float: left;margin-left: 10px">{{ movie.name }}</p>
              </div>
            </mu-card>
          </router-link>
        </mu-col>
      </mu-row>

    </div>
</template>
<script>
  export default {
    data(){
      return{
        movies:[
          {name:'jack1'},
          {name:'jack2'},
          {name:'jack3'}
        ]
      }
    },
    methods:{
      goBack() {
        this.$router.go(-1);
      }
    }
  }

</script>

<style>
  .icon-back{
    text-shadow: 0px 0px 3px #ddd;
    margin-top: 100px;
  }
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
