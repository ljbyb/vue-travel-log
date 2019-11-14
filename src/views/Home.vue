<template>
  <v-card class="overflow-hidden" flat>
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,0), rgba(25,32,72,0)"></v-img>
      </template>

      <v-avatar>
        <v-icon @click="goToUser">mdi-account-circle</v-icon>
      </v-avatar>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="goToMessageBox">
        <v-badge v-model="show" color="red">
          <template v-slot:badge>9+</template>
          <v-icon>mdi-email</v-icon>
        </v-badge>

        <v-spacer></v-spacer>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title background-color="transparent" grow>
          <v-tab>旅行</v-tab>
          <v-tab>生活</v-tab>
          <v-tab>日记</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1000px;">
        <!-- 地图展示 -->
        <MyMap></MyMap>

        <!-- 添加Loading进度条 -->
        <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="subtitle-1 text-center" cols="12">Loading image...</v-col>
          <v-col cols="6">
            <v-progress-linear color="deep-purple accent-4" rounded height="6" striped value="10"></v-progress-linear>
          </v-col>
        </v-row>

        <!-- 展示返回顶部按钮 -->
        <div style="text-align:center">
          <v-btn :style="totopStyle" absolute dark fixed style="bottom:10px;" fab>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </div>

        <BottomLine></BottomLine>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import BottomLine from '@/components/BottomLine.vue'
import MyMap from '@/components/MyMap.vue'

export default {
  name: 'home',
  components: {
    BottomLine,
    MyMap
  },

  data () {
    return {
      show: true,
      totopStyle: { background: 'rgba(0,0,0, 0.3)' }
    }
  },

  methods: {
    goToMessageBox () {
      this.$router.push('/messagebox')
    },
    goToUser () {
      this.$router.push('/user')
    }
  },

  computed: {}
}
</script>
<style>
</style>
