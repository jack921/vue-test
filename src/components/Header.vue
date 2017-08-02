<template>
  <mu-appbar title="DouBan">
    <mu-icon-button icon="menu" slot="left"  @click="toggle"/>
    <mu-flat-button label="更多" slot="right"/>
    <mu-drawer :open="state" :docked="true" @close="toggle()">
      <mu-list @itemClick="true ? '' : toggle()">
        <mu-list-item title="Menu Item 1" @click.native="itemToggle('item')"/>
        <mu-list-item title="Menu Item 2" @click.native="itemToggle('item2')"/>
        <mu-list-item title="Menu Item 3" @click.native="itemToggle('item3')"/>
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
