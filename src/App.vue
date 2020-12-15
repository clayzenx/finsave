<template>
  <div id="app">
    <transition :name='transition'>
      <router-view/>
    </transition>
    <tabs :tabs="tabs" @changeDirection='changeDirection'></tabs>
  </div>
</template>

<script>
import Tabs from './components/Tabs.vue'

export default {
  components: { Tabs },
  data() {
    return {
      transition: 'slide',
      tabs: [
        { id: 1, name: 'home', href: '/'},
        { id: 2, name: 'about us', href: '/about'},
        { id: 3, name: 'contacts', href: '/contacts'},
      ],
    }
  },
  methods: {
    changeDirection(direction) {
      if(direction === 'left') this.transition = 'slide'
      else if(direction === 'right') this.transition = 'slide-reverse'
      else console.error('wrong argument in chageDirection()')
    }
  },
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
</style>
