<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png" />
    <el-button type="primary">主要按钮</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

const a = 1
console.log(a)

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  created() {
    this.$services.querySystemDetails(1).then(
      () => {
        console.log(this)
        console.log('request', arguments)
      },
      () => {
        console.log(this)
      },
    )
  },
}
</script>

<style lang="scss">
body {
  background: $blue;
}
</style>
