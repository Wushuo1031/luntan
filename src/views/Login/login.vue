<template>
  <div class="login-container">
    <van-nav-bar fixed class="navbar" title="头条项目 - 登录" />
    <van-form @submit="onSubmit">
      <!-- label 代表的是左侧的文字 -->
      <!-- required 代表的是  必填项那个 * 红色星号 -->
      <van-field
        required
        v-model="form.mobile"
        label="手机号码"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^1\d{10}$/,
            message: '请填写正确的手机号',
            trigger: 'onBlur',
          },
        ]"
      />
      <van-field
        required
        v-model="form.code"
        type="password"
        label="登录密码"
        placeholder="请输入密码"
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
import { loginAPI } from '@/api/userApi.js'
// 从Vuex中按需导入谬忒神
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        // 用户的手机号
        mobile: '13888888888',
        // 登录的密码
        code: '246810'
      }
    }
  },
  methods: {
    ...mapMutations(['updateTokenInfo']),
    async onSubmit (obj) {
      const { data: res } = await loginAPI(this.form)
      console.log(res)
      if (res.message === 'OK') {
        // 登录成功

        // 1.存储Token到本地
        // localStorage.setItem('token', JSON.stringify(res.data))
        // 把token存储到Vuex
        this.updateTokenInfo(res.data)
        // 2.跳转到首页
        this.$router.push('/')
      } else {
        // 登录失败111
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__title {
  color: white;
}
.login-container {
  padding-top: 46px;
}
</style>
