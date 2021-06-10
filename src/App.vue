<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {}
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
body,
html,
#app {
  width: 100%;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  background: #cfcfcf;
  border-radius: 8px;
}
</style>
