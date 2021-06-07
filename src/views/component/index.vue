<template>
  <div id="conponentIndex">
    <div class="box1">
      <router-link to="/component/button">按钮组件</router-link>
      <br>
      <router-link to="/component/list">列表组件</router-link>
      <br>
      <router-link to="/component/card">卡片组件</router-link>
    </div>
    <div class="box2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conponentIndex',
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
#conponentIndex {
  display: flex;
  .box1 {
    width: 300px;
    background: greenyellow;
  }
  .box2 {
    width: 800px;
    background: red;
  }
}
</style>
