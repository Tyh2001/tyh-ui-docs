<template>
  <div id="TurnPage">
    <!-- 上一页下一页组件 -->
    <span class="pageList">
      <Tyh-link
        :url="TurnPageListURL(TurnPageList[0].url)"
        v-if="TurnPageList[0].text"
      >
        <Tyh-icon icon="tyh-ui-left-02" />
        {{ TurnPageList[0].text }}
      </Tyh-link>
    </span>

    <span class="pageList" v-if="TurnPageList[1].text">
      <Tyh-link :url="TurnPageListURL(TurnPageList[1].url)">
        {{ TurnPageList[1].text }}
        <Tyh-icon icon="tyh-ui-right-02" />
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
  methods: {
    // 跳转路径函数
    TurnPageListURL (url) {
      if (url !== '/') {
        return `/#/component/${url}`
      }
      return url
    }
  }
}
</script>

<style lang='less' scoped>
#TurnPage {
  margin-top: 70px;
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
