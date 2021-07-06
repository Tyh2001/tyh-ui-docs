<template>
  <div id="component-item">
    <h1 class="title">Color 色彩</h1>
    <p class="explain">tyh-ui 在这里提供了一些比较鲜艳、友好的颜色提供使用</p>
    <h3 class="Subtitle">内部颜色：</h3>
    <p class="explain">
      下面是 tyh-ui 内部使用的颜色色号，采用的比较鲜亮的颜色
    </p>
    <p class="explain">点击即可复制颜色色号</p>

    <!-- 颜色列表1 -->
    <div id="colorList1">
      <div
        class="colorList-item1"
        v-for="(list1, index) in colorList1"
        :style="ListBackgroundColor(list1)"
        :key="index"
        :data-clipboard-text="list1.color"
        @click="copyColor('.colorList-item1')"
      >
        <p>类型：{{ list1.type }}</p>
        <p>{{ list1.color }}</p>
      </div>
    </div>

    <!-- 颜色列表2 -->
    <h3 class="Subtitle">字体边框：</h3>
    <p class="explain">下面是 tyh-ui 内部使用的字体边框色号</p>
    <p class="explain">点击即可复制颜色色号</p>
    <div id="colorList2">
      <div
        class="colorList-item2"
        v-for="(list2, index) in colorList2"
        :style="ListBackgroundColor(list2)"
        :key="index"
        :data-clipboard-text="list2.color"
        @click="copyColor('.colorList-item2')"
      >
        <p>类型：{{ list2.type }}</p>
        <p>{{ list2.color }}</p>
      </div>
    </div>

    <!-- 颜色列表3 -->
    <h3 class="Subtitle">其他推荐：</h3>
    <p class="explain">下面是 tyh-ui 推荐的一些其他色彩</p>
    <p class="explain">点击即可复制颜色色号</p>
    <div id="colorList3">
      <div
        class="colorList-item3"
        v-for="(list3, index) in colorList3"
        :style="ListBackgroundColor(list3)"
        :key="index"
        :data-clipboard-text="list3.color"
        @click="copyColor('.colorList-item3')"
      >
        <p>类型：{{ list3.type }}</p>
        <p>{{ list3.color }}</p>
      </div>
    </div>

    <TurnPage :TurnPageList="TurnPageList" />
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import TurnPage from '../components/TurnPage'
export default {
  name: '',
  components: {
    TurnPage
  },
  props: {},
  data () {
    return {
      // 颜色列表1
      colorList1: [
        { color: '#409eff', type: 'primary' },
        { color: '#2ea44f', type: 'success' },
        { color: '#f05048', type: 'danger' },
        { color: '#ff7700', type: 'warning' }
      ],
      // 颜色列表2
      colorList2: [
        { color: '#333333', type: '主标题' },
        { color: '#3f536e', type: '副标题' },
        { color: '#515a6e', type: '常规字体' },
        { color: '#dcdfe6', type: '边框' }
      ],
      colorList3: [
        { color: '#0f1423', type: '钢蓝' },
        { color: '#481e1c', type: '豆沙' },
        { color: '#33141e', type: '火鹅紫' },
        { color: '#393733', type: '河豚灰' },
        { color: '#732e12', type: '筍皮棕' },
        { color: '#503e2a', type: '橄榄灰' },
        { color: '#5e665b', type: '田螺绿' },
        { color: '#73575c', type: '鼠背灰' },
        { color: '#8b2671', type: '青莲' },
        { color: '#f04b22', type: '大红' },
        { color: '#ef475d', type: '草茉莉红' },
        { color: '#e16c96', type: '初荷红' },
        { color: '#134857', type: '苍蓝' },
        { color: '#346c9c', type: '海军蓝' },
        { color: '#2177b8', type: '虹蓝' },
        { color: '#8abcd1', type: '秋波蓝' },
        { color: '#1491a8', type: '樫鸟蓝' },
        { color: '#51c4d3', type: '瀑布蓝' },
        { color: '#428675', type: '亚丁绿' },
        { color: '#2c9678', type: '青矾绿' },
        { color: '#bec936', type: '橄榄黄绿' },
        { color: '#61ac85', type: '淡绿' },
        { color: '#579572', type: '蛋白石绿' },
        { color: '#c6dfc8', type: '淡翠绿' },
        { color: '#f19790', type: '舌红' },
        { color: '#eea2a4', type: '牡丹粉红' },
        { color: '#eea6b7', type: '晶红' },
        { color: '#e4dfd7', type: '珍珠灰' },
        { color: '#fed71a', type: '佛手黄' },
        { color: '#f2ce2b', type: '硫华黄' },
        { color: '#f9d367', type: '淡密黄' },
        { color: '#ddc871', type: '芒果黄' },
        { color: '#9a8878', type: '海鸥灰' },
        { color: '#bbb5ac', type: '铅灰' },
        { color: '#f9e9cd', type: '米色' },
        { color: '#e2e1e4', type: '芡食白' }
      ],
      TurnPageList: [
        { text: '快速上手', url: 'install' },
        { text: 'Button 按钮', url: 'button' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 每个盒子的颜色
    ListBackgroundColor (item) {
      return {
        background: item.color
      }
    },
    // 点击复制颜色色号
    copyColor (dom) {
      const clipboard = new Clipboard(dom)
      // 复制成功
      clipboard.on('success', e => {
        this.$message({
          message: '复制成功',
          type: 'danger',
          iconClass: 'tyh-ui-success-01'
        })
        clipboard.destroy()
      })
      // 复制失败
      clipboard.on('error', e => {
        this.$message({
          message: '您的浏览器不支持复制',
          type: 'warning',
          iconClass: 'tyh-ui-warning-01'
        })
        clipboard.destroy()
      })
    }
  }
}
</script>

<style lang='less' scoped>
#component-item {
  padding-bottom: 250px;
  // 主标题
  .title {
    font-weight: 500;
    color: #1f2f3d;
    margin-bottom: 50px;
    user-select: none;
  }
  // 说明
  .explain {
    color: #515a6e;
    line-height: 40px;
    font-size: 15px;
    user-select: none;
  }
  // 副标题
  .Subtitle {
    color: #515a6e;
    line-height: 60px;
    user-select: none;
    margin-top: 30px;
  }

  // 颜色列表
  #colorList1,
  #colorList2,
  #colorList3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .colorList-item1,
    .colorList-item2,
    .colorList-item3 {
      margin-top: 10px;
      width: 200px;
      height: 70px;
      border-radius: 5px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
