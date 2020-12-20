<template>
  <a-form-model @submit="submit" @submit.native.prevent ref="ruleForm" :model='form' :rules="rules" class='auth-form' :class='$mq'>
    <a-form-model-item ref="email" prop="email">
      <a-input v-model="form.email" placeholder="Email">
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item ref="password" prop="password">
      <a-input v-model="form.password" type="password" placeholder="Пароль">
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item>
      <a-button type="primary" html-type="submit" :disabled="form.email === '' || form.password === ''">
        Войти
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapActions} from 'vuex'
  export default {
    data() {
      return {
        form: { email: '', password: ''},
        rules: {
          email: [
            { required: true, message: 'Введите Email!', trigger: 'blur' },
            { type: 'email', message: 'Не корректный Email адресс!', trigger: 'change'},
            { type: 'email', message: 'Не корректный Email адресс!', trigger: 'blurZ'}
          ],
          password: [
            { required: true, message: 'Введите пароль!', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      ...mapActions(['authUser']),
      submit(){
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.authUser(this.form)
          } else {
            return false;
          }
        });
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>