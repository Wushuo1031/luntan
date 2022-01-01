<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      key: ''
    }
  }
}
</script>

<style lang="less" scoped>
h1 {
  font-size: 13px;
}
</style>
