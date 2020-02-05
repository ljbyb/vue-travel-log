<template>
  <v-app>
    <!--    <TopBar></TopBar>-->
    <v-content>
      <transition name="fade">
        <Splash v-show="splashshow"></Splash>
      </transition>
      <router-view></router-view>
    </v-content>
    <!--    <BottomBar></BottomBar>-->
  </v-app>
</template>

<script>
// import BottomBar from './components/BottomBar'
import Splash from './components/Splash'

export default {
  name: 'App',
  components: {
    // BottomBar
    Splash
  },
  data: () => ({
    fade: true,
    timer: '',
    splashshow: true
  }),
  methods: {
    get () {
      this.splashshow = false
    }
  },
  mounted () {
    this.timer = setInterval(this.get, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
