(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3907b1b7","chunk-2d0ab43a":"458affab","chunk-2d21f0e8":"6894afff","chunk-f1c8325c":"f1b292c1"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2415:function(t,e,n){"use strict";var a=n("899c"),r=n.n(a);e["default"]=r.a},"2ce3":function(t,e,n){t.exports=n.p+"img/Wechat.3c49aa0b.png"},3737:function(t,e,n){"use strict";var a=n("f35e"),r=n.n(a);r.a},"4dc4":function(t,e,n){"use strict";var a=n("780d"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("transition",{attrs:{name:"fade"}},[n("Splash",{directives:[{name:"show",rawName:"v-show",value:t.splashshow,expression:"splashshow"}]})],1),n("router-view")],1)],1)},o=[],i=n("f6a7"),s={name:"App",components:{Splash:i["default"]},data:function(){return{fade:!0,timer:"",splashshow:!0}},methods:{get:function(){this.splashshow=!1}},mounted:function(){this.timer=setInterval(this.get,1e3)},beforeDestroy:function(){clearInterval(this.timer)}},c=s,l=n("2877"),u=n("6544"),d=n.n(u),f=n("7496"),p=n("a75b"),h=Object(l["a"])(c,r,o,!1,null,null,null),v=h.exports;d()(h,{VApp:f["a"],VContent:p["a"]});var m=n("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var g=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"overflow-hidden",attrs:{flat:""}},[n("v-app-bar",{attrs:{color:"primary",dark:"","shrink-on-scroll":"",prominent:"",src:"https://picsum.photos/id/392/1920/1080","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3"},scopedSlots:t._u([{key:"img",fn:function(e){var a=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(100,115,201,0), rgba(25,32,72,0)"}},"v-img",a,!1))]}},{key:"extension",fn:function(){return[n("v-tabs",{attrs:{"align-with-title":"","background-color":"transparent",grow:""}},[n("v-tab",[t._v("旅行")]),n("v-tab",[t._v("生活")]),n("v-tab",[t._v("日记")])],1)]},proxy:!0}])},[n("v-avatar",[n("v-icon",{on:{click:t.goToUser}},[t._v("mdi-account-circle")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.goToMessageBox}},[n("v-badge",{attrs:{color:"red",value:this.$store.state.messages,content:this.$store.state.messages}},[n("v-icon",[t._v("mdi-email")])],1)],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-3","max-height":"600"}},[n("v-container",{staticStyle:{height:"1000px"}},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-list-item",[n("v-list-item-avatar",{attrs:{color:"grey"}},[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/lists/5.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"headline"},[t._v("Our Changing Planet")]),n("v-list-item-subtitle",[t._v("by Kurt Wagner")])],1)],1),n("v-container",{attrs:{fluid:""}},[n("v-row",t._l(6,(function(e){return n("v-col",{key:e,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[n("v-card",{attrs:{flat:""}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/500/300?image="+(5*e+10),"lazy-src":"https://picsum.photos/10/6?image="+(5*e+10),"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1),n("v-card-text",[t._v("Visit ten places on our planet that are undergoing the biggest changes today.")]),n("v-card-actions",[n("v-btn",{attrs:{text:"",dark:"",small:"",color:"pink"},on:{click:function(e){t.hearts=t.hearts+1}}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-heart")]),t._v(" "+t._s(t.hearts)+" ")],1),n("v-btn",{attrs:{text:"",dark:"",small:"",color:"green"},on:{click:function(e){t.showshare=!t.showshare}}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-share-variant")]),t._v("564 ")],1),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(e){t.showmap=!t.showmap}}},[t._v("更多...")])],1)],1),t.showshare?n("Share",{attrs:{filter:"showshare"}}):t._e(),t.showmap?n("v-card",[n("MyMap")],1):t._e(),n("BottomLine")],1)],1)],1)},y=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{attrs:{xs4:""}},[n("v-divider",{staticClass:"left-divider-position"})],1),n("v-flex",{attrs:{xs4:""}},[n("div",{staticClass:"text-xs-center grey--text caption font-weight-light"},[t._v("已经到底啦！")])]),n("v-flex",{attrs:{xs4:""}},[n("v-divider",{staticClass:"right-divider-position"})],1)],1)},x=[],_={name:"BottomLine"},k=_,V=(n("b1fc"),n("ce7e")),L=n("0e8f"),C=n("a722"),S=Object(l["a"])(k,w,x,!1,null,"00ab7178",null),j=S.exports;d()(S,{VDivider:V["a"],VFlex:L["a"],VLayout:C["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%","text-align":"left"}},[n("div",{ref:"basicMapbox",staticStyle:{height:"500px",width:"100%"}}),n("pre",{attrs:{id:"info"}}),n("pre",{staticClass:"coordinates",attrs:{id:"coordinates"}})])},T=[],M=n("e192"),O=n.n(M),A=n("5a74"),F=n.n(A),B={name:"mymap",data:function(){return{}},mounted:function(){this.init()},methods:{goToMessageBox:function(){this.$router.push("/messagebox")},goToUser:function(){this.$router.push("/user")},init:function(){O.a.accessToken="pk.eyJ1IjoibWFvcmV5IiwiYSI6ImNqNWhrenIwcDFvbXUyd3I2bTJxYzZ4em8ifQ.KHZIehQuWW9AsMaGtATdwA";var t=document.getElementById("coordinates"),e=new O.a.Map({container:this.$refs.basicMapbox,style:"mapbox://styles/mapbox/streets-v10",center:[-122.486052,37.830348],zoom:12}),n=new F.a({defaultLanguage:"zh"});e.addControl(n);var a=new O.a.NavigationControl;e.addControl(a,"top-left"),e.addControl(new O.a.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserLocation:!0,zoom:14}));var r=new O.a.Marker({draggable:!0});function o(){var e=r.getLngLat();t.style.display="block",t.innerHTML="Longitude: "+e.lng+"<br />Latitude: "+e.lat}r.on("dragend",o),e.on("click",(function(t){document.getElementById("info").innerHTML=JSON.stringify(t.point)+"<br />"+JSON.stringify(t.lngLat),r.setLngLat([t.lngLat.lng,t.lngLat.lat]).addTo(e)})),e.on("load",(function(){e.addLayer({id:"route",type:"line",source:{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-122.48369693756104,37.83381888486939],[-122.48348236083984,37.83317489144141],[-122.48339653015138,37.83270036637107],[-122.48356819152832,37.832056363179625],[-122.48404026031496,37.83114119107971],[-122.48404026031496,37.83049717427869],[-122.48348236083984,37.829920943955045],[-122.48356819152832,37.82954808664175],[-122.48507022857666,37.82944639795659],[-122.48610019683838,37.82880236636284],[-122.48695850372314,37.82931081282506],[-122.48700141906738,37.83080223556934],[-122.48751640319824,37.83168351665737],[-122.48803138732912,37.832158048267786],[-122.48888969421387,37.83297152392784],[-122.48987674713133,37.83263257682617],[-122.49043464660643,37.832937629287755],[-122.49125003814696,37.832429207817725],[-122.49163627624512,37.832564787218985],[-122.49223709106445,37.83337825839438],[-122.49378204345702,37.83368330777276]]}}},layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"blue","line-width":4}})}))}},computed:{}},$=B,P=(n("3737"),Object(l["a"])($,I,T,!1,null,null,null)),E=P.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-bottom-sheet",{model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[n("v-list",[n("v-subheader",[t._v("分享到...")]),t._l(t.shareItems,(function(e){return n("v-list-item",{key:e.title,on:{click:function(e){t.visibility=!1}}},[n("v-list-item-avatar",[n("v-avatar",{attrs:{size:"24px",tile:""}},[n("img",{attrs:{src:e.img,alt:e.title}})])],1),n("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1)},z=[],q=(n("4de4"),{props:["filter"],data:function(){return{sheet:!1,visibility:this.filter,shareItems:[{img:n("ccaf"),title:"QQ"},{img:n("2ce3"),title:"微信"},{img:n("942a"),title:"微博"}]}}}),H=q,J=n("8212"),U=n("288c"),W=n("8860"),Q=n("da13"),D=n("8270"),G=n("5d23"),K=n("e0c7"),Y=Object(l["a"])(H,N,z,!1,null,null,null),Z=Y.exports;d()(Y,{VAvatar:J["a"],VBottomSheet:U["a"],VList:W["a"],VListItem:Q["a"],VListItemAvatar:D["a"],VListItemTitle:G["d"],VSubheader:K["a"]});var R={name:"home",components:{BottomLine:j,MyMap:E,Share:Z},data:function(){return{hearts:0,messages:99,showmap:!1,showshare:!1,show:!1,totopStyle:{background:"rgba(0,0,0, 0.3)"}}},methods:{goToMessageBox:function(){this.$router.push("/messagebox")},goToUser:function(){this.$router.push("/user")},showTravelMap:function(){this.showmap=!this.showmap,console.log("this.showmap:",this.showmap)}},computed:{}},X=R,tt=n("40dc"),et=n("4ca6"),nt=n("8336"),at=n("b0af"),rt=n("99d9"),ot=n("62ad"),it=n("a523"),st=n("132d"),ct=n("adda"),lt=n("490a"),ut=n("0fd9"),dt=n("8dd9"),ft=n("2fa4"),pt=n("71a3"),ht=n("fe57"),vt=Object(l["a"])(X,b,y,!1,null,null,null),mt=vt.exports;d()(vt,{VAppBar:tt["a"],VAvatar:J["a"],VBadge:et["a"],VBtn:nt["a"],VCard:at["a"],VCardActions:rt["a"],VCardText:rt["b"],VCol:ot["a"],VContainer:it["a"],VIcon:st["a"],VImg:ct["a"],VListItem:Q["a"],VListItemAvatar:D["a"],VListItemContent:G["b"],VListItemSubtitle:G["c"],VListItemTitle:G["d"],VProgressCircular:lt["a"],VRow:ut["a"],VSheet:dt["a"],VSpacer:ft["a"],VTab:pt["a"],VTabs:ht["a"]}),a["a"].use(g["a"]);var gt=[{path:"/",name:"home",component:mt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/messagebox",name:"messageBox",component:function(){return n.e("chunk-f1c8325c").then(n.bind(null,"0cbd"))}},{path:"/user",name:"user",component:function(){return n.e("chunk-2d0ab43a").then(n.bind(null,"1511"))},children:[{path:"creditcard",name:"creditcard",component:function(){return n.e("chunk-2d21f0e8").then(n.bind(null,"d7cb"))}}]}],bt=new g["a"]({routes:gt}),yt=bt,wt=n("2f62");a["a"].use(wt["a"]);var xt=new wt["a"].Store({state:{messages:12},mutations:{updateMessages:function(t,e){t.messages=e}},actions:{updateMessages:function(t,e){var n=t.commit;n("updateMessages",e)}},modules:{}}),_t=n("f309"),kt=n("5025"),Vt=n.n(kt);a["a"].use(_t["a"]);var Lt=new _t["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#FF7043",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{zhHans:Vt.a},current:"zh-Hans"},icons:{iconfont:"mdi"}});n("d5e8"),n("5363");a["a"].config.productionTip=!1,new a["a"]({router:yt,store:xt,vuetify:Lt,render:function(t){return t(v)}}).$mount("#app")},7434:function(t,e,n){t.exports=n.p+"img/APP-splash.376ce8d9.png"},"780d":function(t,e,n){},"899c":function(t,e){},"942a":function(t,e,n){t.exports=n.p+"img/sina.f763a211.png"},a42f:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"splash"}},[a("img",{attrs:{src:n("7434")}})])}];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},b1fc:function(t,e,n){"use strict";var a=n("d252"),r=n.n(a);r.a},ccaf:function(t,e,n){t.exports=n.p+"img/qq.ea4bb73b.png"},d252:function(t,e,n){},f35e:function(t,e,n){},f6a7:function(t,e,n){"use strict";var a=n("a42f"),r=n("2415"),o=(n("4dc4"),n("2877")),i=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}});
//# sourceMappingURL=app.a868db36.js.map