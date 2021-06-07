<template>
  <div>
    <div class="bar">
      导航栏
      <router-link to="/">首页</router-link>-
      <router-link to="/component">组件</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>
.bar {
  width: 100%;
  height: 60px;
  background: skyblue;
}
</style>
