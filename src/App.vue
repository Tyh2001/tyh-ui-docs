<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
  width: 6px;
  background-color: #ffffff;
}
::-webkit-scrollbar-thumb {
  background: #dddddd;
  border-radius: 6px;
}
// 选择文本样式
::selection {
  background: rgb(108, 99, 255);
  color: #ffffff;
}
</style>
