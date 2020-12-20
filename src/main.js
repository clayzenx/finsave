import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import './assets/theme/index.less';
import './registerServiceWorker'
import router from './router'
import store from './store'
import VuePageTransition from 'vue-page-transition'
import VueMq from 'vue-mq'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})

Vue.use(Antd);
Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyC_WhUUlPzYCusqR4fZzqylQSjvTmKx8WM",
      authDomain: "finsave-ed612.firebaseapp.com",
      databaseURL: "https://finsave-ed612-default-rtdb.firebaseio.com",
      projectId: "finsave-ed612",
      storageBucket: "finsave-ed612.appspot.com",
      messagingSenderId: "214897759784",
      appId: "1:214897759784:web:7e2ea9ade97e1a0ae4471d"
    };
    firebase.initializeApp(firebaseConfig);
  },
  render: h => h(App)
}).$mount('#app')