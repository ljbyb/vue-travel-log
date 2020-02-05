<template>
  <v-layout align-center>
    <v-flex xs4>
      <v-divider class="left-divider-position"></v-divider>
    </v-flex>
    <v-flex xs4>
      <div class="text-xs-center grey--text caption font-weight-light">已经到底啦！</div>
    </v-flex>
    <v-flex xs4>
      <v-divider class="right-divider-position"></v-divider>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BottomLine'
}
</script>

<style scoped>
.right-divider-position {
  margin: 20px 60px 20px 0px;
}
.left-divider-position {
  margin: 20px 0px 20px 60px;
}
</style>
