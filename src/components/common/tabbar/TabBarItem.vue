<template>
<!-- 所有的item都展示同一个图片 同一个文字 -->
  <div class="tab-bar-item" @click = "itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div v-bind:style="activeStyle"><slot name="item-text"></slot></div>

     <!-- <img src="../../assets/img/tabbar/xiaofangzi.png" alt="">
        <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      // default 是没有任何值的时候默认的值
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    },
  },
  methods: {
    itemClick() {
      // 想返回就用push  不返回就用replace
      this.$router.replace(this.path)
      // console.log("123");

    },

  }
}
</script>

<style scoped>
  .tab-bar-item {
      flex: 1;
      text-align: center;
      height: 49px;
      /* background-color: #fff; */
      font-size: 14px;
    }

    .tab-bar-item img {
      width: 24px;
      height: 24px;
      margin-top: 3px;
      /* 去除图片下面的默认3像素 */
      vertical-align: middle;
      margin-bottom: 2px;
    }

</style>
