<template>
  <div id="TurnPage">
    <!-- 上一页下一页组件 -->
    <router-link
      v-if="TurnPageList[0].text"
      class="pageList"
      :to="TurnPageList[0].url"
    >
      <Tyh-icon icon="tyh-ui-left-02" />
      {{ TurnPageList[0].text }}
    </router-link>

    <router-link
      v-if="TurnPageList[1].text"
      class="pageList"
      :to="TurnPageList[1].url"
    >
      {{ TurnPageList[1].text }}
      <Tyh-icon icon="tyh-ui-right-02" />
    </router-link>
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
  user-select: none;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .pageList {
    text-decoration: none;
    color: #515a6e;
    &:hover {
      transition: color 0.25s;
      color: #409eff !important;
      .tyh-icon {
        transition: color 0.25s;
        color: #409eff !important;
      }
    }
  }
}
</style>
