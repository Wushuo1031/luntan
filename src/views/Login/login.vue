<template>
  <div class="login-container">
    <van-nav-bar fixed class="navbar" title="头条项目 - 登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.mobile"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.code"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        // 用户的手机号
        mobile: '',
        // 登录的密码
        code: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  // background-color: pink;
}
/deep/ .van-nav-bar__title {
  color: white;
}
.login-container {
  padding-top: 46px;
}
</style>
