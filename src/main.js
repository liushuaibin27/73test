import Vue from 'vue'
import App from './App.vue'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";

//导入vue-router

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
