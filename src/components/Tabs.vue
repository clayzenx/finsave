// tabs: [{id, name, href, icon}]
// dependency: vue-mq

<template>
  <div id="menu" :class="$mq">
    <a-tabs 
      @change="redirect" 
      :size="$mq === 'mobile'? 'small': 'large'" 
      :tabPosition="$mq === 'mobile'? 'bottom': 'top'"
      :default-active-key="currentPage"
    >
      <a-tab-pane v-for="tab in tabs" :key="tab.id">
        <span slot="tab">
          <a-icon :type="tab.icon" />
          <span v-if="$mq !== 'mobile'">{{tab.name}}</span>
        </span>
      </a-tab-pane>
    </a-tabs>
  </div>

</template>

<script>
  export default {
    data() {
      return { prevTab: 0 }
    },
    props: {
      tabs: { type: Array, required: true },
    },
    computed: {
      currentPage(){
        return this.tabs.find(tab => tab.href === this.$route.path).id
      }
    },
    methods: {
      redirect(key) {
        if (this.prevTab > key) this.$emit('changeDirection', 'left');
        else if (this.prevTab < key) this.$emit('changeDirection', 'right');
        this.prevTab = key;

        this.$router.push(this.tabs.find(tab => tab.id === key).href)
      },
    },
  }
</script>

<style lang='postcss' scoped>
  #menu {
    background-color: white;
    width: 100%;
    overflow: hidden;
    position: fixed;
  }

  .tablet,
  .laptop,
  .desktop {
    top: 0
  }

  .mobile {
    bottom: 0;
  }
</style>