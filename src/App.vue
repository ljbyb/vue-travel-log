<template>
  <v-app>
    <!--    <TopBar></TopBar>-->
    <v-content>
      <router-view></router-view>
    </v-content>
<!--    <BottomBar></BottomBar>-->
  </v-app>
</template>

<script>
// import BottomBar from './components/BottomBar'

export default {
  name: 'App',
  components: {
    // BottomBar
  },
  data: () => ({
    //
  })
}
</script>
