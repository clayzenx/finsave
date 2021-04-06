<template>
  <div id="app">
    <div id='home' v-if='user'>
      <transition :name='transition'>
        <div id="view" :class="$mq">
          <router-view />
        </div>
      </transition>
      <tabs :tabs="tabs" @changeDirection='changeDirection'></tabs>
    </div>
    <auth v-else/>
    <p>hello</p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { mapActions, mapGetters } from 'vuex'

  import Tabs from './components/Tabs.vue'
  import Auth from './components/Auth.vue'

  export default {
    components: { Tabs, Auth },
    data() {
      return { 
        transition: 'slide',
        tabs: [
          { id: 1, name: 'home', href: '/', icon: 'home' },
          { id: 2, name: 'about us', href: '/about', icon: 'info-circle' },
          { id: 3, name: 'contacts', href: '/contacts', icon: 'contacts' },
          { id: 4, name: 'config', href: '/config', icon: 'control' },
        ],
      }
    },
    computed: {
      ...mapGetters(['user']),
    },
    methods: {
      ...mapActions(['onAuthState','updateUser']),
      changeDirection(direction) {
        if (direction === 'left') this.transition = 'slide'
        else if (direction === 'right') this.transition = 'slide-reverse'
        else console.error('wrong argument in chageDirection()')
      },
    },
    created(){  
      //authorization state watcher
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.updateUser(user)
          console.log(this.user);
        }
        else this.updateUser(null);
      })
    }
  }
</script>

<style lang="less">
  @import '../src/assets/styles/transitions/slide.css';
  @import '../src/assets/styles/transitions/slide-reverse.css';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow-x: hidden;
  }

  #view.tablet,
  #view.laptop,
  #view.desktop {
    margin-top: 75px;
  }

  #view.mobile {
    margin-top: 20px;
  }
</style>