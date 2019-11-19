<template>
  <!-- 地图展示 -->
  <div style="height:100%;width:100%;text-align:left;">
    <div ref="basicMapbox" style="height:500px;width:100%;"></div>
    <pre id="info"></pre>
    <pre id="coordinates" class="coordinates"></pre>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'

export default {
  name: 'mymap',
  data () {
    return {
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
      // // 英文标注转换为中文
      // mapboxgl.setRTLTextPlugin(
      //   'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
      // )
      var coordinates = document.getElementById('coordinates')
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: 'mapbox://styles/mapbox/streets-v10',
        // center: [108.936052, 34.270348], // 设置地图中心为西安市的经纬度
        center: [-122.486052, 37.830348],
        zoom: 12 // 设置地图比例
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

      // 在地图上展示一条线路
      map.on('load', function () {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: [
                  [-122.48369693756104, 37.83381888486939],
                  [-122.48348236083984, 37.83317489144141],
                  [-122.48339653015138, 37.83270036637107],
                  [-122.48356819152832, 37.832056363179625],
                  [-122.48404026031496, 37.83114119107971],
                  [-122.48404026031496, 37.83049717427869],
                  [-122.48348236083984, 37.829920943955045],
                  [-122.48356819152832, 37.82954808664175],
                  [-122.48507022857666, 37.82944639795659],
                  [-122.48610019683838, 37.82880236636284],
                  [-122.48695850372314, 37.82931081282506],
                  [-122.48700141906738, 37.83080223556934],
                  [-122.48751640319824, 37.83168351665737],
                  [-122.48803138732912, 37.832158048267786],
                  [-122.48888969421387, 37.83297152392784],
                  [-122.48987674713133, 37.83263257682617],
                  [-122.49043464660643, 37.832937629287755],
                  [-122.49125003814696, 37.832429207817725],
                  [-122.49163627624512, 37.832564787218985],
                  [-122.49223709106445, 37.83337825839438],
                  [-122.49378204345702, 37.83368330777276]
                ]
              }
            }
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': 'blue',
            'line-width': 4
          }
        })
      })
    }
  },

  computed: {}
}
</script>
<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css');
/* .coordinates {
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
} */
.mapboxgl-map {
  height: 100%;
  width: 100%;
}
</style>
