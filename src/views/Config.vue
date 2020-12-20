<template>
  <div>
    <a-button type="link" @click="logOutUser">logoff</a-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['logOutUser'])
    }
  }
</script>

<style lang="scss" scoped>

</style>