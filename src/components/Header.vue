<template>
  <mu-appbar title="DouBan">
    <mu-icon-button icon="menu" slot="left"/>
    <mu-flat-button label="更多" slot="right"/>
    <mu-drawer :open="state" :docked="false" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
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
          console.log("jack")
          this.state=!this.open
       }
     }
  }
</script>
