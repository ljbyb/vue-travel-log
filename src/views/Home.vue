<template>
  <v-card class="overflow-hidden" flat>
    <!-- 添加工具栏的提示图片，其中漂亮图片id：223、392 -->
    <v-app-bar
      color="primary"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/id/392/1920/1080"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <!-- 添加色彩遮罩，暂时不使用 -->
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
        <v-badge
          color="red"
          :value="this.$store.state.messages"
          :content="this.$store.state.messages"
        >
          <!-- <template v-slot:badge>9+</template> -->
          <v-icon>mdi-email</v-icon>
        </v-badge>
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
        <!-- 模拟展示卡片 -->
        <v-card class="mx-auto" max-width="344">
          <v-list-item>
            <v-list-item-avatar color="grey">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/5.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
              <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img> -->
          <v-container fluid>
            <v-row>
              <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
                <v-card flat>
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>
          <v-card-actions>
            <v-btn text dark small color="pink" @click="hearts = hearts + 1">
              <v-icon dark>mdi-heart</v-icon>
              {{hearts}}
            </v-btn>
            <!-- <v-btn text icon color="red" @click="hearts = hearts + 1">
              <v-icon>mdi-heart</v-icon>
              <div>{{hearts}}</div>
            </v-btn>-->
            <v-btn text dark small color="green" @click="showshare = !showshare">
              <v-icon dark>mdi-share-variant</v-icon>564
            </v-btn>
            <!-- <v-btn text @click="showshare = !showshare">
              <v-icon color="blue">mdi-share-variant</v-icon>
              <span>564</span>
            </v-btn>-->
            <v-spacer></v-spacer>
            <v-btn text color="deep-purple accent-4" @click="showmap=!showmap">更多...</v-btn>
          </v-card-actions>
        </v-card>

        <!-- 显示分享菜单 -->
        <Share v-if="showshare" filter="showshare"></Share>

        <!-- 地图展示 -->
        <v-card v-if="showmap">
          <MyMap></MyMap>
        </v-card>

        <!-- 添加Loading进度条 -->
        <!-- <v-row class="fill-height" align-content="center" justify="center">
          <v-col class="subtitle-1 text-center" cols="12">Loading image...</v-col>
          <v-col cols="6">
            <v-progress-linear color="deep-purple accent-4" rounded height="6" striped value="10"></v-progress-linear>
          </v-col>
        </v-row>-->

        <!-- 展示返回顶部按钮 -->
        <!-- <div style="text-align:center">
          <v-btn :style="totopStyle" absolute dark fixed style="bottom:10px;" fab>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </div>-->

        <BottomLine></BottomLine>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import BottomLine from '@/components/BottomLine.vue'
import MyMap from '@/components/MyMap.vue'
import Share from '@/components/Share.vue'

export default {
  name: 'home',
  components: {
    BottomLine,
    MyMap,
    Share
  },

  data () {
    return {
      hearts: 0,
      messages: 99,
      showmap: false,
      showshare: false,
      show: false,
      totopStyle: { background: 'rgba(0,0,0, 0.3)' }
    }
  },

  methods: {
    goToMessageBox () {
      this.$router.push('/messagebox')
    },
    goToUser () {
      this.$router.push('/user')
    },
    showTravelMap () {
      this.showmap = !this.showmap
      console.log('this.showmap:', this.showmap)
    }
  },

  computed: {}
}
</script>
<style>
</style>
