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

      <!--      <v-app-bar-nav-icon @click="goToUser">-->
      <!--        <v-icon>mdi-account-circle</v-icon>-->
      <!--      </v-app-bar-nav-icon>-->
      <v-avatar>
        <v-icon @click="goToUser">mdi-account-circle</v-icon>
      </v-avatar>

      <!--      <v-toolbar-title>Title</v-toolbar-title>-->

      <!--      <v-text-field-->
      <!--        hide-details-->
      <!--        prepend-inner-icon="mdi-magnify"-->
      <!--        single-line-->
      <!--      >-->
      <!--      </v-text-field>-->

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
        <div style="height:100%;width:100%;text-align:left;">
          <div ref="basicMapbox" style="height:100%;width:100%;"></div>
          <pre id="info"></pre>
          <pre id="coordinates" class="coordinates"></pre>
        </div>

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
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'

export default {
  name: 'home',
  components: {
    BottomLine
  },

  data () {
    return {
      show: true,
      totopStyle: { background: 'rgba(0,0,0, 0.3)' }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    goToMessageBox () {
      this.$router.push('/messagebox')
    },
    goToUser () {
      this.$router.push('/user')
    },

    // 初始化
    init () {
      mapboxgl.accessToken =
        'pk.eyJ1IjoibWFvcmV5IiwiYSI6ImNqNWhrenIwcDFvbXUyd3I2bTJxYzZ4em8ifQ.KHZIehQuWW9AsMaGtATdwA'
      // 英文标注转换为中文
      mapboxgl.setRTLTextPlugin(
        'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
      )
      var coordinates = document.getElementById('coordinates')
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [108.936052, 34.270348], // 设置地图中心为西安市的经纬度
        zoom: 8 // 设置地图比例
      })

      // 设置语言
      var language = new MapboxLanguage({ defaultLanguage: 'zh' })
      map.addControl(language)

      // 地图导航
      var nav = new mapboxgl.NavigationControl()
      map.addControl(nav, 'top-left')

      // 使用定位模块
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserLocation: true,
          zoom: 14
        })
      )

      // 建立一个标记点
      var marker = new mapboxgl.Marker({
        draggable: true
      })
      function onDragEnd () {
        var lngLat = marker.getLngLat()
        coordinates.style.display = 'block'
        coordinates.innerHTML =
          'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat
      }
      marker.on('dragend', onDragEnd)

      // 点击获取经纬度模块&点击标记点
      map.on('click', function (e) {
        document.getElementById('info').innerHTML =
          JSON.stringify(e.point) + '<br />' + JSON.stringify(e.lngLat)
        marker.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map)
      })

      //  搜索插件，暂时不需要
      // map.addControl(new MapboxGeocoder({
      //   accessToken: mapboxgl.accessToken,
      //   mapboxgl: mapboxgl
      // }))

      // map.on('load', function () {
      //   map.addLayer({
      //     id: 'route',
      //     type: 'line',
      //     source: {
      //       type: 'geojson',
      //       data: {
      //         type: 'Feature',
      //         properties: {},
      //         geometry: {
      //           type: 'LineString',
      //           coordinates: [
      //             [-122.48369693756104, 37.83381888486939],
      //             [-122.48348236083984, 37.83317489144141],
      //             [-122.48339653015138, 37.83270036637107],
      //             [-122.48356819152832, 37.832056363179625],
      //             [-122.48404026031496, 37.83114119107971],
      //             [-122.48404026031496, 37.83049717427869],
      //             [-122.48348236083984, 37.829920943955045],
      //             [-122.48356819152832, 37.82954808664175],
      //             [-122.48507022857666, 37.82944639795659],
      //             [-122.48610019683838, 37.82880236636284],
      //             [-122.48695850372314, 37.82931081282506],
      //             [-122.48700141906738, 37.83080223556934],
      //             [-122.48751640319824, 37.83168351665737],
      //             [-122.48803138732912, 37.832158048267786],
      //             [-122.48888969421387, 37.83297152392784],
      //             [-122.48987674713133, 37.83263257682617],
      //             [-122.49043464660643, 37.832937629287755],
      //             [-122.49125003814696, 37.832429207817725],
      //             [-122.49163627624512, 37.832564787218985],
      //             [-122.49223709106445, 37.83337825839438],
      //             [-122.49378204345702, 37.83368330777276]
      //           ]
      //         }
      //       }
      //     },
      //     layout: {
      //       'line-join': 'round',
      //       'line-cap': 'round'
      //     },
      //     paint: {
      //       'line-color': '#888',
      //       'line-width': 4
      //     }
      //   })
      // })
    }
  },

  computed: {}
}
</script>
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css');
.coordinates {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 5px 10px;
  margin: 0;
  font-size: 11px;
  line-height: 18px;
  border-radius: 3px;
  display: none;
}
.mapboxgl-map {
  height: 100%;
  width: 100%;
}
</style>
