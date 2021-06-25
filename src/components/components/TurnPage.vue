<template>
  <div id="TurnPage">
    <!-- 上一页下一页组件 -->
    <span class="pageList">
      <Tyh-link :url="TurnPageList[0].url">
        <Tyh-icon :icon="TurnPageList[0].icon" />
        {{ TurnPageList[0].text }}
      </Tyh-link>
    </span>

    <span class="pageList">
      <Tyh-link :url="TurnPageList[1].url">
        {{ TurnPageList[1].text }}
        <Tyh-icon :icon="TurnPageList[1].icon" />
      </Tyh-link>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TurnPage',
  components: {},
  props: {
    TurnPageList: {
      type: Array,
      require: true
    }
  },
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

<style lang='less' scoped>
#TurnPage {
  margin-top: 120px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .pageList:hover {
    .tyh-link,
    .tyh-icon {
      transition: color 0.25s;
      color: #409eff !important;
    }
  }
}
</style>
