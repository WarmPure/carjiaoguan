<template>
  <div class="login-footer">
    <div class="nav">
      <a href="#">关于我们</a><span>|</span>
      <a href="#">联系我们</a><span>|</span>
      <a href="#">人才招聘</a><span>|</span>
      <!--<a href="#">商家入驻</a><span>|</span>-->
      <a href="#">广告服务</a><span>|</span>
      <a href="#">友情链接</a>
    </div>
    <div class="copy">
      Copyright @ 2020-2021 东方大众版权所有
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Footer'
})
export default class extends Vue {

}
</script>

<style lang="scss" scoped>
  .login-footer{
    padding-top: 30px;
    width: 100%;
    font-family: SourceHanSansCN-Normal;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
    text-align: center;
    .nav{
      margin-bottom: 10px;
      span{
        padding: 0px 10px;
      }
    }

  }
</style>
