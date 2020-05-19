<template>
  <div class="login-header">
    <div class="logo">
      <img class="logo-img" :src="logo" alt="">
      <h5 class="logo-title">{{logoTile}}</h5>
      <router-link class="register" :to="routerLink">{{routerLinkText}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Header'
})
export default class extends Vue {
  @Prop({ default: 'Login' }) private status!: string

  private logo = require('@/assets/image_login/hlogo.png')

  get routerLink(){
    return this.status == 'Login' ? '/register' : '/login'
  }

  get routerLinkText(){
    return this.status == 'Login' ? '账号申请' : '已有账号，登录'
  }

  get logoTile(){
    return this.status == 'Login' ? '欢迎登录' : '欢迎注册'
  }

}
</script>

<style lang="scss" scoped>
  .login-header{
    width: 100%;
    padding: 15px 0px;
    background-color: #FFFFFF;
    .logo{
      width: 1360px;
      height: 50px;
      margin: 0 auto;
      .logo-img {
        border-right: 1px solid #EEEEEE;
        float: left;
        padding-right: 15px;
      }
      .logo-title{
        display: inline-block;
        font-family: PingFangSC-Medium;
        font-size: 28px;
        color: #4A4A4A;
        letter-spacing: 2px;
        text-align: justify;
        padding-left: 20px;
        margin: 0;
        line-height: 50px;
        font-weight: 400;
      }
      .register{
        float: right;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        line-height: 50px;
        font-weight: 400;
      }
    }
  }
</style>
