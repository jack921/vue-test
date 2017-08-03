<template>
  <mu-appbar title="DouBan">
    <mu-icon-button icon="menu" slot="left"  @click="toggle"/>
    <mu-flat-button label="更多" slot="right"/>
    <mu-drawer :open="state" :docked="true" @close="toggle()">
      <mu-list @itemClick="true ? '' : toggle()">
        <mu-list-item title="电影" @click.native="itemToggle('电影')"/>
        <mu-list-item title="书籍" @click.native="itemToggle('书籍')"/>
        <mu-list-item title="音乐" @click.native="itemToggle('音乐')"/>
      </mu-list>
    </mu-drawer>
  </mu-appbar>
</template>

<script>
  export default {
     data(){
       return{
         state:false
       }
     },
     methods:{
       toggle: function () {
          this.state=!this.open
       },
       itemToggle: function (data) {
          console.log(data)
          this.state=false
       }
     }
  }
</script>
