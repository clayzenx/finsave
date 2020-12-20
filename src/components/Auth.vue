<template>
  <div id="auth-page">
    <a-tabs type="card">
      <a-tab-pane key="1" tab="Loggin">
        <loggin-form/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Registration">
        <registration-form/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import LogginForm from './LogginForm.vue'
import RegistrationForm from './RegistrationForm.vue'

  export default {
    components: { LogginForm, RegistrationForm },
  }
</script>

<style lang="less" scoped>
  @import '../assets/styles/auth-form.less';
</style>