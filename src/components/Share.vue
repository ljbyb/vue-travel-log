<template>
  <!--分享内容-->
  <v-bottom-sheet v-model="visibility">
    <v-list>
      <v-subheader>分享到...</v-subheader>
      <v-list-item v-for="item in shareItems" :key="item.title" @click="visibility = false">
        <v-list-item-avatar>
          <v-avatar size="24px" tile>
            <img :src="item.img" :alt="item.title" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-bottom-sheet>
</template>

<script>
export default {
  props: ['filter'],
  data () {
    return {
      sheet: false,
      visibility: this.filter,
      shareItems: [
        { img: require('../assets/img/share/qq.png'), title: 'QQ' },
        { img: require('../assets/img/share/Wechat.png'), title: '微信' },
        { img: require('../assets/img/share/sina.png'), title: '微博' }
      ]
    }
  }
}
</script>
