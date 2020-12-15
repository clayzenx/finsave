// tabs: [{name, href}]

<template>
  <div id="menu">
    <a-tabs @change="redirect" :size="size" tabPosition='bottom'>
      <a-tab-pane v-for="tab in tabs" :key="tab.id" :tab="tab.name"></a-tab-pane>
    </a-tabs>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        prevTab: 0
      }
    },
    props: {
      tabs: { type: Array, required: true },
      size: { type: String, default: 'default' },
    },
    methods: {
      redirect(key) {
        if(this.prevTab > key) this.$emit('changeDirection', 'left');
        else if(this.prevTab < key) this.$emit('changeDirection', 'right');
        this.prevTab = key;

        this.$router.push(this.tabs.find(tab => tab.id === key).href)
      }
    },
  }
</script>

<style scoped>
  #menu {
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
  }
</style>